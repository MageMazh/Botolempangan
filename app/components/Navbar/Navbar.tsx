"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    setScrolling(window.scrollY > 400);
  };

  const navItems = [
    { id: 1, title: "Beranda", href: "/" },
    { id: 2, title: "Pariwisata", href: "/pariwisata" },
    { id: 3, title: "Sejarah", href: "/sejarah" },
  ];

  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  useEffect(() => {
    if (pathname === "/sejarah" || pathname.startsWith("/pariwisata")) {
      setScrolling(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).matches("#hamburger") &&
      !(e.target as HTMLElement).closest("#nav-menu")
    ) {
      setHamburgerActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 h-16 w-screen transition duration-500 ease-in-out ${
        scrolling ? "bg-[#B38144]" : "bg-transparent"
      }`}
    >
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className="absolute right-14 block group z-50 py-4 lg:hidden"
        onClick={toggleHamburger}
      >
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-[#875A23]"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-[#875A23]"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-[#875A23]"></span>
      </button>

      <nav
        className={`flex items-center justify-between h-16 px-14 py-4`}
        id="nav-menu"
      >
        <Link href="/">
          <Image
            src="/images/Logo_Maros_Text.svg"
            width={320}
            height={180}
            alt="Maros's icon"
          />
        </Link>
        <section
          className={`flex flex-col px-4 py-4 gap-2 absolute rounded-lg right-[3.5rem] top-14 w-[250px] lg:w-fit lg:gap-8 lg:px-0 lg:bg-transparent lg:flex-row bg-[#B38144] text-white ${
            isHamburgerActive ? "" : "hidden"
          } lg:flex lg:static`}
        >
          {navItems.map((link) => {
            let isActive = false;
            if (link.href === "/") {
              isActive = pathname === link.href;
            } else if (link.href === "/pariwisata") {
              isActive = pathname.startsWith("/pariwisata");
            } else {
              isActive = pathname === link.href;
            }

            return (
              <Link key={link.id} href={link.href}>
                <span
                  className={`text-sm ${
                    isActive
                      ? "hover:text-white-hover font-bold"
                      : "hover:text-white-hover"
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            );
          })}
        </section>
      </nav>
    </header>
  );
}
export default Navbar;
