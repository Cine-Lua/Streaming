import {Link} from 'react-router-dom';
import "./Payments.css";

export default function Payment() {
    return(
        <div className='container'>
            <h1>Deseja comprar a versão premium por 10 reais?</h1>
            <Link to="/payments/congratulation">Comprar</Link>
        </div>
    )
}