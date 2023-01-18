import { Container, Content, HoverAddFromCart } from "./styles";
import { AiFillStar } from 'react-icons/ai';
import { IoCart } from 'react-icons/io5';
import { PacmanLoader } from "react-spinners";

export const Product = ({ img, name, description, price, evaluation, addFromCart, loadingFromCart }) => {
    return (
        <Container>
            <HoverAddFromCart className="hover-add-from-cart" onClick={addFromCart}>
                {loadingFromCart ? (
                <>
                 <p>adicionando</p><PacmanLoader size={8} color='var(--white)' /> 
                </>
                ): <IoCart />}
            </HoverAddFromCart>
            <img src={img} alt={name} />
            <Content>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
            </Content>
            <div className="content-price">
                <span className="stars">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </span>
                <span className="price">
                    R$ {price}
                </span>
            </div>
        </Container>
    );
}