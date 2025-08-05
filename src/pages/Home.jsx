import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ContactCard } from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { traerContactos } from "../api/contactApi.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
 useEffect(() => {
	traerContactos(dispatch);
 }, []);
	return (
		<div className="text-center mt-5">
			{store.contacts && store.contacts.map((contacto, index) => (
				<ContactCard contacto={contacto} key={contacto.id}/>

			))}
		</div>
	);
}; 