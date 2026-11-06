import Link from 'next/link';

import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { videos } from '@/lib/videos';

const EducationalVideos = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Oral Surgery Educational Videos</h1>
        <h2 className="text-2xl font-bold mb-4">Informed Consent Presentations</h2>
        <p className="mb-12">
          Our oral surgery videos are designed to enhance your understanding of the various oral surgery procedures we
          offer. Simply select a specific video that piques your interest, allowing you to delve deeper into our comprehensive collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <Card key={video.title} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Link
                  className={buttonVariants({ variant: 'secondary', className: 'w-full !font-bold' })}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Locations />
      </div>
    </Layout>
  );
};

export default EducationalVideos;
