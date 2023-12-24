import React ,{useEffect} from 'react'
import { useReactMediaRecorder } from "react-media-recorder";

const MainPage = () => {

  const { status, startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ screen: true });

  useEffect(() => {
    if(mediaBlobUrl == undefined){
      var videoDiv = document.querySelector('.video_div');
      videoDiv.style.display = 'none';
    }
    else{
      var videoDiv = document.querySelector('.video_div');
      videoDiv.style.display = 'block';
    }
  }, [mediaBlobUrl])
  
  return (
    <div className="container">
        <div className="left">
          <div className="title">
            <h1 className="title_text">DrawCast</h1>
          </div>
          <div className="description">
            <h3 className="description_text">
              Drawcast is an innovative screen recording application that
              seamlessly integrates live drawing and editing features,
              empowering content creators to annotate and explain on-screen
              elements in real-time.
            </h3>
            <div className="video_div">
              <video id="video_input" src={mediaBlobUrl} controls autoPlay loop width="200" height="100" />
            </div>
            <div className="btn_div">
              <button className="btn record_btn" onClick={startRecording}>Record Screen</button>
              <button className="btn record_btn" onClick={stopRecording}>Stop Record</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage
