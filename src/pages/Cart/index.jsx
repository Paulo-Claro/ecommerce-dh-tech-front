import { Container, ContentProducts, LoadingPage } from "./styles"
import { ProductCart } from "./components/product";
import { Checkout } from "./components/checkout";
import { Menu } from '../../components/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { useCart } from "../../contexts/Cart";

export const Cart = () => {
    const navigate = useNavigate();
    const {
        products,
        getProductsFromCart,
        purchase,
        deleteProduct,
        updateQuantity,
        finishedPurchase,
        loading,
        finishing
    } = useCart()


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
        getProductsFromCart();
    }, [navigate, updateQuantity, deleteProduct, finishedPurchase, getProductsFromCart]);


    return (
        loading ? (
            <LoadingPage>
                <PacmanLoader size={45} color='var(--blue1)' />
            </LoadingPage>
        ) : (
            <Container>
                <Menu />
                <div className="content-cart">
                    {products.length ? (
                        <>
                            <ContentProducts>
                                {products?.map((product, index) => {
                                    return (
                                        <ProductCart
                                            key={index}
                                            imgUrl={product.product.photo}
                                            description={product.product.description}
                                            name={product.product.name}
                                            price={product.product.price}
                                            quantity={product.quantity}
                                            updateQuantity={() => updateQuantity(product.product.id)}
                                            decreaseQuantity={() => updateQuantity(product.product.id, 'decrease')}
                                            deleteProduct={() => deleteProduct(purchase.id, product.product.id)}
                                        />
                                    );
                                })}
                            </ContentProducts>
                            <Checkout total={purchase} onClick={() => finishedPurchase(purchase.id, purchase.net_price)} finishing={finishing}/>
                        </>

                    ) : (
                        <LoadingPage>
                            {products.length < 1 && <h2>Carrinho vazio {`:'(`}</h2>}
                            <Link to="/">Continuar comprando</Link>
                        </LoadingPage>
                    )}
                </div>
            </Container>
        )
    )
}

