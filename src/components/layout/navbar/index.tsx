"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, 
  NavbarMenuToggle, Link } from "@nextui-org/react";
import Image from "next/image.js";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuOpenChange = (isOpen: boolean | undefined) => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  };

  const menuItems = [
    "About",
    "Portfolio",
    "Services",
    "Request a quote"
  ];

  return (
    <Navbar
      className="bg-transparent border-custom-gray flex justify-between"
      maxWidth="full"
      height="3rem"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuOpenChange}
    >

      <NavbarContent justify="start">
        <NavbarBrand>
            <Image
            src="/crow.svg"
            alt="crow"
            width={30}
            height={30}
            />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:show sm:flex gap-4 font-light" justify="end">
        <NavbarItem>
          <Link  href="#" className="text-white">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#" className="text-white">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white">
            Request a quote
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-color">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white font-light"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
