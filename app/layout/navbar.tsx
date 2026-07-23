import React from "react";
import "./navbar.css";
import Image from "next/image";
import { UserIcon } from "@solar-icons/react/outline/user";
import { CartIcon } from "@solar-icons/react/outline/cart";

function Navbar() {
  return (
    <nav className="navbar bg-navbar px-4">
      <div className="navbar_logo">
        <Image
          src="/images/navbar_logo.png"
          height={35}
          width={35}
          alt="Maya's Craft and Kitchen logo ml-[5px]"
        />
      </div>

      <div className="nav_buttons">
        <UserIcon size={24} className="text-foreground mr-5" />
        <CartIcon size={24} className="text-foreground " />
      </div>
    </nav>
  );
}

export default Navbar;
