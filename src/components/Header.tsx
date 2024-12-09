import { useState } from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profil.png";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HeaderItems } from "./HeaderItems";

export default function Header() {
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WatchList",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];
  const [togle,setToggle] = useState(false)
  return (
    <div className={"flex items-center justify-between p-5"}>
      <div className={"flex gap-8 items-center"}>
        <img
          src={logo}
          alt="Disney Logo"
          className="w-[45px] h-[45px] md:w-[70px] object-cover"
        />
        <div className={"hidden md:flex gap-8"}>
          {menu.map((item) => (
            <HeaderItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className={"flex md:hidden gap-8"}>
          {/* menu.slice(0,3  ) */}
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems key={item.name} name={''} Icon={item.icon} />
          )}
        </div>
        <div className={"md:hidden"} onClick={()=>setToggle(!togle)}>
          <HeaderItems key={''} name={""} Icon={HiDotsVertical}/>

         {togle ? <div className={"absolute mt-2 bg-black border-[1px] p-3"}>
            {/* menu.slice(3) */}
            {menu.map(
              (item, index) =>
                index > 2 && (
                  <HeaderItems
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                )
            )}
          </div>:null}
        </div>
      </div>
      <img src={profile} alt="Profile" className="w-[40px] rounded-full" />
    </div>
  );
}
