import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { Container, Background } from "./styles";
import Lottie from "lottie-react";
import groovyWalkAnimation from '../../assets/lottie2.json'

export const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('');
        }

    }, [navigate]);
    return (
        <Container>
            <div className="content">
                <h2 data-aos="zoom-in" data-aos-duration="1500">Cadastre-se</h2>
                <FormRegister data-aos="zoom-in" data-aos-duration="1500" />
            </div>
            <Background>
                <Lottie animationData={groovyWalkAnimation} />
            </Background>
        </Container>
    );
}