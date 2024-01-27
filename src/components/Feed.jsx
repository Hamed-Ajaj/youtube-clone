import { useState,useEffect } from "react"
import { Box,Stack,Typography } from "@mui/material"
import { Sidebar,Videos } from "./"
import {fetchFromApi} from "../utils/fetchFromApi"
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row",overflowY:"column" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 0.8 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={1.6} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
