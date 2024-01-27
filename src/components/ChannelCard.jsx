import { Box,CardMedia,CardContent,Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { demoProfilePicture } from "../utils/constants"
const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box
    sx={{
      boxShadow:"none",
      borderRadius:"20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:{xs:"356px", md:"300px"},
      height:"326px",
      margin:"auto",
      marginTop,
    }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          color:"#fff",
        }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius:"50%",width:"180px",height:"180px",mb:2,border:"1px solid #e3e3e3"}}
          />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:"gray",ml:"5px"}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount &&(
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
