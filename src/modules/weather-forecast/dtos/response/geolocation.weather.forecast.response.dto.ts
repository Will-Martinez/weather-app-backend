import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsNumber, IsString, IsArray, IsUUID } from "class-validator";

export default class GeolocationWeatherForecastResponseDto {
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: "Unique identifier for the location",
        type: String
    })
    uuid: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "UTC time when the forecast model was updated",
        type: Date
    })
    modelrun_updatetime_utc: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Name of the forecast (optional)",
        type: String,
        required: false
    })
    name?: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Height of the forecast location",
        type: Number
    })
    height: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Time zone abbreviation",
        type: String
    })
    timezone_abbrevation: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude of the forecast location",
        type: Number
    })
    latitude: number;

    @IsNotEmpty()
    @ApiProperty({
        description: "UTC time model",
        type: Date
    })
    modelrun_utc: Date

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude of the forecast location",
        type: Number
    })
    longitude: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "UTC offset in hours",
        type: Number
    })
    utc_timeoffset: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Time taken to generate the forecast in milliseconds",
        type: Number
    })
    generation_time_ms: number;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of time values for the forecast",
        type: [String]
    })
    time: string[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of snow fraction data",
        type: [Number]
    })
    snowfraction: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of wind speed values",
        type: [Number]
    })
    windspeed: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of temperature values",
        type: [Number]
    })
    temperature: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of precipitation probability values",
        type: [Number]
    })
    precipitation_probability: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of convective precipitation data",
        type: [Number]
    })
    convective_precipitation: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of rain spot data",
        type: [String]
    })
    rainspot: string[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of pic-to-code data",
        type: [Number]
    })
    pictocode: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of felt temperature data",
        type: [Number]
    })
    felttemperature: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of precipitation data",
        type: [Number]
    })
    precipitation: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of daylight information (whether it's daylight or not)",
        type: [Number]
    })
    isdaylight: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of UV index values",
        type: [Number]
    })
    uvindex: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of relative humidity data",
        type: [Number]
    })
    relativehumidity: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of sea level pressure data",
        type: [Number]
    })
    sealevelpressure: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of wind direction data",
        type: [Number]
    })
    winddirection: number[];
}
