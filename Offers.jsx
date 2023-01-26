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
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
function Home() {
  return (
    <Grid>
      <Box sx={{ mt: 15 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          What I Offer
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "1.5rem", color: "#8164f4" }}
        >
          Services
        </Typography>
      </Box>
      <Grid container>
        <Grid
          container
          spacing={2}
          sx={{
            gap: 10,
            display: "flex",
            mt: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            ml: 0,
          }}
        >
          {" "}
          
          <Grid item xs={12} lg={3} md={4}>
            {" "}
            <Card
              sx={{
                width: { lg: "350px", xs: "310px",md:"350px" },
                height: "400px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                padding: "2rem",
                "&:hover": {
                  transition: "0.3s",
                  transform: "scale(1.02)",
                },
                border: "1px solid black",
              }}
            >
              <Paper elevation={24}>
                {" "}
                <Card
                  sx={{
                    width: { lg: "415px", xs: "415px", md:"415px" },
                    height: "55px",
                    borderRadius: "25px 2px",
                    bgcolor: "#078ae8",
                    ml: -5,
                    mt: -4.01,

                    border: "1px solid black",
                  }}
                >
                  <Typography
                    sx={{
                      color: "",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      fontWeight: "lighter",
                      mt: 1.5,
                    }}
                  >
                    {" "}
                    UI/UX Design
                  </Typography>
                </Card>
              </Paper>

              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3} md={4}>
            {" "}
            <Card
              sx={{
                width: { lg: "350px", xs: "310px",md:"350px" },
                height: "400px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                padding: "2rem",
                "&:hover": {
                  transition: "0.3s",
                  transform: "scale(1.02)",
                },
                border: "1px solid black",
              }}
            >
              <Paper elevation={24}>
                {" "}
                <Card
                  sx={{
                    width: { lg: "415px", xs: "415px", md:"415px" },
                    height: "55px",
                    borderRadius: "25px 2px",
                    bgcolor: "#078ae8",
                    ml: -5,
                    mt: -4.01,

                    border: "1px solid black",
                  }}
                >
                  <Typography
                    sx={{
                      color: "",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      fontWeight: "lighter",
                      mt: 1.5,
                    }}
                  >
                    {" "}
                    UI/UX Design
                  </Typography>
                </Card>
              </Paper>

              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3} md={4}>
            {" "}
            <Card
              sx={{
                width: { lg: "350px", xs: "310px",md:"350px" },
                height: "400px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                padding: "2rem",
                "&:hover": {
                  transition: "0.3s",
                  transform: "scale(1.02)",
                },
                border: "1px solid black",
              }}
            >
              <Paper elevation={24}>
                {" "}
                <Card
                  sx={{
                    width: { lg: "415px", xs: "415px", md:"415px" },
                    height: "55px",
                    borderRadius: "25px 2px",
                    bgcolor: "#078ae8",
                    ml: -5,
                    mt: -4.01,

                    border: "1px solid black",
                  }}
                >
                  <Typography
                    sx={{
                      color: "",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      fontWeight: "lighter",
                      mt: 1.5,
                    }}
                  >
                    {" "}
                    UI/UX Design
                  </Typography>
                </Card>
              </Paper>

              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
              <Typography sx={{ display: "flex", mt: 3 }}>
                <TaskAltIcon sx={{ color: "#8164f4" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
                
              </Typography>
            </Card>
          </Grid>
          
          
          </Grid> 
      </Grid>
    </Grid>
  );
}

export default Home;
