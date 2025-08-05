export const traerContactos = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/Alexander/contacts")
    if (!response.ok) {
        crearAgenda()
    }
    console.log(response);
    const data = await response.json()
    console.log(data.contacts);
    dispatch({type:"traerContactos",payload:data.contacts})
    
}

const crearAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/Alexander", {
        method : "POST"

    })
}

export const eliminarContacto = async (id, dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/Alexander/contacts/" + id, {
        method : "DELETE"
    })
    traerContactos(dispatch)
}