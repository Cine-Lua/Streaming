import {Link} from 'react-router-dom';
import "./Payments.css";
import { useEffect, useState } from "react";

export default function FailPayment() {
    const [motivoErro, setMotivoErro] = useState("");

    useEffect(() => {
        setMotivoErro('Falta de saldo');
    }, []);

    return(
        <div className='container'>
            <h1>Compra Negada por: {motivoErro}</h1>
            <Link to="/payments">Voltar</Link>
        </div>
    )
}