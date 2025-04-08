import { AlertTriangle, MapPin } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

interface Props {
    locationError: string | null;
    getLocation: () => void;
}

export function AlertPermission({ locationError, getLocation }: Props) {
    return (
        <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error de locación</AlertTitle>
            <AlertDescription className="flex flex-col gap-4">
                <p>{locationError}</p>
                <Button variant="outline" onClick={getLocation} className="w-fit">
                    <MapPin className="mr-2 h-4 w-4" />
                    Habilita el acceso a la ubicación
                </Button>
            </AlertDescription>
        </Alert>
    )
}