import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <h2 className="text-2xl font-bold text-zinc-200">Get In Touch</h2>
      <p className="mt-4">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
      </p>
      <div className="mt-6">
        <a 
          href="mailto:gershblocks@gmail.com" 
          className="inline-block rounded-md bg-sky-500 px-6 py-3 font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-black transition-colors"
        >
          Say Hello
        </a>
      </div>
      <div className="mt-8 text-sm">
        <p><strong>Email:</strong> gershblocks@gmail.com</p>
        <p><strong>Phone:</strong> +2349166176627</p>
        <p><strong>Location:</strong> Abuja, Nigeria</p>
      </div>
    </Section>
  );
};

export default Contact;