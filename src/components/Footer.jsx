import React from 'react'

const Footer = () => {
  return (
    <div className='h-60 max-w-screen-xl mx-auto font-[Plain] mt-10 flex justify-between items-center'>
      <h1 className='text-[10vw] leading-none '>refokus.</h1>
     <div className='flex justify-end gap-8'>
     <div className='flex flex-col '>
        <p>Social</p>
        {['Instagram','Twitter(X?)','LinkedIn'].map((l,i)=> <a className='text-gray-400 font-light text-sm' key={i} href="#">{l}</a>)}
      </div>
      <div className='flex flex-col'>
        <p>Sitemap</p>
       { ['Home','Work','Careers','Contact Us'].map((s,i)=> <a className='text-gray-400 font-light text-sm' key={i} href="#">{s}</a>)}
      </div>
      <div className='flex flex-col w-[40%] gap-4 '>
        <p className=' text-right text-sm'>Refokus is a top with Webflow elopment Webflow Agency design with Webflow Development  in the expertises.</p>
        <img className='w-60 ml-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
      </div>
     </div>
    </div>
  )
}

export default Footer;
