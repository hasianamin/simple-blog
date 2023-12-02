import "./App.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import CardWithImage from "./components/CardWithImage";

const RenderCard = ({ blogs }) => (
  <Grid container rowSpacing={4}>
    {blogs.map((blog) => {
      return (
        <Grid item xs={12} sm={4} key={blog?.id}>
          <CardWithImage blog={blog} />
        </Grid>
      );
    })}
  </Grid>
);

function App() {
  const BASE_URL = "http://localhost:4000";
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/blogs`);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Box>
      <Navbar />
      <Container
        sx={{
          marginTop: "2rem",
          background: "#F0f0f0",
          borderRadius: "20px",
          marginBottom: "4rem",
          paddingBottom: "2rem",
        }}
      >
        <Box sx={{ paddingY: "1.5rem" }}>
          <Typography variant="h3">
            Welcome, <br />
            Here's my Personal Blogs
          </Typography>
        </Box>
        <RenderCard blogs={blogs} />
      </Container>
    </Box>
  );
}

export default App;
