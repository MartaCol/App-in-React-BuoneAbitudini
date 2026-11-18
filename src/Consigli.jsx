function Consigli(props) {
    return (
        <div>
            <h2>Consigli visualizzati</h2>

            <ul>
                {props.lista.map((consiglio, index) => (
                    <li key={index}>{consiglio}</li>
                ))}
            </ul>
        </div>
    );
}

export default Consigli;