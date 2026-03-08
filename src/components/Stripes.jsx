import React from 'react'
import Stripe from './Stripe';

const Stripes = () => {
    let stripeData = [
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg', number: 48 },
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg', number: 2 },
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg', number: 11 },
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg', number: 48 },
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg', number: 2 },
        { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg', number: 11 },
    ];

    return (
        <div className='w-full h-12 flex mt-0'>
            {stripeData.map((d, i) =>< Stripe d={d} key={i} />)}
        </div>
    )
}

export default Stripes;
