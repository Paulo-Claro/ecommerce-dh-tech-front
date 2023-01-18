import { Box, Container, Info } from "./styles";
import mastercard from '../../../../assets/mastercard.png';
import { useState } from "react";
import { TypeCredit } from "../typeCredit";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeTicket } from "../typeTicket";
import { TypeQRcode } from "../typeQRcode";
import { BiBarcodeReader } from 'react-icons/bi';
import { PuffLoader, PulseLoader } from "react-spinners";

export const Checkout = ({ total, onClick, finishing }) => {

    //const { net_price } = total;
    const [numberCard, setNumberCard] = useState('');
    const [dateExp, SetDateExp] = useState('');
    const [tab, setTab] = useState('C');
    const { net_price, gross_price, discount, frete } = total;
    const Tab = {
        P: <TypeTicket />,
        B: <TypeQRcode />,
        C: <TypeCredit data={total} SetDateExp={SetDateExp} dateExp={dateExp} numberCard={numberCard} setNumberCard={setNumberCard} onClick={onClick} />

    }

    return (
        <Container>
            {finishing ? (
                <>
                    <div className="confirm">
                        <PuffLoader color="var(--white)" size={70} />
                        <span className="confirming">
                            <p>Confirmando pagamento</p>
                            <PulseLoader color="var(--white)" size={5}/>
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <h3>Forma de pagamento</h3>
                    <div className="card-type">
                        <img src={mastercard} alt="mastercard" onClick={() => setTab('C')} />
                        <Box onClick={() => setTab('P')}> PIX </Box>
                        <Box onClick={() => setTab('B')}> <BiBarcodeReader /></Box>
                    </div>
                    {Tab[tab]}
                    <div className="total">
                        <Info>
                            <p>Subtotal</p>
                            <p>R${gross_price}</p>
                        </Info>
                        <Info>
                            <p>Frete</p>
                            <p>R${frete ? frete : 10}</p>
                        </Info>
                        <Info>
                            <p>Desconto</p>
                            <p>R${discount}</p>
                        </Info>
                        <Info>
                            <p>Total (com frete)</p>
                            <p>R${net_price}</p>
                        </Info>
                    </div>
                    <button onClick={onClick}>
                        <span>R${net_price}</span>
                        <span>Confirmar <HiArrowNarrowRight /></span>
                    </button>
                </>
            )}
        </Container>
    );
}