import React from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardAction,
  Container,
} from "@mui/material";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <Container>
      <Box
        sx={{mt:2,
          width:{lg:"1200px"},height:{ lg:"75px",md:"75px",xs:"110px"},borderRadius:"15px",bgcolor: "#2f285f",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2102/wikagraphic210207138.jpg"
          alt="delivery"
          sx={{
            width: "70px",
            mt: 1,
            ml: {lg:5,md:5 ,xs:1},
            height: "60px",
            borderRadius: "25px",cursor:"pointer"
          }}
        />
       <Grid sx={{gap:5,display: "flex",mt:3}}> <Typography sx={{ color: "white",ml:{lg:25,md:20,xs:5},fontSize:"1.1rem",cursor:"pointer" , "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.2)",
                  transition: "0.3s",
                },}}>Home</Typography>
   <Link to="about" spy={true} smooth={true}>     <Typography sx={{ color: "white",ml:{lg:10, md:5,xs:0},mt:{xs:-0.1,lg:0,md:0},fontSize:"1.1rem" ,cursor:"pointer", "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.2)",
                  transition: "0.3s",
                },}}>Myself</Typography></Link>
        <Link to="mywork" spy={true} smooth={true}><Typography sx={{ color: "white" ,ml:{lg:10, md:5,xs:-25},mt:{xs:5,md:0, lg:0},fontSize:"1.1rem",cursor:"pointer", "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.2)",
                  transition: "0.3s",
                },}}> My Works</Typography></Link>
        <Link to="contact" spy={true} smooth={true}><Typography sx={{ color: "white",ml:{lg:10, md:5,xs:-18},mt:{xs:5,md:0, lg:0} ,fontSize:"1.1rem",cursor:"pointer", "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.2)",
                  transition: "0.3s",
                },}}>Contact Me</Typography></Link></Grid>
      </Box>
    </Container>
  );
};

export default Navbar;
