import { Suspense } from 'react';

import { Footer } from '@/components/website/DynamicImports';
import Navbar from '@/components/website/Navbar';

const LoadingFallback = () => <div className="loading-skeleton">Loading...</div>;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
