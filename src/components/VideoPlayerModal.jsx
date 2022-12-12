import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export const VideoPlayerModal = (props) => {
  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header closeButton style={{
        background:"#161616",color:'white',border:'none'
      }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background:'#161616'}} >
      <ReactPlayer
      
      width={'100%'}
      playing controls url={`https://youtu.be/${props?.videoid}`} />
      </Modal.Body>
      <Modal.Footer style={{background:"#161616",border:'none'}}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
