import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";
// videos 
import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";


export const ProductionHouse=()=>{
    const ProductList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starwarV
        },
    ]
    return(
        <div className={'flex gap-5 p-2 px-5 md:px-6'} >
            {ProductList.map((item, indx)=>{
                return(
                <div className={'border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-gray-800 shadow-xl '}>
                <video src={item.video} autoPlay loop playsInline muted className={'absolute top-0  rounded-md z-0 opacity-0 hover:opacity-50'} />
                <img src={item.image} alt="" key={indx} className={'w-full z-[1]'} />
               
                </div>
                )
            })}
        </div>
    )
}