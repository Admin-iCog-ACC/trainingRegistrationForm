import React from 'react'
import Image from 'next/image'
import { withRouter } from 'next/router'

function Nav() {
  return (
    <div className='w-full bg-white shadow-lg sticky top-0 z-10 '>   
    <div className='max-w-4xl mx-auto '>
              <div className="relative h-28 w-28">
                <Image src="/logo-web_sm.png" layout="fill" objectFit="contain" />
              </div>
    </div>
    </div>
  )
}

export default Nav