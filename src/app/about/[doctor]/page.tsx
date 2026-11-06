import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

import { buttonVariants } from '@/components/ui/button';

import { companyInfo } from '@/lib/companyInfo';
import { doctors } from '@/lib/doctors';

const DoctorPage = async ({ params }: { params: Promise<{ doctor: string }> }) => {
  const { doctor: slug } = await params;
  const doctor = doctors.find((doctor) => doctor.slug === slug);
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold">{doctor?.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 mt-8 mb-32">
          <Image
            src={doctor?.image || ''}
            alt={doctor?.name || ''}
            width={400}
            height={400}
            className="w-full md:w-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">About {doctor?.name}</h2>
            <div className="space-y-4">{doctor?.about}</div>
            <Link
              className={buttonVariants({ className: '!mt-8' })}
              href={companyInfo.requestAppointmentForm}
              target="_blank"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
        <Locations />
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    doctor: doctor.slug,
  }));
}

export default DoctorPage;
