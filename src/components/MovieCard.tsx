import avatarimg from '../assets/images/avatar.png'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
export const MovieCard = ({movie}:any) => {
  return (
    <>
     <img src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}`: avatarimg } alt="card"
      className={"w-[150px] md:w-[200px] hover:border-[3px] border-gray-100 hover:scale-110 "} />
    </>
  )
}

