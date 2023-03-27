import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function VideoModal({ setVideo, card }) {
  return (
    <div className='w-[100%] h-[100%] flex  justify-center items-center'>
      <div className='flex flex-col  bg-white rounded-md p-[10px] gap-[5px]'>
        <div className='flex justify-end items-center'>
          <div className='w-[30px] text-center cursor-pointer' onClick={() => { setVideo(false) }}>
            <CloseOutlinedIcon />
          </div>
        </div>
        <div className=''>
          <iframe width="800" height="450" src={`https://www.youtube.com/embed/${card.url.split("v=")[1].split("&")[0]}?autoplay=1&mute=1`}>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
