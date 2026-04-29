import React, { useEffect, useState } from 'react'

function Search() {
    const [search, setSearch] = useState('')
    useEffect(()=>{
      const getData=()=>{
        //api call
        console.log("Data has been fetched")
      }
      const timer=setTimeout(getData,500)
      console.log(search)
      return ()=>clearTimeout(timer)
    },[search])
  return (
    <div>
      <input type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
