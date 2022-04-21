// Api Response models
export interface IApiResponseModel<T> {
    [key:string]: T;
}

export interface IAutoCompleteResponse { 
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country:Country_AdministrativeArea,
    AdministrativeArea: Country_AdministrativeArea
}

interface Country_AdministrativeArea {
    ID: string,
    LocalizedName: string
}

export interface ICurrentConditionsResponse { 
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: any,
    IsDayTime: boolean,
    Temperature: {
        Metric: Metric_Imperial,
        Imperial: Metric_Imperial
    },
    MobileLink: string,
    Link: string
}

interface Metric_Imperial{
    Value: number,
    Unit: string,
    UnitType: number
}

export interface INextFiveDaysResponse { 
        Headline: IHeadline,
        DailyForecasts: IDailyForecasts
}

interface IHeadline {
    EffectiveDate: string,
    EffectiveEpochDate: number,
    Severity: number,
    Text: string,
    Category: string,
    EndDate: string,
    EndEpochDate: number,
    MobileLink: string,
    Link: string
}

export interface IDailyForecasts {
    Date: string,
    EpochDate: number,
    Temperature: {
        Minimum: Minimum_Maximum,
        Maximum: Minimum_Maximum
    },
    Day: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean
    },
    Night: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean
    },
    Sources: Array<string>,
    MobileLink: string,
    Link: string
}

interface Minimum_Maximum{
    Value: number,
    Unit: string,
    UnitType: number
}

export interface InitialState {
    autoComplete:IAutoCompleteResponse[],
    likes:likes_currentPlace[],
    currentConditions:ICurrentConditionsResponse | {},
    nextFiveDays:INextFiveDaysResponse | {},
    currentPlace: likes_currentPlace,
    favoritesClassAnimation:boolean
}

export interface likes_currentPlace {
    name:string,
    code:string
}