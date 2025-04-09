import { useFavorites } from "@/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { format } from "date-fns"
import { ScrollArea } from "../ui/scroll-area"
import { es } from "date-fns/locale"

export function FavoriteSection() {
    const { favorites } = useFavorites()

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Tus Favoritos</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-full md:h-44">
                    {favorites.length > 0 ? (
                        <div className="grid gap-6 lg:grid-cols-2">
                            {
                                favorites.map((favorite) => (
                                    <Link key={favorite.id} to={`/city/${favorite.name}?lat=${favorite.lat}?lon=${favorite.lon}`}>
                                        <div className="flex justify-between gap-3 rounded-lg border p-4">
                                            <p className="flex items-center text-sm font-medium leading-none">
                                                <Star className="mr-2 size-4 text-yellow-500" />
                                                <span>{favorite.name}</span>
                                                {favorite.state && (
                                                    <span className="text-sm text-muted-foreground">
                                                        , {favorite.state}
                                                    </span>
                                                )}
                                                <span className="text-sm text-muted-foreground">
                                                    , {favorite.country}
                                                </span>
                                            </p>
                                            <span className="text-sm text-muted-foreground">
                                                {format(new Date(favorite.addedAt), "MMM d", { locale: es })}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-sm text-muted-foreground">
                                No tienes favoritos para mostrar. Agrega algunos para verlos aquí.
                            </p>
                        </div>
                    )
                    }
                </ScrollArea>
            </CardContent>
        </Card>
    )
}