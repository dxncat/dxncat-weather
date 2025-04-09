import { useSearchHistory } from "@/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Link } from "react-router-dom"
import { Clock } from "lucide-react"
import { format } from "date-fns"
import { ScrollArea } from "../ui/scroll-area"
import { es } from "date-fns/locale"

export function History() {
    const { history } = useSearchHistory()

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Historial</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-full md:h-44">
                    <div className="grid gap-6">
                        {history.map((item) => (
                            <Link key={item.id} to={`/city/${item.name}?lat=${item.lat}?lon=${item.lon}`}>
                                <div className="flex justify-between gap-3 rounded-lg border p-4">
                                    <p className="flex items-center text-sm font-medium leading-none">
                                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>{item.name}</span>
                                        {item.state && (
                                            <span className="text-sm text-muted-foreground">
                                                , {item.state}
                                            </span>
                                        )}
                                        <span className="text-sm text-muted-foreground">
                                            , {item.country}
                                        </span>
                                    </p>
                                    <span className="text-sm text-muted-foreground">
                                        {format(item.searchedAt, "MMM d, h:mm a", { locale: es })}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}