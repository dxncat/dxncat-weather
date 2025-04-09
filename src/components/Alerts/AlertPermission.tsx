import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

interface Props {
    locationError: string | null;
    getLocation: () => void;
    handleRefresh: () => void;
}

export function AlertPermission({ locationError, getLocation, handleRefresh }: Props) {
    return (
        <div className="min-h-screen ">
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error de locación</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>{locationError}</p>
                    <div className="flex gap-4 flex-col sm:flex-row">

                        <Button variant="outline" onClick={getLocation} className="w-fit">
                            <MapPin className="mr-2 h-4 w-4" />
                            Habilita el acceso a la ubicación
                        </Button>

                        <Button variant="outline" onClick={handleRefresh} className="w-fit">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Intentar de nuevo
                        </Button>

                    </div>
                </AlertDescription>
            </Alert>
        </div>
    )
}