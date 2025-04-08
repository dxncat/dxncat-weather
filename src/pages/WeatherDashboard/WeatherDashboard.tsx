import { AlertCoordinates, AlertPermission, AlertRetry, Button, CurrentWeather, HourlyTemperature, WeatherSkeleton } from "@/components"
import { useForecastQuery, useGeolocation, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks"
import { RefreshCw } from "lucide-react"

export const WeatherDashboard = () => {

    const { coordinates, error: locationError, getLocation, isLoading: locationLoading } = useGeolocation()

    const locationQuery = useReverseGeocodeQuery(coordinates)
    const forecastQuery = useForecastQuery(coordinates)
    const weatherQuery = useWeatherQuery(coordinates)

    const handleRefresh = () => {
        getLocation()
        if (coordinates) {
            weatherQuery.refetch()
            locationQuery.refetch()
            forecastQuery.refetch()
        }
    }

    if (locationLoading) {
        return <WeatherSkeleton />
    }

    if (locationError) {
        return <AlertPermission locationError={locationError} getLocation={getLocation} handleRefresh={handleRefresh} />
    }

    if (!coordinates) {
        return <AlertCoordinates getLocation={getLocation} />
    }

    const locationName = locationQuery.data?.[0]

    if (weatherQuery.error || forecastQuery.error) {
        return (
            <AlertRetry handleRefresh={handleRefresh} />
        )
    }

    if (!weatherQuery.data || !forecastQuery.data) {
        return <WeatherSkeleton />
    }

    return (
        <div className="space-y-4">

            <div className="flex items-center justify-between">

                <h1 className="text-xl font-bold tracking-tight">Mi Ubicación</h1>

                <Button
                    variant="outline"
                    size={"icon"}
                    onClick={handleRefresh}
                    disabled={weatherQuery.isFetching || forecastQuery.isFetching}
                >
                    <RefreshCw
                        className={`size-4 ${weatherQuery.isFetching ? "animate-spin" : ""
                            }`}
                    />
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="flex flex-col lg:flex-row gap-4">

                    <CurrentWeather
                        data={weatherQuery.data}
                        locationName={locationName}
                    />

                    <HourlyTemperature
                        data={forecastQuery.data}
                    />
                </div>
            </div>

        </div>

    )
}