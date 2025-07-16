"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

interface Header1Props {
  bgColor?: string;
  imageUrl?: string;
  menuLinks?: MenuItem[];
  buttonCta?: string;
  buttonUrl?: string;
  secondaryButtonCta?: string;
  secondaryButtonUrl?: string;
}

const defaultMenuLinks: MenuItem[] = [
  { label: "Link One", href: "#" },
  { label: "Link Two", href: "#" },
  { label: "Link Three", href: "#" },
  {
    label: "Link Four",
    href: "#",
    subItems: [
      { label: "Link Five", href: "#" },
      { label: "Link Six", href: "#" },
      { label: "Link Seven", href: "#" },
    ],
  },
];

const Header1 = ({
  bgColor = "bg-white",
  imageUrl = "/logo.png",
  menuLinks = defaultMenuLinks,
  buttonCta = "Button",
  buttonUrl = "#",
  secondaryButtonCta = "Button",
  secondaryButtonUrl = "#",
}: Header1Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn("w-full border-b", bgColor)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-2xl font-bold">Logo</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuLinks.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-3 p-4">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href || "#"}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.label}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">
              {buttonCta && (
                <Button variant="outline" asChild>
                  <Link href={buttonUrl || "#"}>{buttonCta}</Link>
                </Button>
              )}
              {secondaryButtonCta && (
                <Button asChild>
                  <Link href={secondaryButtonUrl || "#"}>{secondaryButtonCta}</Link>
                </Button>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {menuLinks.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href || "#"}
                    className="block px-4 py-2 text-sm font-medium hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href || "#"}
                          className="block px-4 py-2 text-sm hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4">
                {buttonCta && (
                  <Button variant="outline" asChild className="w-full">
                    <Link href={buttonUrl || "#"}>{buttonCta}</Link>
                  </Button>
                )}
                {secondaryButtonCta && (
                  <Button asChild className="w-full">
                    <Link href={secondaryButtonUrl || "#"}>{secondaryButtonCta}</Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;