import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard'



function Cateogary({dropVideoResponse}) {

  const [cateogaryName,setcateogaryName] = useState("")
  const [allCateogaries,setAllCateogaries] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd = async()=>{
    if(cateogaryName){
      const result = await addCategoryAPI({cateogaryName,allVideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setcateogaryName("")
        getCateogaries()
      }else{
        alert(result.message)
      }
    }else{
      alert("please fill the fields")
    }
  }


  useEffect(()=>{
    getCateogaries()
  },[dropVideoResponse])

  const getCateogaries = async () => {
    const {data} = await getCategoryAPI()
    // console.log(data);
    setAllCateogaries(data)
  }

  console.log(allCateogaries);

  const removeCateogary = async (id) => {
    await deleteCategoryAPI(id)
    getCateogaries()
  }

  const dragOver = (e)=>{
    console.log("video card dragging over the cateogary");
    e.preventDefault()
  }

  const videoDrop = async (e,CateogaryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log("videoId"+videoId+"videodropped inside cateogary"+CateogaryId);  

    const {data} =await getAVideoAPI(videoId)
    // console.log(data);
    const selectedCateogary = allCateogaries.find(item=>item.id===CateogaryId)
    selectedCateogary.allVideos.push(data);
    await updateCategoryAPI(CateogaryId,selectedCateogary)
    getCateogaries()
    
  }

  const videodragStarted = (e,videoId,CateogaryId)=>{
    let dataShare = {videoId,CateogaryId}
    e.dataTransfer.setData("data",(JSON.stringify(dataShare)))
  }

  

  return (
    <>

    <div className="d-grid">
      <button className='btn btn-info' onClick={handleShow}>Add Cateogary</button>
    </div>

  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cateogary</Modal.Title>
        </Modal.Header>
        <Modal.Body> <input type="text" className='form-control' placeholder='enter cateogary name' onChange={e=>setcateogaryName(e.target.value)}/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    { allCateogaries.length>0?allCateogaries.map(Cateogary=>(
      <div className="border rounded mt-3 p-3" droppable="true" onDragOver={e=>dragOver(e)}  onDrop={e=>videoDrop(e,Cateogary.id)}>
      <div className="d-flex justify-content-between align-items-center">
        <h3>{Cateogary.cateogaryName}</h3>
        <button className='btn' onClick={()=>removeCateogary(Cateogary.id)}><i class="fa-solid fa-trash text-danger"></i></button>
      </div>

      <Row>
        {
          Cateogary?.allVideos?.length>0?Cateogary.allVideos.map(card=>(
            <Col sm={12} draggable onDragStart={e=>videodragStarted(e,card.id,Cateogary.id)}>
            <VideoCard video={card} insideCateogary={true} />
            </Col>
          )):null
        }
      </Row>

    </div>
    )):<p className='text-danger fw-bolder'>Nothing to Display</p>
    }
    
      
    </>
  )
}

export default Cateogary
