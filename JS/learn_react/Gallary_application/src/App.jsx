import axios from 'axios'
import { useEffect, useState } from 'react'
import {LoaderCircle} from 'lucide-react';
import { ChevronFirst, ChevronLast } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';
const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async() => {
    // console.log("data retrived");
     const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
     //console.log(response.data);
     setUser(response.data);
     console.log(user);
  }

  useEffect(()=>{
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2'> <LoaderCircle class="animate-spin h-10 w-9 text-gray-500" />
</h3>

  if(user.length>0){
    printUserData = user.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <img src={elem.download_url} alt="img" className='w-40 h-40 m-4 rounded-lg'/>
          <h2 className='text-center'>{elem.author}</h2>
        </a>
        
      </div>
    })
  }


  return (
    <div className='bg-black h-screen text-white'>
      {/* <button 
      className='bg-green-500 text-white m-4 rounded-full px-5 py-3 active:scale-90'
      onClick={getData}>Get Data</button> */}
      <div className='flex flex-wrap gap-5 scrollbar-hide overflow-y-scroll h-[80vh] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' >
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button 
        style={{pointerEvents: index<=1 ? 'none' : 'auto', opacity: index<=1 ? 0.5 : 1}}
          className='bg-amber-200 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
          onClick={()=>{
            if(index>1){
              setIndex(index-1);
              setUser([]);
            }}
          }
        >
            <ChevronFirst />
        </button>
        <div>
          <h2 className='text-xl font-bold'>{index}</h2>
        </div>
        <button 
          className='bg-amber-200 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'
          onClick={()=>{
            setIndex(index+1);
            setUser([]);
          }}
        >
            <ChevronLast />
        </button>
      </div>
    </div>
  )
}

export default App
