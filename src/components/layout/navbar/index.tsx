"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, 
  NavbarMenuToggle, Link } from "@nextui-org/react";
import Image from "next/image.js";

// hooks
import { useProjects } from '@/hooks/useProjects'

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { fetchProjects } = useProjects();

  const handleMenuOpenChange = (isOpen: boolean | undefined) => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  };

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact"
  ];

  fetchProjects();

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
          <Link  href="/" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="/about" className="text-white">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="/services" className="text-white">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/portfolio" className="text-white">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-color">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white font-light"
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
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
