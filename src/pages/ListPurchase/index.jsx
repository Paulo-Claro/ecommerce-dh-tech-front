import { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { Purchase } from "../../components/Purchase";
import { useCart } from "../../contexts/Cart";
import { Container } from "./styles";

export const ListPurchases = () => {
    const { listUserPurchases, purchases } = useCart();
    useEffect(() => {
        listUserPurchases();
    }, []);

    
    const [ list, setList ] = useState(purchases);

    const get = (id) => {
        if(id === ''){
            setList(purchases)
        }else{
            const filtered = list.filter((p) => String(p.purchase.id).includes(id));
            setList(filtered);
        }
    }

    return (
        <Container>
            <Menu />
            <input type="text" placeholder="Digite o ID da compra" onChange={(e) => get(e.target.value)}/>
            <div className="content-purchases">
                {list?.map((purchase) => {
                    return (
                        <Purchase
                            id={purchase.purchase.id}
                            paymentType={purchase.purchase.payment_type}
                            status="Concluído"
                        />
                    )
                })}
            </div>
        </Container>
    );
}
