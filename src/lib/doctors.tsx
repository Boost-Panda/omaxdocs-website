export type Doctor = {
  slug: string;
  name: string;
  image: string;
  title: string;
  about: React.ReactNode;
};

export const doctors: Doctor[] = [
  {
    slug: 'dr-chaudhary',
    name: 'Nahla Chaudhary',
    image: '/doctors/nahla-chaudhary.webp',
    title: 'DDS',
    about: (
      <>
        <p>
          Dr. Chaudhary has a diverse background. She is of Pakistani/Indian descent and was born and raised in the
          United Arab Emirates in the Middle East. She relocated to New York, NY, for her higher education.
        </p>
        <p>
          Dr. Chaudhary obtained her DDS degree from the New York University College of Dentistry in 2003. She then went
          on to complete a general practice residency for one year in Connecticut. This was followed by a one-year
          fellowship in oral and maxillofacial surgery at Columbia University, New York, NY.
        </p>
        <p>
          Dr. Chaudhary then completed her oral and maxillofacial surgery residency at Lincoln Medical Center in New
          York City in 2009.
        </p>
        <p>
          Upon completion of her residency, she joined the staff of Associated Oral & Maxillofacial Surgeons in
          Martinsburg, WV, and Hagerstown, MD. She is on staff at West Virginia University East Hospital and Frederick
          Memorial Hospital in Maryland and the VA Medical Center in Martinsburg, WV.
        </p>
        <p>
          Dr. Chaudhary is a member of the United States Army Reserves and is assigned to a Combat Support Hospital
          Unit.
        </p>
        <p>
          Dr. Chaudhary is a member of the Middle Atlantic Society of Oral and Maxillofacial Surgeons, the Maryland
          Society of Oral and Maxillofacial Surgeons, the American Association of Oral and Maxillofacial Surgeons, the
          ADA, and the Eastern Panhandle Dental Society. She is board-certified by the American Board of Oral and
          Maxillofacial Surgery.
        </p>
        <p>
          She is multi-lingual, speaking fluent Hindi, Urdu, Punjabi, and Spanish. In her free time, she enjoys outdoor
          activities.
        </p>
        <p>
          Dr. Chaudhary practices a full range of oral and maxillofacial surgery and is licensed to practice in the
          States of West Virginia, Maryland, and New York.
        </p>
      </>
    ),
  },
  {
    slug: 'dr-nelson',
    name: 'Howard L. Nelson',
    image: '/doctors/howard-nelson.webp',
    title: 'DDS',
    about: (
      <>
        <p>
          Dr. Nelson was born and raised in Santa Cruz, Jamaica, and completed his undergraduate education at the
          University of the West Indies in Mona, Kingston, Jamaica. He then attended Howard University College of
          Dentistry in Washington, D.C., where he was inducted into the National Dental Honor Society Omicron Kappa
          Upsilon.
        </p>
        <p>
          Upon graduation from dental school, Dr. Nelson completed his oral and maxillofacial surgery training at Howard
          University Hospital and its affiliates. He remained on staff at Howard University Hospital for a year after
          completing his residency and was involved with teaching and supervising the oral and maxillofacial surgery
          residents.
        </p>
        <p>
          Dr. Nelson performed surgery in a multi-group practice in the Baltimore area for two years before joining
          Associated Oral & Maxillofacial Surgeons.
        </p>
        <p>
          Dr. Nelson is a member of MSDA and MASOMS and is board-certified by the American Board of Oral and
          Maxillofacial Surgery. He is licensed to practice oral and maxillofacial surgery in Washington, D.C.,
          Maryland, Pennsylvania, and West Virginia.
        </p>
        <p>
          Dr. Nelson is on staff at West Virginia University East Hospital and Frederick Memorial Hospital in Maryland
          and the VA Medical Center in Martinsburg, WV.
        </p>
        <p>
          Dr. Nelson practices a full range of oral and maxillofacial surgery with a keen interest in the following:
        </p>
        <ul className="list-disc list-inside">
          <li>Endosseous implants</li>
          <li>Facial trauma</li>
          <li>Facial reconstruction</li>
          <li>Dentoalveolar procedures</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'dr-khan',
    name: 'Sohaib F. Khan',
    image: '/doctors/dr-khan.webp',
    title: 'DDS, MS',
    about: (
      <>
        <p>
          Dr. Sohaib Fazeel Khan is an oral and maxillofacial surgeon dedicated to delivering comprehensive,
          patient-centered surgical care with a commitment to clinical excellence and integrity. He is licensed to
          practice in Maryland, Virginia, and Washington, D.C., and provides a full scope of oral and maxillofacial
          procedures with a focus on precision, safety, and compassion.
        </p>
        <p>
          A native of Northern Virginia, Dr. Khan earned his undergraduate degree from George Mason University,
          followed by a Master of Science in Physiology and Biophysics from Georgetown University. He went on to
          receive his Doctor of Dental Surgery (DDS) degree from Howard University College of Dentistry.
        </p>
        <p>
          Dr. Khan completed internships in oral and maxillofacial surgery at the University of Maryland Medical
          Center in Baltimore and the University of Missouri–Kansas City, where he trained at Truman Medical Center.
          He subsequently returned to Howard University to complete a rigorous residency in oral and maxillofacial
          surgery, gaining extensive clinical experience in dentoalveolar surgery, dental implant placement, bone
          grafting, maxillofacial trauma, orthognathic surgery, and the management of benign oral pathology.
        </p>
        <p>
          Outside the operating room, Dr. Khan is an avid traveler and fitness enthusiast. He enjoys exploring natural
          beauty, experiencing diverse culinary traditions, and engaging in outdoor adventures that challenge and
          inspire him.
        </p>
      </>
    ),
  },
];
