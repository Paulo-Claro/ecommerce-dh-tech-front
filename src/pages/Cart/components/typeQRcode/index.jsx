import { FaBarcode } from 'react-icons/fa';
import { Container } from './style';

export const TypeQRcode = () => {
    return (
        <Container>
            <FaBarcode />
            <p>(Pagamento confirmado em até 3 dias úteis)</p>
        </Container>
    );
}