import { get } from "./../models/get.js";
import { post } from "./../models/post.js";
import { put } from "./../models/put.js";
import { patch } from "./../models/patch.js";
import { delet } from "./../models/delete.js";


export async function controlador(complUrl, entidad, accion, objeto) {
    const URL = "http://localhost:4001/";
    let url = "";

    switch (accion) {
        case "buscar":
            url = `${URL}${entidad}${complUrl !== null || complUrl !== "" ? complUrl : "/"}`;
            const respuestaGet = await get(url);
            return respuestaGet;
            
        case "agregar":
            url = `${URL}${entidad}${complUrl !== null || complUrl !== "" ? complUrl : "/"}`;
            const respuestaPost =  await post(url, objeto);
            return respuestaPost;
    }

    /*switch (value) {
        case "Agregar":
          url = URL + entidad;
          post(url, datos);
          formu.reset();
          break;
        case "CARGARSELECT":
        case "Buscar":
          url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
          get(url, formu).then((data) => {
            // Utilizar los datos obtenidos
            if (formu !== null) llenarFormulario(formu, data);
            else if (value === "CARGARSELECT") llenarSelect(data, elemformu);
          });
          break;
        case "Modificar":
          url = URL + entidad + `/${datos.id}`;
          put(url, datos);
          //formu.reset
          break;
        case "Borrar":
          url = URL + entidad + `/${datos.id}`;
          delet(url);
          formu.reset;
    }    */
}