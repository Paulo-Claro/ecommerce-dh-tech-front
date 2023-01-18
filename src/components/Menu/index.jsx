import { Link } from "react-router-dom";
import { Container } from './styles';
import { AiOutlineLogout, AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiPurchaseTagAlt } from 'react-icons/bi';

import { useAuth } from "../../contexts/Auth";
import { useCart } from "../../contexts/Cart";
export const Menu = () => {
    const { logout } = useAuth();
    const { totalItemsFromCart } = useCart()
    return (
        <Container>
            <Link to="/"><AiFillHome />Home</Link>
            <div className="content">
                <Link to="/purchases"><BiPurchaseTagAlt />Compras</Link>
                <Link to="/cart"><AiOutlineShoppingCart />Carrinho {totalItemsFromCart > 0 && <span className="total-items">{totalItemsFromCart}</span>}</Link>
                <span onClick={logout}><AiOutlineLogout />Logout</span>
            </div>
        </Container>
    )
}