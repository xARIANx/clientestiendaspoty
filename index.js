import {obtenerCanciones} from './servicioGeneralCanciones.js'
import {pintarCanciones} from './pintarCanciones.js'

//LLAMAR A LA FUNCION generarToken
let canciones=await obtenerCanciones()

//LLAMAR LA FUNCION PINTAR CANCIONES
pintarCanciones(canciones.tracks)
