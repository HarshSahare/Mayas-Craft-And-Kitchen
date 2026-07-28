"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./navbar.css";
import Image from "next/image";
import { UserIcon } from "@solar-icons/react/outline/user";
import { CartIcon } from "@solar-icons/react/outline/cart";
import Link from "next/link";

function Navbar({
  className,
  ignoreHomePageRule = false,
}: {
  className?: string;
  ignoreHomePageRule?: boolean;
}) {
  const pathname = usePathname();

  const isHomePage = pathname === "/" && !ignoreHomePageRule;

  if (isHomePage) {
    return <></>;
  }

  return (
    <nav
      className={`navbar transition-all duration-300 ${ignoreHomePageRule ? className : "bg-background"}`}
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
        <CartIcon size={24} className="text-foreground " />
      </div>
    </nav>
  );
}

export default Navbar;
