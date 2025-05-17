export interface IUserData{
    name:string,
    email:string,
    address:string,
    userId:number
}
export interface IInputFprm{
    type:string,
    name:keyof IUserData,
    label:string,
    placeholder:string 
}