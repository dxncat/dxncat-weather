// src/components/weather/favorite-button.tsx
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { WeatherData } from "@/interfaces";
import { useFavorites } from "@/hooks";

interface FavoriteButtonProps {
    data: WeatherData;
}

export function FavoriteButton({ data }: FavoriteButtonProps) {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);

    const handleToggleFavorite = () => {
        if (isCurrentlyFavorite) {
            removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`);
            toast.error(`Se removió ${data.name} de Favoritos`);
        } else {
            addFavorite.mutate({
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                country: data.sys.country,
            });
            toast.success(`Se agregó ${data.name} a Favoritos`);
        }
    };

    return (
        <Button
            variant={isCurrentlyFavorite ? "default" : "outline"}
            size="icon"
            onClick={handleToggleFavorite}
            className={isCurrentlyFavorite ? "bg-yellow-500 hover:bg-yellow-600" : ""}
        >
            <Star
                className={`h-4 w-4 ${isCurrentlyFavorite ? "fill-current" : ""}`}
            />
        </Button>
    );
}