import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

const FinancialPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Financial Policy</h1>
        <p className="mb-4">
          For your convenience, we accept Visa, MasterCard, Discover, and American Express as forms of payment. Our
          utmost priority is to provide the finest care to our patients while ensuring that costs remain reasonable. To
          facilitate a seamless experience for all parties involved, we kindly request payment at the time services are
          rendered unless prior arrangements have been made.
        </p>
        <p className="mb-4">
          We understand that financial matters can occasionally be complex or lead to misunderstandings. Thus, if you
          ever require clarification regarding your account or any questions arise, please do not hesitate to contact us
          directly. A simple telephone call can often resolve any uncertainties swiftly and efficiently.
        </p>
        <p className="mb-4">
          Please remember, as our valued client, that you are fully responsible for all fees charged by this office,
          regardless of your insurance coverage.
        </p>
        <p className="mb-4">
          We understand that managing your insurance payments can be a complex process, but rest assured, we are here to
          assist you every step of the way. As part of our commitment to transparency and effective communication, we
          will send you a monthly statement outlining all the necessary details regarding your insurance claims.
        </p>
        <p className="mb-4">
          It is important to note that most insurance companies typically respond within four to six weeks after we
          submit your claim. However, should there be any delay or discrepancy in reflecting your insurance payment on
          the statement within this time frame, we kindly request you to contact our office promptly. We aim for
          accuracy and want to ensure that everything aligns with your coverage as expected.
        </p>
        <p className="mb-4">
          Nevertheless, it is vital for us to inform you that any remaining balance after your insurance has been paid
          becomes solely your responsibility. Your prompt remittance is highly appreciated as it allows us to maintain
          seamless operations and deliver quality healthcare services without interruptions.
        </p>
        <p className="mb-12">
          If you have questions about your financial responsibility, please contact our office before your
          appointment. Our team is happy to review your account and provide clarification.
        </p>
        <Locations />
      </div>
    </Layout>
  );
};

export default FinancialPolicy;
