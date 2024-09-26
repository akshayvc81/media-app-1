import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getALLVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]= useState(false)

  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getUploadedVideos = async ()=>{
      const result = await getALLVideosAPI()
      console.log(result);
      if (result.status==200){
        setAllVideos(result.data)
      }else{
        setAllVideos([])
        console.log("API FAILED");
        
      }
      
    }

    // console.log(allVideos)

    const videodragOver = (e)=>{
      e.preventDefault()
    }

    const videoDropped = async(e)=>{
      const {videoId,CateogaryId}=JSON.parse(e.dataTransfer.getData("data"))
       console.log(videoId,CateogaryId);

      const {data} = await getCategoryAPI()
      const selectedCateogary = data.find(item=>item.id==CateogaryId)
      let result = selectedCateogary.allVideos.filter(video=>video.id!==videoId)
      // console.log(result);

      let{id,CateogaryName}= selectedCateogary
      let newCateogary = {id,CateogaryName,allVideos:result}
      console.log(newCateogary);
      const res = await updateCategoryAPI(CateogaryId,newCateogary)
      setDropVideoResponse(res)
      
      
      
    }
  




  return (
    <>
      <Row droppable="true" onDragOver={e=>videodragOver(e)} onDrop={e=>videoDropped(e)}>

        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col sm={12} md={4} lg={3}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
          )):<p> Nothing to display</p>
          }

      </Row>
    </>
  )
}

export default View
