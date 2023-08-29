import { getGenresUrl } from "@/config/api.config"
import { IGenre } from "@/shared/types/movies.types"
import { axiosClassic } from "api/interceptors"
import axios from 'axios'

export const GenreService={
    async getPopularGenres(){
        return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
    }
} 