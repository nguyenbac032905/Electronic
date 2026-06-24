import { Loader } from "@/components/index";
import CartModule from "@/components/modules/cart";
import { Suspense } from "react";

const CartPage = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <CartModule />
            </Suspense>
        </>
  );
};

export default CartPage;
