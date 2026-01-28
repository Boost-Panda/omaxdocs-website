import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from '@/components/ui/navigation-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { companyInfo } from '@/lib/companyInfo';
import { navLinks } from '@/lib/navLinks';

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const NavbarDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6 text-sm font-medium items-center">
        <NavigationMenuItem>
          <Link href="/">
            <Image src="/logos/logo.webp" alt={companyInfo.name} width={60} height={57} />
            <span className="sr-only">{companyInfo.name}</span>
          </Link>
        </NavigationMenuItem>

        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            {link.children ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground focus:outline-none flex items-center">
                  {link.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuGroup className="py-1">
                    {link.children.map((childLink) => (
                      <React.Fragment key={childLink.name}>
                        {childLink.children ? (
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="cursor-pointer">{childLink.name}</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-[200px]">
                              {childLink.children.map((grandChildLink) => (
                                <DropdownMenuItem key={grandChildLink.name} asChild>
                                  <Link
                                    href={grandChildLink.href || '#'}
                                    className="w-full cursor-pointer"
                                    target={grandChildLink.external ? '_blank' : '_self'}
                                  >
                                    {grandChildLink.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem asChild>
                            <Link
                              href={childLink.href || '#'}
                              className="w-full cursor-pointer"
                              target={childLink.external ? '_blank' : '_self'}
                            >
                              {childLink.name}
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </React.Fragment>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={link.href || '#'}
                className="text-muted-foreground hover:text-foreground"
                target={link.external ? '_blank' : '_self'}
              >
                {link.name}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarDesktop;
