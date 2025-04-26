import React from 'react';
import ContactForm from '../../components/common/ContactForm';
import ContactDetails from '../../components/contact/ContactDetails';
import FAQ from '../../components/contact/FAQs';

const Contact = () => {
  return (
    <div className="px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <ContactForm />
        </div>
        <ContactDetails />
      </div>
      <FAQ />
    </div>
  );
};


export default Contact