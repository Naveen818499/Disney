import avatarimg from '../assets/images/avatar.png'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
export const HrMovieCard = ({movie}:any) => {
  return (
    <section className={"hover:scale-110 ease-in transition-all duration-100"} >
     <img src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}`: avatarimg } alt="card"
      className={"w-[150px] md:w-[200px] hover:border-[3px] border-gray-400 cursor-pointer"} />
      <h2 className={"w-[150px] md:w-[200px] text-white mt-3"} >{movie.title}</h2>
    </section>
  )
}

