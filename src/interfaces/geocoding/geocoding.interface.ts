import { Coordinates } from "../coordinates/coordinates.interface";

export interface GeocodingResponse {
    name: string;
    local_names?: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

export interface GeolocationState {
    coordinates: Coordinates | null;
    error: string | null;
    isLoading: boolean;
}