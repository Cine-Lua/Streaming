import { useNavigate } from 'react-router-dom';
import "./Payments.css";

export default function Payments() {
    const navigate = useNavigate();

    const handleCompra = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/pagar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ produto: "premium", valor: 10 }),
            });

            const data = await response.json();
            if (data.sucesso) {
                navigate('/payments/congratulation'); // Redirecionamento controlado pelo React
            }
        } catch (error) {
            alert("Erro ao processar pagamento", error);
        }
    };

    return (
        <div className='container'>
            <h1>Deseja comprar a versão premium por 10 reais?</h1>
            <button onClick={handleCompra}>Comprar</button>
        </div>
    );
}