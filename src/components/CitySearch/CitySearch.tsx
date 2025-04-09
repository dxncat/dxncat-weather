import { useLocationSearch } from '@/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function CitySearch() {

    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState<string>("")
    const navigate = useNavigate()

    const { data: locations, isLoading } = useLocationSearch(query)

    const handleSelect = (cityData: string) => {
        const [lat, lon, name, country] = cityData.split("|")


    }

    return (
        <h1>

        </h1>
    )
}