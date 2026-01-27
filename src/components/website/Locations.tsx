import { memo } from 'react';

import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

import { locations } from '@/lib/locations';
import { companyInfo } from '@/lib/companyInfo';
import { formatPhoneNumber } from '@/lib/utils';

const Locations = memo(() => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12">Accessible Care at Three Convenient Locations</h2>

      <div className="flex flex-wrap justify-center">
        {locations.map((location) => (
          <div key={location.name} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <Card>
              <CardHeader className="p-0">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-lg"
                  title={`Map of ${location.name} location`}
                ></iframe>
                <CardTitle>
                  <div className="text-xl font-bold p-6 pb-2">{location.name}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="pb-6 min-h-[4.5em] text-sm">
                  {location.street}, {location.city}, {location.state} {location.zip}
                </p>
                <table className="w-full mb-6 md:text-sm xl:text-base">
                  <tbody>
                    <tr>
                      <td className="py-1 font-bold">Phone:</td>
                      <td className="py-1">
                        <a href={`tel:${location.phone}`} className="text-blue-700">
                          {formatPhoneNumber(location.phone)}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Email:</td>
                      <td className="py-1">
                        <a href={`mailto:${location.email}`} className="text-blue-700">
                          {location.email}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-1 font-bold">Monday:</td>
                      <td className="py-1">{location.hours?.monday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Tuesday:</td>
                      <td className="py-1">{location.hours?.tuesday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Wednesday:</td>
                      <td className="py-1">{location.hours?.wednesday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Thursday:</td>
                      <td className="py-1">{location.hours?.thursday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Friday:</td>
                      <td className="py-1">{location.hours?.friday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Saturday:</td>
                      <td className="py-1">{location.hours?.saturday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 font-bold">Sunday:</td>
                      <td className="py-1">{location.hours?.sunday}</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <div className="w-full flex flex-row lg:flex-col xl:flex-row gap-4">
                  <Link
                    className={buttonVariants({
                      variant: 'secondary',
                      className: 'w-1/3 md:w-full xl:w-1/2 !font-bold',
                    })}
                    href={`tel:${location.phone}`}
                  >
                    Call Us
                  </Link>
                  <Link
                    className={buttonVariants({ className: 'w-2/3 md:w-full xl:w-1/2 !font-bold' })}
                    href={companyInfo.requestAppointmentForm}
                    target="_blank"
                  >
                    Request Appointment
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
});

Locations.displayName = 'Locations';

export default Locations;
