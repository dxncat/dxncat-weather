import { AlertRetry, CurrentWeather, FavoriteButton, HourlyTemperature, WeatherDetails, WeatherForecast, WeatherSkeleton } from "@/components"
import { useWeatherQuery, useForecastQuery } from "@/hooks"
import { useParams, useSearchParams } from "react-router-dom"

export const CityPage = () => {

    const [searchParams] = useSearchParams()
    const params = useParams()

    const lat = parseFloat(searchParams.get('lat') || '0')
    const lon = parseFloat(searchParams.get('lon') || '0')

    const coordinates = { lat, lon };

    const weatherQuery = useWeatherQuery(coordinates)
    const forecastQuery = useForecastQuery(coordinates)

    const handleRefresh = () => {
        if (coordinates) {
            weatherQuery.refetch()
            forecastQuery.refetch()
        }
    }

    if (weatherQuery.error || forecastQuery.error) {
        return (
            <AlertRetry handleRefresh={handleRefresh} />
        )
    }

    if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
        return <WeatherSkeleton />
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">
                    {params.cityName}, {weatherQuery.data.sys.country}
                </h1>
                <div className="flex gap-2">
                    <FavoriteButton
                        data={{ ...weatherQuery.data, name: params.cityName }}
                    />
                </div>
            </div>

            <div className="grid gap-6">
                <CurrentWeather data={weatherQuery.data} />
                <HourlyTemperature data={forecastQuery.data} />
                <div className="grid gap-6 md:grid-cols-2 items-start">
                    <WeatherDetails data={weatherQuery.data} />
                    <WeatherForecast data={forecastQuery.data} />
                </div>
            </div>
        </div>
    )
}