import React, { useState } from 'react'
import Add from '../Components/Add'
import Cateogary from '../Components/Cateogary'
import View from '../Components/View'
import { Link } from 'react-router-dom'



function Home() {

  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState([])

  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <div className='add-videos'>
        <Add setUploadVideoResponse={setUploadVideoResponse} />
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:"blueviolet",fontSize:'30px'}}>watch-history<i class="fa-brands fa-youtube fa-beat me-3 fs-4"></i></Link>
      </div> 

      <div className="container-fluid d-flex">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
          </div>
          <div className="all-videos col-lg-3">
            <Cateogary dropVideoResponse={dropVideoResponse}/>
            </div>
          </div> 
    </>
  )
}

export default Home
