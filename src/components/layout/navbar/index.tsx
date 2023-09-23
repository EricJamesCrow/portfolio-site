"use client";
import React from "react";
import { usePathname } from 'next/navigation'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, 
  NavbarMenuToggle, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image.js";
import { useSession } from "next-auth/react";
import Crow from "../../../../public/crow.svg";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuOpenChange = (isOpen: boolean | undefined) => {
    if (isOpen !== undefined) {
      setIsMenuOpen(isOpen);
    }
  };

  let menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact"
  ];

  if (session?.user.role === 'ADMIN') {
    if(pathname.startsWith('/admin')) {
      menuItems = ["Dashboard", "Projects", ...menuItems];
    } else {
      menuItems = ["Admin", ...menuItems];
    }
  }

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
            src={Crow}
            alt="Crow Logo"
            width={30}
            height={30}
            />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:show sm:flex gap-4 font-light" justify="end">
      {session?.user.role === 'ADMIN' && <NavbarItem>
          <Link as={NextLink} href="/admin" aria-label="Navigate to admin panel" className="text-blue-500">
            Admin
          </Link>
        </NavbarItem>}
      <NavbarItem>
          <Link as={NextLink} href="/" aria-label="Navigate to home page" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/about" aria-label="Navigate to about page" className="text-white">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/services" aria-label="Navigate to services page" className="text-white">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/portfolio" aria-label="Navigate to portfolio page" className="text-white">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/contact" aria-label="Navigate to contact page" className="text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-color">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              as={NextLink}
              className={`w-full text-white font-light ${item === "Dashboard" ? "text-blue-500" : item === "Projects" ? "text-blue-500" : item === "Admin" ? "text-blue-500" : ""}`}
              aria-label={`Navigate to ${item} page`}
              href={
                item === "Home" ? "/" : 
                item === "Dashboard" ? "/admin" : 
                item === "Projects" ? "/admin/projects" : 
                `/${item.toLowerCase()}`
              }
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
