import { eliminarContacto } from "../api/contactApi.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const ContactCard = ({contacto}) => {

const {store, dispatch} = useGlobalReducer()

    return(
        <div className="card" >
            <div>
            <h5>{contacto.name}</h5>
            <p>Email: {contacto.email}</p>
            <p>Telefono: {contacto.phone}</p>
            <p>Dirección: {contacto.address}</p>
            </div>
            <div>
                <button>Editar</button>
                <button onClick={() => eliminarContacto(contacto.id, dispatch)}>Eliminar</button>
            </div>
        </div>
    );
};