import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Button } from "./ui/button";
import { ModeButton } from "./ModeButton";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menubar className="lg:hidden xl:flex h-full justify-between hidden mb-10 w-11/12 mx-auto">
        <MenubarMenu>
          <span className="px-3">Stephen King</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer xl:space-x-5 2xl:space-x-10">
          <MenubarMenu>
            <a
              onClick={() => router.push("/")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a
              onClick={() => router.push("/contact-us")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>

      <Menubar className="md:flex xl:hidden h-full justify-between hidden mb-10 w-11/12 mx-auto">
        <MenubarMenu>
          <span className="px-3">Stephen King</span>
        </MenubarMenu>
        <div className="flex items-center cursor-pointer">
          <MenubarMenu>
            <a
              onClick={() => router.push("/")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Home
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a
              onClick={() => router.push("/contact-us")}
              className="text-sm md:text-md lg:text-xl mx-4 hover:text-primary"
            >
              Contact Us
            </a>
          </MenubarMenu>
          <ModeButton />
        </div>
      </Menubar>

      <Popover>
        <PopoverTrigger
          asChild
          className="md:hidden ml-5"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <Button size={"icon"} variant="outline">
            <IoMdMenu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full ml-4 mt-3 h-fit p-0 md:hidden">
          <Menubar className="flex flex-col h-fit space-y-4 p-3 items-start">
            <MenubarMenu>
              <span className="p-0">Stephen King</span>
            </MenubarMenu>
            <div className="flex flex-col space-y-2">
              <MenubarMenu>
                <a
                  onClick={() => router.push("/")}
                  className="text-sm md:text-md lg:text-xl pl-3 mb-2.5"
                >
                  Home
                </a>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Payment Plans
                  <FaChevronDown />
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Website Services
                  <FaChevronDown />
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Content Creation Services
                  <FaChevronDown />
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="flex justify-between w-full">
                  Company Specific Services
                  <FaChevronDown />
                </MenubarTrigger>
              </MenubarMenu>
            </div>
          </Menubar>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavBar;
