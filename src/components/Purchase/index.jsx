import { Container } from "./styles";

export const Purchase = ({ status, id, paymentType, total=23 }) => {
   
    return (
        <Container>
            <div className="title">
                <p>NÚMERO DO PEDIDO</p>
                <p>STATUS</p>
                <p>PAGAMENTO</p>
                <p>TOTAL</p>
            </div>
            <div className="content">
                <p className="id">#{id}</p>
                <p className="status">{status}</p>
                <p className="payment">{paymentType}</p>
                <p className="total">R${total}</p>
            </div>
        </Container>
    );
}