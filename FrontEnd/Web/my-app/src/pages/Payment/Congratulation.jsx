import {Link} from 'react-router-dom';
import "./Payments.css";

export default function CongratulationPayment() {
    return(
        <div className='container'>
            <h1>Compra feita com Sucesso</h1>
            <Link to="/">Início</Link>
        </div>
    )
}