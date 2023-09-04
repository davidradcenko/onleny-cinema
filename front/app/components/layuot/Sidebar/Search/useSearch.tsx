import { useDebounce } from "@/hooks/useDebounce"
import { MovieService } from "@/services/MovieService"
import { ChangeEvent, useState } from "react"
import { useQuery } from "react-query"

export const useSearch= ()=>{
    const [searchTerm, setSearchTerm]= useState('')
    const debouncedSearch =useDebounce(searchTerm,500)

    const {isSuccess,data}=useQuery(
        ['search movie list',debouncedSearch],
        ()=> MovieService.getALL(debouncedSearch),
        {
            select:({data})=> data,
            enabled: !!debouncedSearch
        }
    )

    const handleSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(e.target.value)
    }

    return {isSuccess,handleSearch,data,searchTerm}
}