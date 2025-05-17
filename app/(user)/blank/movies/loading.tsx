import React from 'react'



async function loading () {

    const movies=Array.from({length:14})
  console.log(movies,"products")
  return (
    <div className='min-h-[98vh] bg-[#161a1e] pb-20'>
      <div className='w-[90%] mx-auto pt-30 '>
        <h2 className='text-4xl font-bold text-white'>All Movies</h2>
        <div className=' flex justify-between flex-wrap gap-y-10 gap-x-3 mt-8'>
            {movies.map((item,index)=>{
              return(
              <div key={index}
                className="flex flex-col bg-neutral-300 w-[250px] h-[527px] animate-pulse rounded-xl p-4 gap-4"
              >
                <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                <div className="flex flex-col gap-2">
                  <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                </div>
              </div>

              )
            }
            )}
          </div>
        </div>
    </div>
  )
}

export default loading
