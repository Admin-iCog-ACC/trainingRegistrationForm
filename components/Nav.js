import {useEffect, useState} from 'react'
import Image from 'next/image'
import { withRouter } from 'next/router'

function Nav() {
  const [scrollState, setScrollState] = useState(false)
  useEffect(() => {
    const changeNavBackground = ()=>{
      setScrollState(window.scrollY > 65  )

    }
    window.addEventListener("scroll", changeNavBackground)
    return () => window.removeEventListener('scroll',changeNavBackground)
  }, [scrollState])

    

  return (
    <div className={scrollState ? 'w-full sticky top-0 z-10 h-32  bg-white shadow-lg' : 'w-full sticky top-0 z-10 h-32'}>   
    <div className='max-w-[1225px] mx-auto '>
              <div className={scrollState ? "h-32 w-32 relative" :'h-40 w-40 relative'}>
                <Image src="/logo-web_sm.png" layout="fill" objectFit="contain" alt='' />
              </div>
    </div>
    </div>

  )
}

export default Nav