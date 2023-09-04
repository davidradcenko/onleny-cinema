import { getMovieUrl } from "@/config/url.config"
import { IMovie } from "@/shared/types/movies.types"
import { axiosClassic } from "api/interceptors"

export const MovieService={
    async getALL(searchTerm?:string){
        return axiosClassic.get<IMovie[]>(getMovieUrl(''),{
            params:searchTerm
            ?{
                searchTerm,
            }
            :{},
        })
    }
} 