import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@/lib/navLinks';
import { companyInfo } from '@/lib/companyInfo';

const NavbarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white overflow-y-auto">
        <Link href="/">
          <Image src="/logos/logo.webp" alt="logo" width={100} height={100} loading="lazy" />
        </Link>
        <nav className="grid gap-6 text-lg font-medium pt-6">
          {navLinks.map((link) =>
            link.children ? (
              <Accordion key={link.name} type="single" collapsible className="w-full border-b-0">
                <AccordionItem value={link.name.toLowerCase()}>
                  <AccordionTrigger className="text-lg font-medium text-muted-foreground pt-0">
                    {link.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-1">
                      {link.children.map((child) => (
                        <li key={child.name} className="pl-2">
                          {child.children ? (
                            <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value={child.name.toLowerCase()}>
                                <AccordionTrigger className="text-sm font-medium text-muted-foreground pt-0">
                                  {child.name}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="grid gap-1 pl-4">
                                    {child.children.map((grandchild) => (
                                      <li key={grandchild.name}>
                                        <Link
                                          href={grandchild.href || ''}
                                          className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground text-sm"
                                          target={grandchild.external ? '_blank' : '_self'}
                                        >
                                          {grandchild.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <Link
                              href={child.href || ''}
                              className="block select-none py-3 rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                              target={child.external ? '_blank' : '_self'}
                            >
                              {child.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={link.name}
                href={link.href || ''}
                className="text-muted-foreground pb-2"
                target={link.external ? '_blank' : '_self'}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="mt-6 ml-auto">
            <Button size="lg" asChild>
              <Link href={companyInfo.mainCTA.href} target="_blank">
                {companyInfo.mainCTA.name}
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
