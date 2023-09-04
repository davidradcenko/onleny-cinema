import { url } from "inspector"

export const getMovieUrl=(slug:string)=>`/movies/${slug}`
export const getGenreUrl=(slug:string)=>`/genre/${slug}`
export const getActorUrl=(slug:string)=>`/actor/${slug}`

export const getAdminUrl=(url:string)=> `/manage/${url}`
export const getAdminHomeUrl=()=> getAdminUrl('').slice(0,-1)
