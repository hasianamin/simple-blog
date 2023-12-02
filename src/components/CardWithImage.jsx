import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";

export default function CardWithImage({ blog }) {
  const limitText = (data, limit) => {
    let text = data.split("");
    if (text.length > limit) {
      text = text.splice(0, limit);
      text = text.join("") + "...";
      return text;
    }
    return text.join("");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="name">
            HA
          </Avatar>
        }
        title={limitText(blog?.title, 70)}
        subheader={blog?.publishedAt}
      />
      <CardMedia
        component="img"
        height="194"
        image={blog?.image}
        alt={blog?.category}
      />
      <CardContent>
        <Box
          sx={{
            backgroundColor: "#1976D2",
            display: "inline-block",
            padding: "2px 6px",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        >
          <Typography color="whitesmoke" variant="caption">
            {blog?.category}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {limitText(blog?.detail, 250)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
