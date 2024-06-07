"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/buttons";
import { useRouter } from "next/navigation";
import Logo from "../../public/logo.png";
import { Menu } from "lucide-react";

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};
export default function Header() {
  return (
    <nav className="sticky  top-0 z-50 w-full border-b bg-white border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-20 relative">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={200} height={100} alt="logo" />
          </Link>
          <div className="hidden lg:flex gap-10 text-lg font-semibold">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            <Link href={"/"}>
            {/* onClick={() => scrolltoHash("product")}> */}
              <p>About</p>
            </Link>
            <Link href={"/"}>
              <p>Fundraising</p>
            </Link>
            <Link href={"/"}>
              <p>Detect</p>
            </Link>
            <Link href={"/api/python"}>
              <p>Test</p>
            </Link>
          </div>
          <div className=" hidden lg:flex gap-6">
                <Link href="/signup">
                  <Button variant="ghost">Sign Up</Button>
                </Link>
                <Link href="/login">
                  <Button>Sign In</Button>
                </Link>
              </div>
          </div>
          
          </div>
    </nav>
  );
}
