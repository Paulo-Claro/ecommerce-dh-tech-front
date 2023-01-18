import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { useAuth } from "../../contexts/Auth";
import { Container, Background } from "./styles";
import Lottie from "lottie-react";
import groovyWalkAnimation from '../../assets/lottie.json'

export const Login = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [navigate, token]);
    return (
        <>
            <Container>
                <Background>
                <Lottie animationData={groovyWalkAnimation} />
                </Background>
                <div className="content">
                    <h2 data-aos="zoom-in" data-aos-duration="1500" >Login</h2>
                    <FormLogin data-aos="zoom-in" data-aos-duration="1500" />
                </div>
            </Container>
        </>
    );
}