import React, { useState } from 'react'
import InputEditProfile from './InputEditProfile'

export default function () {

  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [openEditLocation, setOpenLocation] = useState(false);
  const [openEditBio, setOpenEditBio] = useState(false);
  const [openEditApp, setOpenEditApp] = useState(false);


  return (
    <div className='w-full '>

      {/* info */}
      <div className='flex flex-row w-[full] h-[96px] justify-between items-top '>
        <div className='w-full min-h-[50px] flex flex-row items-top'>
          <div className='w-[96px] h-[96px] mr-[18px] relative'>
            <img src='https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg' className='w-full h-full rounded-full ' />
            <p className='w-[32px] h-[32px] bg-[#C8C8C8] rounded-full absolute right-0 bottom-0 flex justify-center items-center'><i className="fa-solid fa-camera " /></p>
          </div>
          {
            !openEditInfo
              ?
              <p className='text-[#29282B] text-[24px] font-semibold ml-[16px]'>Doraemon</p>
              :
              <InputEditProfile height={100} closeInput={openEditInfo} setCloseInput={setOpenEditInfo} />
          }
        </div>
        <i
          className={`fa-solid fa-pen cursor-pointer ${openEditInfo ? 'hidden' : 'block'}`}
          onClick={() => setOpenEditInfo(!openEditInfo)}
        />
      </div>

      {/* Location */}
      <div className='flex flex-col justify-between items-start  py-[16px] border-b-[1px] border-solid border-[#F1F1F1]'>
        <div className='w-full flex flex-row justify-between items-start'>
          <p className='text-[24px] font-bold leading-5 mb-[8px]'>Location</p>
          <i
            className="fa-solid fa-pen cursor-pointer"
            onClick={() => setOpenLocation(!openEditLocation)}
          />
        </div>
        {
          !openEditLocation
            ?
            <p className='text-[14px] text-[#29282B] leading-5 mr-[55px] text-left'>Ha Noi</p>
            :
            <InputEditProfile height={50} closeInput={openEditLocation} setCloseInput={setOpenLocation} />
        }
      </div>

      {/* Bio */}
      <div className='flex flex-col justify-between items-center py-[16px] border-b-[1px] border-solid border-[#F1F1F1]'>
        <div className='w-full flex flex-row justify-between items-start'>
          <p className='text-[24px] font-bold leading-5 mb-[8px]'>Bio</p>
          <i
            className="fa-solid fa-pen cursor-pointer"
            onClick={() => setOpenEditBio(!openEditBio)}
          />
        </div>
        {
          !openEditBio
            ?
            <p className='text-[14px] text-[#29282B] leading-5 mr-[55px] text-left'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </p>
            :
            <InputEditProfile height={50} closeInput={openEditBio} setCloseInput={setOpenEditBio} />
        }
      </div>

      {/* my pages */}
      <div className='flex flex-col justify-start items-start mt-[24px]'>
        <p className='text-[24px] font-bold leading-5 mb-[18px]'>My Pages</p>
        <div className='w-full flex flex-row items-center justify-between mb-[13px]'>
          <div className="flex flex-row items-center  ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-[21px] h-[21px] rounded-full" />
            <p className="text-[12px] leading-5 font-medium ml-[17px]">MinhVu_2409</p>
          </div>
          <i className="fa-solid fa-pen cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
