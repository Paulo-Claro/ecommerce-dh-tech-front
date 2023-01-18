import { Product } from "../../../components/Product"
import { Container, ProductNotFound } from "./styles";
import { useEffect } from "react";
import { api } from '../../../services/api';
import { useState } from "react";
import { TbMoodEmpty } from 'react-icons/tb';
import { useCart } from "../../../contexts/Cart";

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [searchText, setSearcText] = useState('');
    const { addFromCart, adding } = useCart();

    const filtedProducts = (name) => {
        const listFiltered = products.filter((p) => p.name.includes(name));
        setProducts(listFiltered)
    }
    const getProducts = async () => {
        const { data } = await api.get('/product/list');
        setProducts(data);
    }
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <div className="search">
                <input type="text" placeholder="Digite o nome do produto" onChange={(e) => {
                    setSearcText(e.target.value)
                    filtedProducts('like')
                }} />
                <button onClick={() => filtedProducts(searchText)}>Pesquisar</button>
            </div>
            <main>
                {products.length ?
                    (
                        <>
                            {
                                products.map((product, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            img={product.photo}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            addFromCart={() => addFromCart(product)}
                                            loadingFromCart={adding}
                                        />
                                    )
                                })
                            }
                        </>
                    )
                    :
                    (
                        <ProductNotFound>
                            <h3>Produto não encontrado!! {`:'(`}</h3>
                            <div className="content">
                                 <TbMoodEmpty />
                            </div>
                        </ProductNotFound>
                    )}
            </main>
        </Container>
    )
}