import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsNumber, IsString, IsArray, IsUUID } from "class-validator";
import { AutoMap } from "@automapper/classes";

export default class GeolocationWeatherForecastResponseDto {
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: "Unique identifier for the location",
        type: String
    })
    @AutoMap()
    uuid: string;

    @IsNotEmpty()
    @ApiProperty({
        description: "UTC time when the forecast model was updated",
        type: Date
    })
    @AutoMap()
    modelrun_updatetime_utc: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Name of the forecast (optional)",
        type: String,
        required: false
    })
    @AutoMap()
    name?: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Height of the forecast location",
        type: Number
    })
    @AutoMap()
    height: number;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Time zone abbreviation",
        type: String
    })
    @AutoMap()
    timezone_abbrevation: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Latitude of the forecast location",
        type: Number
    })
    @AutoMap()
    latitude: number;

    @IsNotEmpty()
    @ApiProperty({
        description: "UTC time model",
        type: Date
    })
    @AutoMap()
    modelrun_utc: Date

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Longitude of the forecast location",
        type: Number
    })
    @AutoMap()
    longitude: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "UTC offset in hours",
        type: Number
    })
    @AutoMap()
    utc_timeoffset: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "Time taken to generate the forecast in milliseconds",
        type: Number
    })
    @AutoMap()
    generation_time_ms: number;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of time values for the forecast",
        type: [String]
    })
    @AutoMap()
    time: string[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of snow fraction data",
        type: [Number]
    })
    @AutoMap()
    snowfraction: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of wind speed values",
        type: [Number]
    })
    @AutoMap()
    windspeed: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of temperature values",
        type: [Number]
    })
    @AutoMap()
    temperature: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of precipitation probability values",
        type: [Number]
    })
    @AutoMap()
    precipitation_probability: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of convective precipitation data",
        type: [Number]
    })
    @AutoMap()
    convective_precipitation: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of rain spot data",
        type: [String]
    })
    @AutoMap()
    rainspot: string[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of pic-to-code data",
        type: [Number]
    })
    @AutoMap()
    pictocode: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of felt temperature data",
        type: [Number]
    })
    @AutoMap()
    felttemperature: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of precipitation data",
        type: [Number]
    })
    @AutoMap()
    precipitation: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of daylight information (whether it's daylight or not)",
        type: [Number]
    })
    @AutoMap()
    isdaylight: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of UV index values",
        type: [Number]
    })
    @AutoMap()
    uvindex: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of relative humidity data",
        type: [Number]
    })
    @AutoMap()
    relativehumidity: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of sea level pressure data",
        type: [Number]
    })
    @AutoMap()
    sealevelpressure: number[];

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        description: "Array of wind direction data",
        type: [Number]
    })
    @AutoMap()
    winddirection: number[];
}
