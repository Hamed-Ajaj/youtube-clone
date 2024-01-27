import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box, CardContent } from "@mui/material"
import {Videos, ChannelCard} from "./"
import { fetchFromApi } from "../utils/fetchFromApi"
function ChannelDetail() {
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  console.log(channelDetail)
  useEffect(() =>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  },[id])
  
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{
          background: "rgb(240,103,249",
          background:"linear-gradient(85deg, rgba(240,103,249,1) 10%, rgba(65,72,239,1) 67%)",
          zIndex: 10,
          height: "300px",
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-103px"/> 
        </Box>
        <Box display={"flex"} p="2">
          <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail