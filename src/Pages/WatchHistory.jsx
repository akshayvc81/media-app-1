import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVIdeoHistoryAPI, getVIdeoHistoryAPI } from '../../services/allAPI'


function WatchHistory() {

  const [history,setHistory]=useState([])

  useEffect(()=>{
  getHistory()
  },[])

  const getHistory = async()=>{
    const result = await getVIdeoHistoryAPI()
    console.log(result);
    if (result.status==200){
      setHistory(result.data)
    }else{
      console.log("result failed");
      console.log(result.message);  
    }
    
  }
  console.log(history);

  const removeHistory = async(id)=>{
    await deleteVIdeoHistoryAPI(id)
    getHistory()
  }
  





  return (
    <>
          <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h2>Watch history</h2>
      <Link style={{textDecoration:'none',color:'blueviolet',fontSize:'25px'}} to={'/home'}>Back to home<i class="fa-solid fa-rotate-right fa-beat"></i></Link>
    </div>

    <table className='table mb-5 container shadow w-100'>
      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>URL</th>
          <th>time start</th>
          <th>Action</th>
        </tr>
      </thead>
  <tbody>

    {
    history?.length>0?history.map((video,index)=>(

      <tr>
      <td>{index+1}</td>
      <td>{video.caption}</td>
      <td><a href={video.link}>{video.link}</a></td>
      <td>{video.timeStamp}</td>
      <td><button className='btn' onClick={()=>removeHistory(video.id)}>DELETE<i class="fa-solid fa-trash"></i></button></td>


    </tr> 
    )):<p>NOTHING TO DISPLAY</p>
    }


  </tbody>

      
    </table>

    </>
  )
}

export default WatchHistory
