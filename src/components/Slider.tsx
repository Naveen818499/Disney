import { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
interface Movie {
  backdrop_path: string;
  // Add any other properties you expect from the movie data here
}
export default function Slider() {
  const [movieList,setMovieList]=useState<Movie[]>([]);
  const elementref = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
      getTrendMovies();

    },[])
    const getTrendMovies=() => {
      GlobalApi.getTrendingvideos.then(resp=>{
        console.log(resp.data.results,'Resp data');
        setMovieList(resp.data.results)
        
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      });
    }
    const sliderLeft=(ele:any)=>{
      ele.scrollLeft-=screenWidth-35
   }
    const sliderRight=(ele:any)=>{
      ele.scrollLeft+=screenWidth-35
    }
  return (
    <div>
      <HiOutlineChevronLeft className={'text-white text-[30px] absolute mx-8 mt-[180px] cursor-pointer hidden md:block '}
      onClick={()=>sliderLeft(elementref.current)}
      />
      < HiOutlineChevronRight className={'text-white text-[30px] absolute mx-8 mt-[180px] cursor-pointer right-0 hidden md:block'}
      onClick={()=>sliderRight(elementref.current)}
      />
    <div className={'flex overflow-x-auto w-full px-5 py-5 scrollbar-hide scroll-smooth'} ref={elementref}>
      {movieList.map((item, indx)=>{
        return(
        <img src={IMAGE_BASE_URL+item.backdrop_path} alt="slideimg" key={indx} className={'min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'} />

        )
      })}
    </div>
    </div>
  );
  }
