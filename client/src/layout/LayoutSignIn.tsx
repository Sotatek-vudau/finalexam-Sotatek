import React, { ReactNode } from 'react';
import bgImg from "../assets/img/img_bg_login.png"
interface PropsChildren {
  children: ReactNode
}
export default function LayoutSignIn({ children }: PropsChildren) {
  return (
    <div
      className={`w-[100vw] min-h-[100vh] bg-[${bgImg}]`}
    // style={{backgroundImage:"url('../assets/img/img_bg_login.png')"}}
    >
      <div className='w-[598px] '>
        {children}
      </div>
    </div>
  )
}
