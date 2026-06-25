import Link from 'next/link';
import { memo } from 'react';

import { doctors } from '@/lib/doctors';

import { Card, CardFooter, CardHeader, CardImage, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

const MeetOurDoctors = memo(function MeetOurDoctors() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
        {doctors.map((doctor) => (
          <Link
            key={doctor.name}
            href={`/about/${doctor.slug}`}
            className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardImage src={doctor.image} alt={doctor.name} width={400} height={500} />
              <CardHeader className="p-4 lg:p-5">
                <CardTitle>
                  <span className="text-base lg:text-lg font-bold leading-snug">
                    {doctor.name}, {doctor.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardFooter className="p-4 lg:p-5 pt-0">
                <span className={buttonVariants({ variant: 'secondary', className: 'w-full !font-bold' })}>
                  See Profile
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default MeetOurDoctors;
