import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>

    <MDBFooter className=' text-white '>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Media Player</h5>

            <p>
            Media player software is a type of application software for playing multimedia computer files like audio and video files. Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play, pause, fastforward, rewind, and stop buttons.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>External Players</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.videolan.org/' className='text-white'>
                  VLC
                </a>
              </li>
              <li>
                <a href='https://support.microsoft.com/en-us/windows/windows-media-player-d10303a5-896c-2ce2-53d4-5bd5b9fd888b' className='text-white'>
                  Windows Media Player
                </a>
              </li>
              <li>
                <a href='https://www.real.com/' className='text-white'>
                  Real Player
                </a>
              </li>
              <li>
                <a href='https://www.kmplayer.com/home' className='text-white'>
                  KMPlayer
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Streaming Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='https://www.youtube.com/' className='text-white'>
                  Youtube
                </a>
              </li>
              <li>
                <a href='https://www.netflix.com/' className='text-white'>
                  Netflix
                </a>
              </li>
              <li>
                <a href='https://www.primevideo.com/' className='text-white'>
                  Prime Video
                </a>
              </li>
              <li>
                <a href='https://www.hotstar.com/in' className='text-white'>
                  Disney Hotstar
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
 
    </>
  )
}

export default Footer
