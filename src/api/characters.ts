import { instance } from "./base.api"

const enpoint = 'character'


export const characters = {
    getAll: function({page=1}: {page?: number}){
        return instance.get(enpoint, {params: {
            page
        }})
    },
    getById: function({id}: {id : string | undefined}){
        return instance.get(`${enpoint}/${id}`)
    },
}