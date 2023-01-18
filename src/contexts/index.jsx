import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

export const Provider = ({ children }) => {
    return (
        <CartProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </CartProvider>
    )
};