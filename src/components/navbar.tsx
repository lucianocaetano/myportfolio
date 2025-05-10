import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import MenuMobile from "./menu-mobile"

const Navbar = () => {
  return (
    <div className="bg-[#E9E9E9] sticky top-0 z-50">
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between h-[100px] px-4">
      <a className="cursor-pointer" href="#home">
        <h1 className="flex gap-2 items-center">
          <Image src='/logo.png' width={40} height={40} alt="logo"/>
          <p className="text-xl font-bold">Portfolio</p>
        </h1>
      </a>
      <div className="md:hidden">
        <MenuMobile/>
      </div>
      <div className="max-md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
                  About 
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#projects">
                Projects 
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#skills">
                Skills 
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className="bg-black text-white ms-6 py-3 px-5 cursor-pointer hover:text-black rounded-full font-semibold"
                href="#contact"
              >
                Contact Me 
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
    </div>
  )
}

export default Navbar 
