"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./navbar.scss";
import Image from "next/image";
import { UserIcon } from "@solar-icons/react/outline/user";
import { CartIcon } from "@solar-icons/react/outline/cart";
import Link from "next/link";
import { useCartContext } from "../provider/contexts/cartContext";

function Navbar({
  className,
  ignoreHomePageRule = false,
  sticky = true,
}: {
  className?: string;
  ignoreHomePageRule?: boolean;
  sticky?: boolean;
}) {
  const { items } = useCartContext();
  const pathname = usePathname();

  const isHomePage = pathname === "/" && !ignoreHomePageRule;

  if (isHomePage) {
    return <></>;
  }

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      className={`navbar transition-all duration-300 ${sticky ? "sticky" : "relative"} ${ignoreHomePageRule ? className : "bg-background"}`}
    >
      <Link href="/" className="navbar_logo">
        <Image
          src="/images/navbar_logo.png"
          height={35}
          width={35}
          alt="Maya's Craft and Kitchen logo ml-[5px]"
        />
      </Link>

      <div className="nav_buttons">
        <UserIcon size={24} className="text-foreground mr-5" />
        <Link
          href="/cart"
          className="relative flex items-center justify-center"
          aria-label={`Cart with ${cartItemCount} items`}
        >
          <CartIcon size={24} className="text-foreground" />

          {cartItemCount > 0 && (
            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-[16px]
                min-w-[16px]
                items-center
                justify-center
                rounded-full
                bg-[#9B4B2B]
                px-[3px]
                text-[9px]
                font-bold
                leading-none
                text-white
              "
            >
              {cartItemCount > 99 ? "99+" : cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
