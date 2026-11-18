import { useState } from "react";
import Consigli from "./Consigli";
import "./App.css";
function App() {

    const suggerimenti = [
        "Bere acqua regolarmente",
        "Fare attività fisica",
        "Dormire almeno 8 ore",
        "Mangiare frutta e verdura",
        "Leggere un libro",
        "Fare una passeggiata",
        "Limitare il tempo davanti agli schermi"
    ];

    const [lista, setLista] = useState([]);

    function aggiungiConsiglio() {

        let numero = Math.floor(Math.random() * suggerimenti.length);
        let consiglio = suggerimenti[numero];

        if (lista.includes(consiglio)) {
            alert(consiglio + " è già stato visualizzato!");
        } else {
            setLista([...lista, consiglio]);
        }
    }

    return (
        <div>
            <h1>Buone abitudini</h1>

            <button onClick={aggiungiConsiglio}>
                Mostra un consiglio
            </button>

            <Consigli lista={lista} />
        </div>
    );
}

export default App;