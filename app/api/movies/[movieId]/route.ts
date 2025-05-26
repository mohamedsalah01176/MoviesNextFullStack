import movies from "@/data/movies.json"


export async function DELETE(req:Request,{params}:{params:Promise<{ movieId: string }> }){
    const { movieId } =await params;
    const updatedMovies = movies.filter(item => item.id !== Number(movieId));
    console.log(updatedMovies.length,"delete")
    return new Response(JSON.stringify(updatedMovies),{status:200})
}
export async function GET(request: Request, { params }: { params: Promise<{ movieId: string }> }) {
  const { movieId } = await params;
    // const movie = movies.find(item => item.id === Number(movieId));
    const movie=await (await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`))
    if (!movie) {
        return new Response(JSON.stringify({ error: "Movie not found" }), { status: 404 });
    }
    console.log(movie,"hhhhhhhhhhhh")
    return new Response(JSON.stringify(movie), { status: 200 });
}

export async function PUT(req:Request,{params}:{params:Promise<{ movieId: string }> }){
    const {movieId}=await params;
    const body=await req.json();

    const movieIndex=movies.findIndex(item=>item.id ==Number(movieId))
    if(movieIndex === -1){
        return new Response(JSON.stringify({error:"Movie Not Found"}),{status:500})
    }

    movies[movieIndex]={...movies[movieIndex],...body}
    console.log(body,"body")
    return new Response(JSON.stringify(movies),{status:200})
}