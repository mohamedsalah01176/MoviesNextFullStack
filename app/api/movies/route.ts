import movies  from "@/data/movies.json"

// export function Get(req){
export async function GET(){
    return new Response(JSON.stringify(movies),{
        status:200
    })
}
export async function POST(req:Request){
    const newMovie=await req.json();
    const newId = movies.length ? movies[movies.length - 1].id + 1 : 1;
    const movieWithId = { id: newId, ...newMovie };
    
    movies.push(movieWithId);
    console.log(movies,"hhhhhhhhhhhhhhhh")
    return new Response(JSON.stringify(movies))

}