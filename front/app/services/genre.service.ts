import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movies.types"
import { axiosClassic } from "api/interceptors"
import axios from 'axios'

export const GenreService={
    async getALL(searchTerm?:string){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''),{
            params:searchTerm
            ?{
                searchTerm,
            }
            :{},
        })
    }
} 