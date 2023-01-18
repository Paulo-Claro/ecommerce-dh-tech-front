import { Input } from "../Input";
import { Container } from "./styles";
import { BiMailSend, BiLock } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from "../../contexts/Auth";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";


export const FormLogin = ({ ...rest }) => {
    const { login, loading } = useAuth();
    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório *'),
        password: yup.string().required('Campo obrigatório *')
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        login(data);
    }

    return (
        <Container onSubmit={handleSubmit(onSubmit)} {...rest}>
            <Input
                Icon={BiMailSend}
                placeholder='Digite seu email'
                name='email'
                register={register}
                errors={errors?.email?.message}
                data-aos="fade-left"
                data-aos-duration="1500"
            />
            <Input
                Icon={BiLock}
                placeholder='Digite sua senha'
                type="password"
                name='password'
                register={register}
                errors={errors?.password?.message}
                data-aos="fade-right"
                data-aos-duration="1500"
            />
            <button
                type="submit"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
               {loading ? <BounceLoader color="var(--white)" size={25}/>: 'Entrar'} 
            </button>
            <p>Não tem conta ? <Link to='/register'>Cadastre-se</Link></p>
        </Container>
    );
}