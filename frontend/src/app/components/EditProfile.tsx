import React, { useContext, useState } from 'react'
import InputEditProfile from './InputEditProfile'
import { Avatar, Select } from 'antd';
import { DataContext } from '../../App';

export default function () {

  const [openEditInfo, setOpenEditInfo] = useState<boolean>(false);
  const [openEditLocation, setOpenLocation] = useState<boolean>(false);
  const [openEditBio, setOpenEditBio] = useState<boolean>(false);
  const [openEditApp, setOpenEditApp] = useState<boolean>(false);
  const [openAddApp, setOpenAddApp] = useState<boolean>(false);
  const {dataUser} = useContext<any>(DataContext);


  return (
    <div className='w-full '>

      {/* info */}
      <div className='flex flex-row w-[full] h-[96px] justify-between items-top '>
        <div className='w-full min-h-[50px] flex flex-row items-center'>
          <div className=' mr-[18px] relative'>
            <Avatar src='https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg' size={96} />
            <p className='w-[32px] h-[32px] bg-[#C8C8C8] rounded-full absolute right-0 bottom-0 flex justify-center items-center'><i className="fa-solid fa-camera " /></p>
          </div>
          {
            !openEditInfo
              ?
              <p className='text-[#29282B] text-[24px] font-semibold ml-[16px]'>{dataUser?.username}</p>
              :
              <InputEditProfile height={80} closeInput={openEditInfo} setCloseInput={setOpenEditInfo} valueData={dataUser?.username} value={"username"}/>
          }
        </div>
        {
          !openEditInfo && <i
            className="fa-solid fa-pen cursor-pointer"
            onClick={() => setOpenEditInfo(!openEditInfo)}
          />
        }

      </div>

      {/* Location */}
      <div className='flex flex-col justify-between items-start  py-[16px] border-b-[1px] border-solid border-[#F1F1F1]'>
        <div className='w-full flex flex-row justify-between items-start'>
          <p className='text-[24px] font-bold leading-5 mb-[8px]'>Locaton</p>
          <i
            className="fa-solid fa-pen cursor-pointer"
            onClick={() => setOpenLocation(!openEditLocation)}
          />
        </div>
        {
          !openEditLocation
            ?
            <p className='text-[14px] text-[#29282B] leading-5 mr-[55px] text-left'>{dataUser?.location}</p>
            :
            <InputEditProfile height={50} closeInput={openEditLocation} setCloseInput={setOpenLocation} valueData={dataUser?.location} value={"location"}/>
        }
      </div>

      {/* Bio */}
      <div className='flex flex-col justify-between py-[16px] border-b-[1px] border-solid border-[#F1F1F1] items-start'>
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
            <p className='text-[14px] text-[#29282B] leading-5 mr-[55px] text-left'>{dataUser?.bio}</p>
            :
            <InputEditProfile height={50} closeInput={openEditBio} setCloseInput={setOpenEditBio} valueData={dataUser?.bio} value={"bio"}/>
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
          <i className="fa-solid fa-pen cursor-pointer" onClick={() => setOpenEditApp(!openEditApp)} />
        </div>
        {openEditApp &&
          <div className='w-full flex flex-col items-end'>
            <div className='w-full flex flex-row justify-between mt-[24px]'>
              <input
                type='text'
                placeholder='Enter username'
                className='w-full outline-none border-[1px] border-solid border-[#F1F1F1] rounded-[15px] py-[5px] px-[15px] mr-[18px]' />
              <Select
                defaultValue="instagram"
                style={{ width: 125, height: 35 }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'instagram',
                    label: 'Instagram',
                  },
                  {
                    value: 'facebook',
                    label: 'Facebook',
                  },
                  {
                    value: 'linkedin',
                    label: 'Linkedin',
                  },
                ]}
              />
            </div>
            <div className='mt-[16px]'>
              <button className='w-[90px] h-[40px] bg-[#F5F5F5] rounded-[6px] mr-[16px]' onClick={() => setOpenEditApp(!openEditApp)}>Cancel</button>
              <button className='w-[90px] h-[40px] bg-[#8954C2] text-[#FFFF] rounded-[6px]'>Save</button>
            </div>
          </div>
        }
        {openAddApp &&
          <div className='w-full flex flex-col items-end'>
            <div className='w-full flex flex-row justify-between mt-[24px]'>
              <input
                type='text'
                placeholder='Enter username'
                className='w-full outline-none border-[1px] border-solid border-[#F1F1F1] rounded-[15px] py-[5px] px-[15px] mr-[18px]' />
              <Select
                defaultValue="instagram"
                style={{ width: 125, height: 35 }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'instagram',
                    label: 'Instagram',
                  },
                  {
                    value: 'facebook',
                    label: 'Facebook',
                  },
                  {
                    value: 'linkedin',
                    label: 'Linkedin',
                  },
                ]}
              />
            </div>
            <div className='mt-[16px]'>
              <button className='w-[90px] h-[40px] bg-[#F5F5F5] rounded-[6px] mr-[16px]' onClick={() => setOpenAddApp(!openAddApp)}>Cancel</button>
              <button className='w-[90px] h-[40px] bg-[#8954C2] text-[#FFFF] rounded-[6px]'>Save</button>
            </div>
          </div>
        }
        <div className='flex flex-row items-center text-[#8954C2] cursor-pointer' onClick={() => setOpenAddApp(true)}>
          <i className="fa-solid fa-circle-plus mr-[8px]" />
          <p className='text-[16px]  leading-6'>Add a website</p>
        </div>
      </div>
    </div>
  )
}
