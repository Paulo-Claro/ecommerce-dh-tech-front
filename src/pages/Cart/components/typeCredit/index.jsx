import { ContentInput, ContentInputDate, Info } from './styles';
import mastercard from '../../../../assets/mastercard.png';
import ruPay from '../../../../assets/ruPay.png';
import shellAll from '../../../../assets/shellAll.png';
import visa from '../../../../assets/visa.png';
import { cardNumberMask, dateExpMask } from '../../../../utils/mask';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const TypeCredit = ({ data, setNumberCard, SetDateExp, numberCard, dateExp, onClick }) => {
    const { net_price, gross_price, discount, frete } = data;
    return (
        <>
            <ContentInput>
                <label>Nome no cartão</label>
                <input type="text" placeholder="nome" />
            </ContentInput>
            <ContentInput>
                <label>Número do cartão</label>
                <input type="text" placeholder="111 222 333 444" onChange={(e) => setNumberCard(cardNumberMask(e.target.value))} value={numberCard} />
            </ContentInput>
            <ContentInputDate>
                <div>
                    <label>Data de expiração</label>
                    <input type="text" placeholder="mm/yy" onChange={(e) => SetDateExp(dateExpMask(e.target.value))} value={dateExp} />
                </div>
                <div>
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                </div>
            </ContentInputDate>
            <hr />
            {/* <Info>
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
            </Info> */}
        </>
    )
}