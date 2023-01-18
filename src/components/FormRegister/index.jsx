import { Input } from "../Input";
import { Container } from "./styles";
import { BiMailSend, BiLock, BiUser, BiPhone } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from "../../contexts/Auth";
import { Link, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const FormRegister = ({ ...rest }) => {

    const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório *'),
        telphone: yup.string().required('Telefone obrigatório *'),
        password: yup.string().required('Campo obrigatório *'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas estão diferenetes').required('Campo obrigatório *')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const { loading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (dataUser) => {
        const { name, email, password } = dataUser;
        try {
            const { data } = await api.post('/user/create', { name, email, password });
            toast.success(data)
            return navigate('/login')
        } catch (e) {
            toast.error(e.response.data.message);
        }
    }


    return (
        <Container onSubmit={handleSubmit(onSubmit)} {...rest}>
            <Input
                Icon={BiUser}
                placeholder='Digite seu nome'
                name='name'
                register={register}
                errors={errors?.name?.message}
                data-aos="fade-left"
                data-aos-duration="1500"
            />
            <Input
                Icon={BiMailSend}
                placeholder='Digite seu email'
                name='email'
                register={register}
                errors={errors?.email?.message}
                data-aos="fade-right"
                data-aos-duration="1500"
            />

            <Input
                Icon={BiPhone}
                placeholder='ex: 00 00000-0000'
                name='telphone'
                register={register}
                errors={errors?.telphone?.message}
                data-aos="fade-left"
                data-aos-duration="1500"
            />
            <Input
                Icon={BiLock}
                placeholder='Digite sua senha'
                type="password"
                name='confirmPassword'
                register={register}
                errors={errors?.confirmPassword?.message}
                data-aos="fade-right"
                data-aos-duration="1500"
            />
            <Input
                Icon={BiLock}
                placeholder='Confirme sua senha'
                type="password"
                name='password'
                register={register}
                errors={errors?.password?.message}
                data-aos="fade-left"
                data-aos-duration="1500"
            />
            <button
                type="submit"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                {loading ? <BounceLoader color="var(--white)" size={25} /> : 'Cadastrar'}
            </button>
            <p>Já tem conta ? faça <Link to='/login'>login</Link></p>
        </Container>
    );
}