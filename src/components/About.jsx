import React from 'react';
import ParallaxSection from './Parallax';

function About() {
  return (
    <div>
      <ParallaxSection backgroundImage="woody" centerText="CenterBoxText white" words="文化品牌規劃"/>
      <ParallaxSection backgroundImage="nomad" centerText="CenterBoxText gray fillBlack" words="文化品牌規劃"/>
      <ParallaxSection backgroundImage="books" centerText="CenterBoxText white" words="文化品牌規劃"/>
      <ParallaxSection backgroundImage="skybuilding" centerText="CenterBoxText gray" words="文化品牌規劃"/>
      <ParallaxSection backgroundImage="sippy" centerText="CenterBoxText gray" words="文化品牌規劃"/>
    </div>
  );
}

export default About;