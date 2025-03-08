import React from 'react'
import {useform} from "react-hook-form"
import { useNavigate } from "react-router-dom";


const login = () => {
  const user = "";
  const {
    register, 
    handlesubmit, 
    formstart: {errors }, 
  } = useform();
  

 const Navigate = useNavigate();


 useEffect(() => {
   user && navigate("/Dashboard");
  }, [user]);



  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center usify-center">
        {/* left side */}
        <div className="h-full w-full lg:w-2/3 flex-col iems-center justify-center">
         <div className='w-full md:max-x-lg 2xl:max-w-3xl flex flex-col items-cente justify-cente gap-5 md:gap-y-10 2xl:-mt-20'>
          <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>
            Manage all your project in one place!
          </span>
         </div>
        </div>
        {/* right side *}
      </div>

    </div>
  )


}

export default login

