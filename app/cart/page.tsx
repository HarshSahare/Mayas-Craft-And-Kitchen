"use client";

import { EmbroideryArtProducts } from "../lib/embroidery_art";
import { KitchenProducts } from "../lib/kitchen";
import { ModakProducts } from "../lib/modak";
import { Products, ProductsType } from "../lib/products";
import { useCartContext } from "../provider/contexts/cartContext";
import CartItem from "./cartItems";

const CartPage = () => {
  const { items } = useCartContext();

  let KitchenProductsCount = 0;
  const minimumCombo = 5;

  const cartItems = items
    .map((cartItem) => {
      let product;
      product = Products.find((product) => product.id === cartItem.id);
      if (product) {
        return { ...product, quantity: cartItem.quantity, base_url: "product" };
      }

      product = EmbroideryArtProducts.find(
        (product) => product.id === cartItem.id,
      );
      if (product) {
        return {
          ...product,
          quantity: cartItem.quantity,
          base_url: "product/embroidery-art",
        };
      }

      product = KitchenProducts.find((product) => product.id === cartItem.id);
      if (product) {
        KitchenProductsCount += cartItem.quantity;
        return {
          ...product,
          quantity: cartItem.quantity,
          base_url: "product/kitchen",
        };
      }

      product = ModakProducts.find((product) => product.id === cartItem.id);
      if (product) {
        return {
          ...product,
          quantity: cartItem.quantity,
          base_url: "product/kitchen",
        };
      }

      return null;
    })
    .filter(Boolean);

  const total = cartItems.reduce(
    (total, item) => total + item!.price * item!.quantity,
    0,
  );

  const calculateNewCost = (originalTotal: number, count: number) => {
    let discount = 0;
    if (count > 9) {
      discount +=
        Math.floor(count / 10) * 250 + (Math.floor(count / 10) - 1) * 150;
      count = count % 10;
    }
    if (count > 4) {
      discount +=
        Math.floor(count / 5) * 100 + (Math.floor(count / 5) - 1) * 50;
      count = count % 5;
    }
    return originalTotal - discount;
  };

  const createWhatsAppMessage = () => {
    const finalTotal =
      KitchenProductsCount > 1
        ? calculateNewCost(total, KitchenProductsCount)
        : total;

    const orderItems = cartItems
      .map((item) =>
        item
          ? `
*${item.name}*
Product ID: ${item.id}
Quantity: ${item.quantity}
Price: ₹${item.price} each
Item Total: ₹${item.price * item.quantity}
`
          : "",
      )
      .join("\n");

    const discount = total - finalTotal;

    return `Hi Maya's Kitchen!

I'd like to place an order.

*ORDER DETAILS*
${orderItems}

*PRICE SUMMARY*
Subtotal: ₹${total}
${discount > 0 ? `Combo Discount: -₹${discount}\n` : ""}Total: ₹${finalTotal}

Please confirm my order and share the delivery details.

Thank you!`;
  };

  const link = process.env.NEXT_PUBLIC_WP_LINK;

  const whatsappUrl = `${link}${encodeURIComponent(createWhatsAppMessage())}`;

  return (
    <main className="min-h-screen bg-[#FFF8F4] px-4 pb-32 pt-6">
      <div className="mx-auto w-full max-w-md">
        <h1 className="font-dm text-[28px] font-black text-[#2B2B2B]">
          Your Cart
        </h1>

        <p className="mt-1 font-dm text-sm text-[#77706C]">
          Review your items before placing your order.
        </p>

        <div className="mt-6 space-y-3">
          {cartItems.map((item) =>
            item ? (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.images[0]}
                price={item.price}
                oldPrice={item.oldPrice}
                description={item.description}
                quantity={item.quantity}
                baseUrl={item.base_url}
              />
            ) : null,
          )}
        </div>

        {/* Total */}
        <div className="mt-7 flex items-center justify-between border-t border-[#E4C8BA] pt-5">
          <span className="font-dm text-base font-medium text-[#6F6763]">
            Total
          </span>

          <span className="font-dm text-[25px] font-black text-[#2B2B2B]">
            ₹
            {KitchenProductsCount >= minimumCombo
              ? calculateNewCost(total, KitchenProductsCount)
              : total}
            {KitchenProductsCount >= minimumCombo && (
              <div className="flex font-medium gap-2  text-[10px] text-[#8C8C8C] mt-1">
                <div className="line-through">₹{total}</div>
                <span className="text-[#FF0F0F] font-bold">
                  ( Combo Discount )
                </span>
              </div>
            )}
          </span>
        </div>

        <a
          href={items.length > 0 ? whatsappUrl : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-[50px] w-full items-center justify-center rounded-xl bg-[#4A2E2B] font-dm text-[15px] font-semibold text-white"
        >
          Order on WhatsApp
        </a>

        <p className="mt-3 text-center font-dm text-[12px] text-[#8B817D]">
          Your cart will be sent to us on WhatsApp. We'll confirm your order and
          delivery details there.
        </p>
      </div>
    </main>
  );
};

export default CartPage;
