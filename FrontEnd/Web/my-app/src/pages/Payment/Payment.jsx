import {Link} from 'react-router-dom';
import "./Payments.css";

export default function Payments() {
    return(
        <div className='container'>
            <h1>Deseja comprar a versão premium por 10 reais?</h1>
            <Link>Comprar</Link>
        </div>
    )
}