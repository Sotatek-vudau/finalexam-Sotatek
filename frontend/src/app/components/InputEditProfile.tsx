import React ,{useContext, useState} from 'react';
import { DataContext } from '../../App';
import { axiosInstance } from '../../services/axios';
import { toast } from 'react-toastify';

interface Props {
  height: number,
  closeInput: any,
  setCloseInput: any,
  valueData: string,
  value: string
}

export default function InputEditProfile(props: Props) {
  const { height, closeInput, setCloseInput, valueData, value} = props;
  const [newData, setNewData] = useState<string>(valueData);
  const {setDataUser} = useContext(DataContext)
  console.log(1,value);
  const handleClick = async (e:any) => {
        e.preventDefault();
        await axiosInstance.put("user/update",{
          [value] : newData,
        })
        .then((res)=>{
          toast.success(`Update ${value} success!!!`)
          const {data} = res.data;
          setDataUser(data);
          localStorage.setItem("User",JSON.stringify(data));
          setCloseInput(!closeInput)
        })
        .catch((err)=>{
          toast.error(`Err: ${JSON.stringify(err)}`)
          throw new Error("loi"+ JSON.stringify(err));
        })
  }
  return (
    <div className='w-full min-h-[50px] flex flex-col items-end'>
      <input
        type="text"
        className={`w-full h-[${height}px] outline-none border-[1px] border-solid border-[#F1F1F1] rounded-[15px] py-[5px] px-[15px] `}
        value={newData}
        onChange={(e)=>setNewData(e.target.value)}
      />
      <div className='mt-[16px]'>
        <button className='w-[90px] h-[40px] bg-[#F5F5F5] rounded-[6px] mr-[16px]' onClick={() => setCloseInput(!closeInput)}>Cancel</button>
        <button className='w-[90px] h-[40px] bg-[#8954C2] text-[#FFFF] rounded-[6px]' onClick={handleClick}>Save</button>
      </div>
    </div>
  )
}
