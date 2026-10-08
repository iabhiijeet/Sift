"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import Logo from "@/components/landing/Logo";
import MagneticButton from "@/components/landing/MagneticButton";
const links = [
  ["Features", "features"],
  ["Artifacts", "artifacts"],
  ["How it works", "how-it-works"],
  ["Pricing", "pricing"],
  ["FAQ", "faq"],
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className={
        "fixed inset-x-0 top-0 z-40 border-b " +
        (scrolled
          ? "bg-background/80 backdrop-blur-xl border-border"
          : "border-transparent")
      }
    >
      <div className="container-page flex h-19 items-center justify-between gap-5">
        <a href="#home" aria-label="closecopy home" className="text-[25px]">
          <Logo />
        </a>
        <NavigationMenu className="hidden md:flex" aria-label="Main navigation">
          <NavigationMenuList className="gap-2 lg:gap-4">
            {links.map(([label, id]) => (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  href={"#" + id}
                  className="text-[11px] text-muted-foreground px-2"
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-xs"
            onClick={() =>
              toast.info(
                "You’re exploring the frontend demo. Try the workspace below — no sign-in needed.",
              )
            }
          >
            Sign in
          </Button>
          <MagneticButton
            render={<a href="#playground" />}
            className="h-9 px-4 text-[11px]"
          >
            Get started <ArrowUpRight className="size-3.5" />
          </MagneticButton>
        </div>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation"
                className="md:hidden"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="pt-10">
              <SheetTitle>
                <Logo className="text-2xl" />
              </SheetTitle>
              <SheetDescription>Your knowledge, put to work.</SheetDescription>
            </SheetHeader>
            <nav
              className="px-5 flex flex-col gap-3"
              aria-label="Mobile navigation"
            >
              {links.map(([label, id]) => (
                <SheetClose
                  role="link"
                  nativeButton={false}
                  key={id}
                  render={
                    <a
                      href={"#" + id}
                      className="rounded-lg p-3 text-sm hover:bg-muted"
                    />
                  }
                >
                  {label}
                </SheetClose>
              ))}
              <SheetClose
                role="link"
                render={
                  <Button
                    nativeButton={false}
                    role="link"
                    render={<a href="#playground" />}
                    className="gradient-button mt-4 h-11"
                  />
                }
              >
                Get started <ArrowUpRight />
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
