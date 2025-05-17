import Image from "next/image";



import type { Metadata } from 'next'
 
type Props = {
  params: Promise<{ productId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params }: Props,
//   parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).productId
  // fetch post information
   const {title,overview,images} = await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)).json()
  return {
    title: title ,
    description: overview || 'Detailed view of the movie.',
    openGraph:{
      images:images
    }
  }
}





const GetMovies= async(id:string)=>{
    const data=await(await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)).json()
            console.log(data);
            return data
  }
const Page = async({params}:{params:{productId:string}}) => {
  const data = await params; 
  const productId = data.productId; 
  const movie=await GetMovies(productId);
  return (
    <div className="flex justify-center items-center min-h-[95vh] pt-10 text-white w-[90%] m-auto">
        <div className="flex items-center justify-center gap-10 flex-col md:flex-row ">
            <Image width={500} height={600} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="movies" className="h-[600px] md:rounded-br-full rounded-none fede-left" />
            <div className="fede-rigth">
                <h1 className="text-3xl font-semibold fede-down text-[#9d2735] ">{movie?.title}</h1>
                <p className="my-2 pl-2 text-gray-400 fede-left">{movie?.overview}</p>
                <div className="my-4 fede-rigth">
                    <h2 className="mb-2">Categories:</h2>
                    <div className="flex gap-2">
                        {movie?.genres.map((item:{name:string,id:number})=>{
                            return(
                                <div key={item.id} className="border border-[#9d2735]  py-1 px-2 bg-[#9d2735] rounded-xl transition-all duration-300 hover:bg-[#161a1e] hover:text-[#9d2735] ">{item.name}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-around fade-in-down">
                    <div>
                        <span className="text-lg">Time</span>: <span className="text-gray-400"> {(movie?.runtime /60).toFixed(2) } Hours</span>
                    </div>
                    <div className="mb-8"><span className="text-lg">Votes</span>: <span className="text-gray-400">{movie?.vote_count}</span></div>
                </div>
                <a href={movie?.homepage} className="fede-up bg-red-700 py-2 px-3 block w-full text-center text-white rounded-xl  border-2 border-red-700 transition-all duration-300 hover:bg-black hover:text-red-700">Watch Now</a>
            </div>
        </div>
        </div>
  )
}

export default Page
