import { IoQrCodeOutline } from 'react-icons/io5';
import { Container } from './styles';

export const TypeTicket = () => {
    return (
        <Container>
            <IoQrCodeOutline/>
            <p>(Pagamento confirmado na hora!!)</p>
        </Container>
    );
};