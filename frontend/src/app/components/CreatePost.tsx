import { Select, Avatar } from 'antd';

export default function CreatePost() {
  return (
    <form className='w-full'>
      <div className='flex flex-row'>
        <Avatar src='https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-hot-hoang.jpg' size={67} />
        <div className='ml-[16px]'>
          <p className='text-[16px] leading-6 font-bold mb-[8px]'>Doraemon</p>
          <Select
            defaultValue="Public"
            style={{ width: 125, height: 35 }}
            options={[
              {
                value: 'Public',
                label: 'Public',
              },
              {
                value: 'Friend',
                label: 'Friend',
              },
              {
                value: 'Only me',
                label: 'Only me',
              },
            ]}
          />
        </div>
      </div>
      <input className='h-[100px] border-none outline-none ' type='text' />
      <div className='flex flex-row justify-between border-[1px] border-solid border-[#e5e7eb] px-[20px] py-[25px] rounded-[10px]'>
        <p className='text-[16px] leading-6'>Add to your post</p>
        <div className='flex flex-row justify-between items-center '>
          <div className='flex flex-row items-center justify-center mr-[26px] cursor-pointer'>
            <i className="fa-solid fa-image text-[#439DF0]" />
            <p className='text-[14px] leading-5 ml-[8px]'>Image</p>
          </div>
          <div className='flex flex-row items-center justify-center cursor-pointer'>
            <i className="fa-solid fa-video text-[#F4AF6F]" />
            <p className='text-[14px] leading-5 ml-[8px]'>Video</p>
          </div>
        </div>
      </div>
      <button className='w-full h-[55px] bg-[#C18FF5] text-[#FFFF] leading-5 rounded-[10px] my-[25px]'>Post</button>
    </form>
  )
}

