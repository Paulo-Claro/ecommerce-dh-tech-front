import { Container, Content } from "./styles";
import { AiFillWarning } from 'react-icons/ai';

export const Input = ({ Icon, placeholder, type, errors, register, name, ...rest }) => {
    return (
        <Container {...rest}>
            <Content errors={errors} >
                <Icon />
                <input type={type} placeholder={placeholder} {...register(name)} />
            </Content>
            {errors && <span><AiFillWarning /> {errors}</span>}
        </Container>
    );
};