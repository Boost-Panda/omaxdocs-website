import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';
import { companyInfo } from '@/lib/companyInfo';

const ContactInfo = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <iframe
          src={companyInfo.contactForm}
          width="100%"
          className="h-[60rem] md:h-[44rem]"
          id="myIframe"
          title="Contact form"
        ></iframe>
        <Locations />
      </div>
    </Layout>
  );
};

export default ContactInfo;
