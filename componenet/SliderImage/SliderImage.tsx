import Image from "next/image"
import Link from "next/link"


const SliderImage = async ({movies}:{movies:{id:number,poster_path:string}[]}) => {
    console.log(movies,"jjjjjjjjjjjjjjj")
  return (
    <>
        <div className=" flex gap-7 h-[260px] items-end">
            {movies.map((item)=>{
                return(
                    <Link href={`/movies/${item.id}`} title="btn" key={item.id} className="h-[230px] w-[170px]  transition-all duration-300 hover:-translate-y-4 hover:scale-110" >
                        <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="imaae" width={400} height={400} className="h-full rounded-lg"/>
                    </Link>
                )
            })}
        </div>
    </>
  )
}

export default SliderImage
