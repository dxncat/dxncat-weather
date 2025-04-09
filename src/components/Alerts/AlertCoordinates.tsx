import { MapPin } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

interface Props {
    getLocation: () => void;
}

export function AlertCoordinates({ getLocation }: Props) {
    return (
        <div className="min-h-screen">
            <Alert>
                <MapPin className="h-4 w-4" />
                <AlertTitle>Locación Requerida</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>Por favor activa el permiso de ubicación para ver el clima en tu zona.</p>
                    <Button variant="outline" onClick={getLocation} className="w-fit">
                        <MapPin className="mr-2 h-4 w-4" />
                        Activar Ubicación
                    </Button>
                </AlertDescription>
            </Alert>
        </div>
    )
}