//. para donde voy?

const URIPOST= 'https://accounts.spotify.com/api/token'

//2.almaceno los datos que voy enviar
let dato1='client_id=7983a87990e34c16827faf37539e2e42'
let dato2='client_secret=57398ea24059496db28e90b45bbf42dc'
let dato3='grant_type=client_credentials'

//configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4.consumir un servicio
export async function generarToken(){
    let respuesta = await fetch(URIPOST, PETICIONPOST)
    return (respuesta.json())
}