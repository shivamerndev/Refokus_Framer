import React from 'react'
import Marquee from './Marquee';

const Marquees = () => {
  let marqueeData = [
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg' },
    { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg' },
  ];
  return (
    <div className='w-full h-fit py-20 flex gap-16 overflow-hidden my-[10vw] overflow-hidde'>
      {marqueeData.map((img, i) => <Marquee key={i} imgd={img} />)}
      {marqueeData.map((img, i) => <Marquee key={i} imgd={img} />)}
    </div>
  )
}

export default Marquees;
