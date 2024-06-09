import { Link } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture
} from "../utils/constants";

const ChannelCard = ({ channelDetail,marginTop}) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      width: { xs: "356px", md: "320px" },
      height: "356px",
      margin: "auto",
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#FFF",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: "2",
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="subtitle1">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 14 }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscriber
          </Typography>
        )}
      </CardContent>
    </Link>
    <CardMedia />
  </Box>
);

export default ChannelCard