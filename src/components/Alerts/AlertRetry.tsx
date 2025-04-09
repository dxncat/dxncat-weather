import { AlertTriangle, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

interface Props {
    handleRefresh: () => void;
}

export function AlertRetry({ handleRefresh }: Props) {
    return (
        <div className="min-h-screen">
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="flex flex-col gap-4">
                    <p>A ocurrido un error mientras se obtenía la ubicación, por favor, intenta de nuevo</p>
                    <Button variant="outline" onClick={handleRefresh} className="w-fit">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Intentar de nuevo
                    </Button>
                </AlertDescription>
            </Alert>
        </div>
    )
}