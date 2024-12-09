import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { MovieCard } from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HrMovieCard } from "./HrMovieCard";

const screenWidth = window.innerWidth;
export const MovieList = ({genereId,indx}:any) => {
    const [movie, SetMovie] = useState<any[]>([]);
    const elementref = useRef(null);
    useEffect(()=>{ 
        if(genereId){
            getMoviegenerId(genereId);
        }       
    },[genereId])
    const getMoviegenerId=(id: string)=>{
        GlobalApi.getGenersid({id})
        .then((resp) => {
            console.log(resp.data.results,'heloo');
            SetMovie(resp.data.results);
        })
        .catch((err) => {
            console.error("Error fetching movie data:", err);
        });           
        }
        const sliderLeft=(ele:any)=>{
          ele.scrollLeft-=screenWidth-50
       }
        const sliderRight=(ele:any)=>{
          ele.scrollLeft+=screenWidth-50
        }
  return (
    <div className={'relative'}>
    <IoChevronBackOutline className={`text-white text-[30px] absolute mx-8 mt-[180px] cursor-pointer hidden md:block 
    ${indx % 3==0?'mt-[70px]' : 'mt-[180px]'} `}
    onClick={()=>sliderLeft(elementref.current)}
    />
    <div ref={elementref} className={' flex overflow-x-auto gap-8 scrollbar-hide cursor-pointer pt-5 px-3 pb-10 transition-all duration-150 ease-in scroll-smooth'}>
      {movie.map((item, index)=>(
        <>
             {indx%3==0?<HrMovieCard key={index} movie={item} />:<MovieCard key={index} movie={item}/>}
        </>
      ))}
    </div>
    <IoChevronForwardOutline className={`text-white text-[30px] absolute mx-8 mt-[180px] top-0 cursor-pointer right-0 hidden md:block ${indx % 3==0?'mt-[70px]' : 'mt-[180px]'}  `}
    onClick={()=>sliderRight(elementref.current)}
    />
    </div>
  )
}

