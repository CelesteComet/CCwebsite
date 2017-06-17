import React from 'react';
import ParallaxSection from './Parallax';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <ParallaxSection backgroundImage="doors" centerText="CenterBoxText white" words="CONTACT"/>
      <ParallaxSection backgroundImage="mountains" contact="true" />

    </div>
  );
}

export default Contact;