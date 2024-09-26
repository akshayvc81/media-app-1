import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">

      <Col></Col>
      <Col lg={5}>
      <h1 style={{fontSize:'40px'}}>Welcome to <span>Media-Player</span></h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse reiciendis sed, adipisci dolorem vero voluptatum quia in obcaecati modi nobis. Quidem, magni dignissimos. Consectetur rerum unde distinctio alias ducimus voluptate!
      Provident, suscipit perferendis. Libero eaque reiciendis quaerat accusamus itaque! Nulla ea officia fuga. Iusto sit autem quisquam recusandae totam commodi reprehenderit nihil consequatur. Accusantium nemo vitae nobis sunt possimus quia.
      Provident incidunt rerum nulla, ducimus non quos maiores cupiditate quasi amet quisquam dicta esse quaerat ipsa illum dolor quas minima optio inventore. A nemo accusamus id amet suscipit porro saepe.
      Culpa laudantium optio quas quis laboriosam. Fugit corrupti repellat, eveniet qui, voluptatem modi non assumenda temporibus rem porro ab beatae debitis nemo reiciendis cum optio quia perferendis! Necessitatibus, aspernatur numquam?</p>
      <button onClick={()=>navigateByUrl('home/')} className='btn -btn-info mt-4'>Get Started</button>
      </Col>
      <Col lg={5}>
      <img src="https://media.giphy.com/media/noLiBWJsX9mes/giphy.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>


    <div className='container mb-5 d-flex align-items-center justify-content-center flex-column'>

      <h3>Features</h3>
      <div className='"cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://cdnl.iconscout.com/lottie/premium/thumb/video-player-animation-download-in-lottie-json-gif-static-svg-file-formats--multimedia-streaming-seo-v10-pack-web-animations-4682275.gif"/>
        <Card.Body>
          <Card.Title className='text-primary'>Managing Videos
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores quibusdam, consectetur, exercitationem nostrum error minus laboriosam sit mollitia eius ducimus ad explicabo, adipisci eum dolorum dignissimos doloremque odio itaque!
            </Card.Text>
          </Card.Title>
        </Card.Body>
        </Card>

        <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media4.giphy.com/media/fSRY4X9o0vRpbzPTk3/200w.gif?cid=6c09b952pxfyq6pq2ngnedddn375m0jvwp1k3yszv1htbed7&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
        <Card.Body>
          <Card.Title className='text-primary'>Cateogarised Video
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores quibusdam, consectetur, exercitationem nostrum error minus laboriosam sit mollitia eius ducimus ad explicabo, adipisci eum dolorum dignissimos doloremque odio itaque!
            </Card.Text>
          </Card.Title>
        </Card.Body>
        </Card>


        <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/Yi0vZJ15lPMAAAAj/ocuitic-sinful.gif"/>
        <Card.Body>
          <Card.Title className='text-primary'>Watch History
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores quibusdam, consectetur, exercitationem nostrum error minus laboriosam sit mollitia eius ducimus ad explicabo, adipisci eum dolorum dignissimos doloremque odio itaque!
            </Card.Text>
          </Card.Title>
        </Card.Body>
        </Card>




      </div>

    </div>


    <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>

      <h4 className='text-warning'>Simple, Powerful and Fast</h4>
      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita recusandae quo alias laboriosam necessitatibus quaerat nam quisquam magni similique aspernatur tenetur eius, quod quis corrupti fuga culpa quos temporibus.
      Perspiciatis, quis veritatis! Vitae similique earum repellendus? Aperiam ut corporis eaque atque cum est, quam tempora illo. Veniam eveniet velit aliquid sapiente dolorem quisquam eius. Ex cumque nulla similique quis!</h6>

      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Cateogarize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita recusandae quo alias laboriosam necessitatibus quaerat nam quisquam magni similique aspernatur tenetur eius, quod quis corrupti fuga culpa quos temporibus.
      Perspiciatis, quis veritatis! Vitae similique earum repellendus? Aperiam ut corporis eaque atque cum est, quam tempora illo. Veniam eveniet velit aliquid sapiente dolorem quisquam eius. Ex cumque nulla similique quis!</h6>


      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita recusandae quo alias laboriosam necessitatibus quaerat nam quisquam magni similique aspernatur tenetur eius, quod quis corrupti fuga culpa quos temporibus.
      Perspiciatis, quis veritatis! Vitae similique earum repellendus? Aperiam ut corporis eaque atque cum est, quam tempora illo. Veniam eveniet velit aliquid sapiente dolorem quisquam eius. Ex cumque nulla similique quis!</h6>





    </div>


    </>
  )
}

export default LandingPage
