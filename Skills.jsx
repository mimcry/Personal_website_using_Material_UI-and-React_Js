import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Container
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
function Home() {
  return (
    <Container>
<Box sx={{ mt: 15, }}>
        <Typography sx={{   textAlign: "center", fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", }}>
          What skills I Have
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "1.5rem", color: "#8164f4" }}>
        My Experience
        </Typography>
      </Box>
    <Grid container >
      
      <Grid
        container
        spacing={2}
        sx={{gap:20,
          display: "flex",
          mt:5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          ml:{lg:-10,md:0,xs:0}
        }}
      >
        
           
        {" "}
         <Grid item xs={12} lg={3} md={4}>
          {" "}
          <Card
            sx={{
              width: {lg:"350px",xs:"300px"},
              height: "250px",
              borderRadius: "25px",
              bgcolor: "#2f285f",
              padding: "2rem ",
              "&:hover": {
                backgroundColor: "transparent",
                opacity: [1, 0.8, 0.7],
              },
              border: "1px solid black",ml:{xs:-1, md:0, lg:0}
            }}
          >
            <Typography sx={{ textAlign: "center", mt: 1, color: "#8164f4" }}>
              Frontend Development
            </Typography>
            <Grid>
              {" "}
              <Grid
                item
                sx={{
                  mt: 3,
                  display: "grid",
                  gridTemplateColumns: "20fr 20fr",
                }}
              >
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} md={4}>
          {" "}
          <Card
            sx={{
              width: {lg:"350px",xs:"300px"},
              height: "250px",
              borderRadius: "25px",
              bgcolor: "#2f285f",
              padding: "2rem",
              "&:hover": {
                backgroundColor: "transparent",
                opacity: [1, 0.8, 0.7],
              },
              border: "1px solid black",
              ml:{xs:-1, md:0, lg:0}
            }}
          >
            <Typography sx={{ textAlign: "center", mt: 1, color: "#8164f4" }}>
              Frontend Development
            </Typography>
            <Grid>
              {" "}
              <Grid
                item
                sx={{
                  mt: 3,
                  display: "grid",
                  gridTemplateColumns: "20fr 20fr",
                }}
              >
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1rem", mt: 2 }}>
                  {" "}
                  <VerifiedUserIcon
                    sx={{
                      height: "15px",
                      width: "15px",
                      color: "#8164f4",
                      mr: 2,
                    }}
                  ></VerifiedUserIcon>
                  HTML5
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.8rem",
                      ml: 4,
                    }}
                  >
                    Advanced
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid> 
      </Grid>
    </Grid></Container>
  );
}

export default Home;
