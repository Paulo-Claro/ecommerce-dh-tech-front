import { Container, Loader, Content } from './styles';
import { useParams } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useCart } from '../../contexts/Cart';

export const ProductDetail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const { addFromCart, products } = useCart();
    setTimeout(() => {
        setLoading(false)
    }, 1000)
    const product = {
        name: 'Motorola Moto G22',
        description: 'Smartphone Motorola Moto G22 128GB 4GB RAM Verde ipsum lorem ipsum lorem',
        url: 'https://m.media-amazon.com/images/I/51RkkgRxCrL._AC_SX569_.jpg',
        price: '1390.75',
        evaluations: 756
    }


    return (
        <>
            {
                loading ?
                    (
                        <Loader>
                            <PacmanLoader />
                        </Loader >

                    )
                    :
                    (
                        <Container>
                            <img src={product.url} alt="smartphone" />
                            <Content>
                                <div className='content-name'>
                                    <p className='name'>{product.name}</p>
                                    <p className='price'>R${product.price}</p>
                                </div>
                                <div className="content-evaluation">
                                    <span className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <span className='total-evaluation'>
                                            ({product.evaluations})
                                        </span>
                                    </span>
                                </div>
                                <p className='description'>{product.description}</p>
                                <button onClick={() => addFromCart(product)}>Adicionar ao carrinho</button>
                            </Content>
                        </Container>

                    )
            }
        </>
    )
}