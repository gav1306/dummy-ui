import logo from "@/assets/icon/logo-new.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { HEADER_LINKS } from "../data";
import { forwardRef } from "react";

const Header = () => {
  return (
    <header className="p-2 fixed top-0 z-20  w-full md:w-full lg:w-screen backdrop-blur">
      <nav className="w-full m-auto flex justify-between items-center max-w-screen-xl ">
        <div>
          <img src={logo} alt="logo" className="w-14" />
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {HEADER_LINKS.map((link, index) => {
              return (
                <NavigationMenuItem key={index}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-black ml-2 hover:bg-transparent hover:text-black">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-secondary">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {link.dropdown.map((dropdown) => (
                            <ListItem
                              key={dropdown.name}
                              title={dropdown.name}
                              href={dropdown.href}
                            >
                              {dropdown.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <a href="#" className="ml-2">
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-black hover:bg-transparent hover:text-black"
                        )}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </a>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4 items-center">
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
