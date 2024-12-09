import SelectTypeMovie from "../emotion/SelectTypeMovie"
import { MovieList } from "./MovieList"


export const GeneresMovieList=()=> {
  return (
    <div >
      {SelectTypeMovie.generes.slice(0,8).map((item, indx)=>{
        return(
            <div className={'p-8 px-8 md:px-16'} key={indx} >
            <h2 className={'text-[20px] text-white font-bold '}>{item.name}</h2>
             <MovieList genereId={item.id} indx={indx} />
        </div>
        )        
        })}
    </div>
  )
}

