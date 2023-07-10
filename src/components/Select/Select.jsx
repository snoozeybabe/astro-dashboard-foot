import { useEffect, useState} from "react";

import './style.css';


const DropDownSvg = () => {

  return(
    <svg
    class="fill-current h-4 w-4 transform group-hover:-rotate-180
    transition duration-150 ease-in-out"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
    />
  </svg>
  )

}

function Select({label}) {
  return(
    <div className="h-[30px] w-[150px]">
      <div class="group inline-block w-[100%]">
        <button
          class="outline-none focus:outline-none border px-3  w-[100%] bg-[#DCDCDC] text-black rounded-sm flex items-center min-w-32"
        >
          <span class="pr-1 font-semibold flex-1">{label}</span>
          <span>
            <DropDownSvg/>
          </span>
        </button>
        <ul
          class="bg-[#DCDCDC]  text-black border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-[150px]"
        >
          <li class="rounded-sm px-3 hover:bg-black hover:text-[#DCDCDC]">Programming</li>
          <li class="rounded-sm px-3  hover:bg-black hover:text-[#DCDCDC]">DevOps</li>
          <li class="rounded-sm px-3   hover:bg-black hover:text-[#DCDCDC]">Testing</li>
        </ul>
      </div>
    </div>
  )
}


export default Select