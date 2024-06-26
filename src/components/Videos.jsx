import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "...Loader";
  return (
    <Stack direction={direction || "row"} gap={2} flexWrap="wrap" justifyContent="start">
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
