import React from 'react'

interface Props {
  height: number,
  closeInput: any,
  setCloseInput: any
}

export default function InputEditProfile({ height, closeInput, setCloseInput }: Props) {
  return (
    <div className='w-full min-h-[50px] flex flex-col items-end'>
      <input
        type="text"
        className={`w-full h-[${height}px] outline-none border-[1px] border-solid border-[#F1F1F1] rounded-[15px] py-[5px] px-[15px] `}
      />
      <div className='mt-[16px]'>
        <button className='w-[90px] h-[40px] bg-[#F5F5F5] rounded-[6px] mr-[16px]' onClick={() => setCloseInput(!closeInput)}>Cancel</button>
        <button className='w-[90px] h-[40px] bg-[#8954C2] text-[#FFFF] rounded-[6px]'>Save</button>
      </div>
    </div>
  )
}
