import { ADD_ARTICLE } from "../Constant/Action-types";

export function addArticle(payload){
    return {
        type: ADD_ARTICLE, 
        payload
    }
}