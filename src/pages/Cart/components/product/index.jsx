import { Container } from "./styles";
import { GoTrashcan } from 'react-icons/go';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'

export const ProductCart = ({
    imgUrl,
    name,
    description,
    quantity,
    price,
    updateQuantity,
    decreaseQuantity,
    deleteProduct,
}) => {
    return (
        <Container>
            <img src={imgUrl} alt="ryzen" />
            <div className="content">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
            </div>
            <p className="quantity">
                <BiUpArrow onClick={updateQuantity} />
                {quantity}
                <BiDownArrow onClick={decreaseQuantity} />
            </p>
            <p className="price">R${price * quantity}</p>
            <p className="trash"><GoTrashcan onClick={deleteProduct} /></p>
        </Container>
    )
}