// Api Response models
export interface IApiResponseModel<T> {
    [key:string]: T;
}
export interface IUser { 
    cell?: string,
    dob?: IDob,
    email?: string | undefined,
    gender?: string,
    id?: IId,
    location?: ILocation,
    login?: any
    name?: IName
    nat?: string
    phone?: string
    picture?: IPicture,
    registered?: IRegistered,
    UUid?:string
}
interface IDob {
    date: Date,
    age: number
}
interface IId {
    name: string,
    value: any
}
interface ILocation {
    street?: Istreet ,
    city?: string | undefined,
    state?: string,
    country?: string | undefined,
    postcode?: number,
    coordinates?: Icoordinates,
    timezone?:Itimezone
}
interface Istreet {
    number: number | undefined,
    name: string | undefined
}
interface Icoordinates {
    latitude: string,
    longitude: string
}
interface Itimezone {
    offset: string,
    description: string
}
interface IName {
    title?: string | undefined,
    first: string | undefined,
    last: string | undefined
}
interface IPicture {
    large?: string | undefined,
    medium?: string | undefined,
    thumbnail?: string | undefined
}
interface IRegistered {
    date:string,
    age: number
}
export interface InitialState {
    allUsers:IUser[],
    modalLoadForm:FormType | null
}

export enum FormType {
    EDIT_USER = 'EDIT_USER',
    ADD_USER = 'ADD_USER'
}
export interface IAddUser {
    firstName: string,
    lastName: string,
    title: string,
    Country: string,
    City: string,
    Street:string,
    StreetNumber:number
    img: string,
    email: string,
    UUid?:string,
}


