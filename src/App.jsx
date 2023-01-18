import { RoutesProvider } from './routes/index'
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
        <ToastContainer />
        <RoutesProvider />
        <GlobalStyle />
    </>
  );
};
