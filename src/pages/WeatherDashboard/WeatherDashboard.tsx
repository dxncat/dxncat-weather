import { AlertCoordinates, AlertPermission, Button, WeatherSkeleton } from "@/components"
import { useGeolocation } from "@/hooks"
import { RefreshCw } from "lucide-react"

export const WeatherDashboard = () => {

    const { coordinates, error: locationError, getLocation, isLoading: locationLoading } = useGeolocation()

    const handleRefresh = () => {
        getLocation()
        if (coordinates) {
            console.log("Ubicación actual:", coordinates)
        }
    }

    if (locationLoading) {
        return <WeatherSkeleton />
    }

    if (locationError) {
        return <AlertPermission locationError={locationError} getLocation={getLocation} />
    }

    if (!coordinates) {
        return <AlertCoordinates getLocation={getLocation} />
    }

    return (
        <div className="space-y-4">

            <div className="flex items-center justify-between">

                <h1 className="text-xl font-bold tracking-tight">Mi Ubicación</h1>

                <Button
                    variant="outline"
                    size={"icon"}
                    onClick={handleRefresh}
                    disabled={locationLoading}
                >
                    <RefreshCw className="size-4" />
                </Button>
            </div>

        </div>

    )
}