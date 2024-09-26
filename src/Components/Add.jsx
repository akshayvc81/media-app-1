
import React, { useState } from 'react'
import { FloatingLabel, Form,Button, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';






function Add({setUploadVideoResponse}) {

  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false);

  setUploadVideo({
    id:"",caption:"",url:"",link:""
  })
}

 
  const handleShow = () => setShow(true);
  

  console.log(uploadVideo);

  const getYoutubeLink = (e)=>{
    const {value} = e.target
    
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log({...uploadVideo,link:`http://www.youtube.com/embed/${vID}`});
      setUploadVideo({...uploadVideo,link:`http://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd= async()=>{
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("please fill missing fields")
    }else{
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        
        handleClose()
        alert("video successfully uploaded")

        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })

        setUploadVideoResponse(result.data)
        
      }else{
        console.log(result.message);
        alert("please provide unique id") 
      }
      }
  }


  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload Videos</h5>
        <button className='btn' onClick={handleShow}><i class="fa-solid fa-upload fa-beat"></i></button>

        
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="video id" onChange={(e)=> setUploadVideo({ ...uploadVideo,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="video name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="video name" onChange={(e)=> setUploadVideo({ ...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="image url" onChange={(e)=> setUploadVideo({ ...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingInput" label="video url" >
        <Form.Control type="text" placeholder="video url" onChange={getYoutubeLink}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add


