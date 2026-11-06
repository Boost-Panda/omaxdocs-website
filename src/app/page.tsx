import { Suspense } from 'react';

import { ClientSideComponents } from '@/components/website/DynamicImports';
import Layout from '@/components/website/Layout';
import Hero from '@/components/website/Home/Hero';

const LoadingFallback = () => <div className="loading-skeleton">Loading...</div>;

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <div className="mx-auto container p-12 flex flex-col items-center gap-16">
          <Suspense fallback={<LoadingFallback />}>
            <ClientSideComponents />
          </Suspense>
        </div>
      </main>
    </Layout>
  );
}
