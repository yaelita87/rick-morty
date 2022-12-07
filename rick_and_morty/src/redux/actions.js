export const FAV = "FAV"
export const UNFAV = "UNFAV"
export const FILTER= "FILTER"
export const ORDER= "ORDER"

export function fav(character){
    return{
       type: FAV,
       payload: character,
    }
}

export function unFav(id){
    return{
      type: UNFAV,
      payload: id,
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        payload: status,

    }
}

export function orderCards(id){
    return{
        type: ORDER, 
        payload: id,
    }
}