import { Container } from "./styles";
import { Menu } from '../../components/Menu';
import { HomePage } from "./HomePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { useCart } from "../../contexts/Cart";

export const Home = () => {
    const navigate = useNavigate();
    const { token } = useAuth();
    const { totalItemsFromCart } = useCart();
    
    useEffect(() => {
        if(!token){
            navigate('/login');
        }

    }, [navigate, token, totalItemsFromCart]);
    return (
        <Container>
            <Menu />
            <HomePage/>
        </Container>
    )
}