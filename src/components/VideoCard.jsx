import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width:  { xs: '100%', sm: '358px', md: "320px" } ,
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "106px",
          }}
        >
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60)}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle}
              <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: '12px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
