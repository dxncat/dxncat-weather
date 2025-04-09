import { WeatherData } from "@/interfaces";
import { format } from "date-fns";
import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
    data: WeatherData
}

export function WeatherDetails({ data }: Props) {
    const { wind, main, sys } = data;

    const formatTime = (timestamp: number) => {
        return format(new Date(timestamp * 1000), "h:mm a");
    }

    const getWindDirection = (degree: number) => {
        const direction = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"]
        const index = Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8
        return direction[index];
    }

    const details = [
        {
            title: "Amanecer",
            value: formatTime(sys.sunrise),
            icon: Sunrise,
            color: "text-orange-500"
        },
        {
            title: "Atardecer",
            value: formatTime(sys.sunset),
            icon: Sunset,
            color: "text-blue-500"
        },
        {
            title: "Dirección del viento",
            value: `${getWindDirection(wind.deg)} (${wind.deg}°)`,
            icon: Compass,
            color: "text-green-500"
        },
        {
            title: "Presión",
            value: `${main.pressure} hPa`,
            icon: Gauge,
            color: "text-purple-500"
        }
    ]

    return (
        <Card className="h-full md:h-72">
            <CardHeader>
                <CardTitle>Detalles del clima</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                    {details.map((detail) => (
                        <div key={detail.title} className="flex items-center gap-3 rounded-lg border p-4">
                            <detail.icon className={`size-5 ${detail.color}`} />
                            <div>
                                <p className="text-sm font-medium leading-none">
                                    {detail.title}
                                </p>
                                <p className="text-sm text-muted-foreground">{detail.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}