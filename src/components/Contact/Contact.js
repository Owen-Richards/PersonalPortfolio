import React from 'react';
import ContactSection from '../Contact/ContactSection';
import cn from "classnames";

export default function Contact() {
  return (
    <>
      <section className={cn("contact-section")}>
        <ContactSection />
      </section>
    </>
  );
}