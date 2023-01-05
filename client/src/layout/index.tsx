import React, { ReactNode } from 'react'
import FriendRequets from '../app/components/FriendRequests'
import InfoUser from '../app/components/InfoUser'
import NavBar from '../app/components/NavBar'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full">
      <div className="header h-[90px] sticky flex top-0 z-20 bg-white">
        <NavBar />
      </div>
      <div className="main z-10 flex mx-[11px] bg-[#F6F6F6] justify-center">
        <div className="info w-[401px] h-[80vh] sticky top-[90px] left-0  flex flex-row-reverse items-start px-[16px]">
          <InfoUser />
        </div>
        <div className="conten w-[616px] mt-0 flex flex-wrap justify-center" >
          {children}
        </div>
        <div className="frend w-[401px] h-[80vh] sticky right-0 top-[90px] px-[16px]" >
          <FriendRequets />
        </div>
      </div>

    </div>
  )
}