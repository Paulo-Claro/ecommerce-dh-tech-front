import { useContext, useState, createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [purchase, setPurchase] = useState(null);
    const [totalItemsFromCart, setTotalItemsFromCart] = useState(products.length);
    const [loading, setLoading] = useState(null);
    const [adding, setAdding] = useState(null);
    const [finishing, setFinishing] = useState(null);
    const [purchases, setPurchases] = useState([]);

    const getProductsFromCart = async () => {
        const token = localStorage.getItem('token');
        const idUser = localStorage.getItem('idUser');
        api.defaults.headers = { 'Authorization': `Bearer ${token}` };
        const { data } = await api.get(`/purchase//list?id_user=${idUser}`);
        const [purchase, ...rest] = data;
        setProducts(rest);
        setPurchase(purchase);
        setTotalItemsFromCart(rest.length)
    }

    const deleteProduct = async (id_purchase, id_product) => {
        const token = localStorage.getItem('token');
        api.defaults.headers = { 'Authorization': `Bearer ${token}` };
        setLoading(true);
        try {
            const { data } = await api.delete('purchase/delete', {
                data: {
                    id_purchase,
                    id_product
                }
            })
            toast.success(data);
        } catch (e) {
            toast.error('não foi possível remover item do carrinho')
        } finally {
            setLoading(false);
        }
    }

    const updateQuantity = async (id_product, type = 'add') => {
        setLoading(true);
        const token = localStorage.getItem('token');
        api.defaults.headers = { 'Authorization': `Bearer ${token}` };
        try {
            const payload = {
                id_purchase: purchase?.id,
                id_product,
                option: type
            }
            const { data } = await api.patch('/purchase/update', payload)
            toast.success(data);
        } catch (e) {
            toast.error('Erro ao adiconar')
        } finally {
            setLoading(false);
        }
    }

    const finishedPurchase = async (id_purchase, shipping, payment_type = "P") => {
        setFinishing(true);
        const token = localStorage.getItem('token');
        api.defaults.headers = { 'Authorization': `Bearer ${token}` };
        try {
            const { data } = await api.patch('purchase/finalize', {
                id_purchase,
                payment_type,
                shipping
            });
            toast.success(data);


        } catch (e) {
            toast.error('Não foi possível finalizar a compra')
        } finally {
            setFinishing(false);
        }
    }

    const addFromCart = async (product) => {
        setAdding(true)
        const token = localStorage.getItem('token');

        try {
            const id_user = localStorage.getItem('idUser');
            const { id, quantity, discount, price } = product;
            const payload = {
                id_user,
                purchase: {
                    situation: 'CA'
                },
                product: {
                    id,
                    quantity: 1,
                    discount: 10,
                    price
                }

            }
            api.defaults.headers = { 'Authorization': `Bearer ${token}` };
            const res = await api.post('/purchase/add', payload);
            await getProductsFromCart();
            toast.success(res.data);
        } catch (e) {
            toast.error(e.response.data.message);
        } finally {
            setAdding(false);
        }
    }

    const listUserPurchases = async () => {
        const idUser = localStorage.getItem('idUser');
        const token = localStorage.getItem('token');
        try {
            api.defaults.headers = { 'Authorization': `Bearer ${token}` };
            const { data } = await api.get(`purchase/list/finished?id_user=${idUser}`);
            setPurchases(data);
        }catch(e){  
            toast.error('Erro ao buscar compras')
        }
    }

    return (
        <CartContext.Provider value={{
            getProductsFromCart,
            deleteProduct,
            updateQuantity,
            finishedPurchase,
            addFromCart,
            listUserPurchases,
            totalItemsFromCart,
            products,
            purchase,
            loading,
            adding,
            finishing,
            purchases,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
                