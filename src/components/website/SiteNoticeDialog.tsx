'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { buttonVariants } from '@/components/ui/button';
import { siteNotice } from '@/lib/siteNotice';
import { cn } from '@/lib/utils';

const storageKey = `site-notice-dismissed:${siteNotice.id}`;

const readDismissed = () => {
  try {
    return window.sessionStorage.getItem(storageKey) === '1';
  } catch {
    // Storage unavailable (private mode, blocked): show the notice.
    return false;
  }
};

const subscribe = (onChange: () => void) => {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
};

const SiteNoticeDialog = () => {
  // false during the static prerender; true in the browser unless the
  // visitor already dismissed this notice in this browser session.
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => siteNotice.enabled && !readDismissed(),
    () => false,
  );
  const [closed, setClosed] = useState(false);
  const open = shouldShow && !closed;

  const handleOpenChange = (next: boolean) => {
    if (next) return;
    setClosed(true);
    try {
      window.sessionStorage.setItem(storageKey, '1');
    } catch {
      // Ignore: the notice will show again on the next full page load.
    }
  };

  if (!siteNotice.enabled) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(35,100%,32%)]">
            Service notice
          </p>
          <DialogPrimitive.Title className="mt-2 text-2xl font-semibold leading-tight">
            {siteNotice.title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="mt-3 text-base text-muted-foreground">
            {siteNotice.body}
          </DialogPrimitive.Description>
          <p className="mt-3 text-base text-muted-foreground">{siteNotice.secondary}</p>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <DialogPrimitive.Close className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
              Close
            </DialogPrimitive.Close>
            <Link
              href={siteNotice.action.href}
              onClick={() => handleOpenChange(false)}
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              {siteNotice.action.label}
            </Link>
          </div>
          <DialogPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close notice"
          >
            <Cross2Icon className="h-5 w-5" aria-hidden="true" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default SiteNoticeDialog;
