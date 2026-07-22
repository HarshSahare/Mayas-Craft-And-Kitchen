import React from "react";
import "./navbar.css";
import Image from "next/image";
import { UserIcon } from "@solar-icons/react/outline/user";
import { CartIcon } from "@solar-icons/react/outline/cart";

function Navbar() {
  return (
    <nav className="navbar bg-navbar">
      <div className="navbar_logo">
        <Image
          src="/images/navbar_logo.png"
          height={80}
          width={80}
          alt="Maya's Craft and Kitchen logo ml-[5px]"
        />
      </div>

      <div className="nav_buttons">
        <UserIcon size={24} className="text-foreground mr-5" />
        <CartIcon size={24} className="text-foreground mr-4" />
      </div>
    </nav>
  );
}

export default Navbar;
