import { FC } from 'react';

// Define a type for the props
interface HeaderItemsProps {
  name: string;
  Icon: React.ComponentType;  // or React.FC if it's a functional component
}
export const HeaderItems:FC<HeaderItemsProps>=({name, Icon})=>{
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
        <Icon/>
      <h2>{name}</h2>
    </div>
  )
}
