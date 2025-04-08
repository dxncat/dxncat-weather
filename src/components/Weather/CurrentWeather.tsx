import { GeocodingResponse, WeatherData } from "@/interfaces";

interface Props {
    data: WeatherData;
    locationName?: GeocodingResponse;
}

export const CurrentWeather = ({ data, locationName }: Props) => {
    return (
        <div>CurrentWeather</div>
    )
}
