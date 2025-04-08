import { GeolocationState } from "@/interfaces";
import { useState, useEffect } from "react";

export function useGeolocation() {
    const [locationData, setLocationData] = useState<GeolocationState>({
        coordinates: null,
        error: null,
        isLoading: true,
    });

    const getLocation = () => {
        setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));

        if (!navigator.geolocation) {
            setLocationData({
                coordinates: null,
                error: "Geolocation is not supported by your browser",
                isLoading: false,
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocationData({
                    coordinates: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    },
                    error: null,
                    isLoading: false,
                });
            },
            (error) => {
                let errorMessage: string;

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage =
                            "Permiso denegado. No se puede acceder a la ubicación.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "Información de ubicación no disponible.";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "Respuesta de ubicación tardó demasiado.";
                        break;
                    default:
                        errorMessage = "Algo salió mal al obtener la ubicación.";
                }

                setLocationData({
                    coordinates: null,
                    error: errorMessage,
                    isLoading: false,
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            }
        );
    };

    useEffect(() => {
        getLocation();
    }, []);

    return {
        ...locationData,
        getLocation,
    };
}