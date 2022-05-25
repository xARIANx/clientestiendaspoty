import {generarToken} from './serviciosGenerarToken.js'

//LLAMAR A LA FUNCION generarToken
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

//URI DEL SERVICIO
const URI = "https://api.spotify.com/v1/artists/34EP7KEpOjXcM2TCat1ISk/top-tracks?market=US"

//CONFIGURO LA PETICION
const PETICION = {
    method: "GET",
    headers: {Authorization: token}
}

//CONSUMO EL SERVICIO
export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}