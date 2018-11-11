export interface User {
    _id?: string;
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password:string,
    active?: boolean
}
