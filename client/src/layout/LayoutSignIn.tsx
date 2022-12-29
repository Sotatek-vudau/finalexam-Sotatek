import React,{ReactNode} from 'react'
interface PropsChildren{
  children: ReactNode
}
export default function LayoutSignIn({children}: PropsChildren) {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-[blue]'>
        <div className='w-[598px] '>
            {children}
        </div>
    </div>
  )
}
