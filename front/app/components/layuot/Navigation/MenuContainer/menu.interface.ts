export interface IMenuItem {
    icon : string
    title: string
    link:  string
}

export interface IMenu{
    title:string
    items:IMenuItem[]
}