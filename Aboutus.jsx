import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
function Home() {
  return (
    <div id="about"  className="container">
      <Box sx={{ textAlign: "center", mt: {lg:20,xs:30} }}>
        <Typography sx={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
          I'm a Designer
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "#8164f4" }}>
          About Me
        </Typography>
      </Box>
      <Grid container sx={{ mt: 30 }}>
        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="pppp.jpg"
            sx={{mt:{xs:-65,lg:-30,md:-20},ml:{xs:5},
              display: { md: "block" },
              width: {lg:500,xs:200,md:350},
              height:{lg:500,xs:200,md:350},
              objectFit: "cover",
              borderRadius:"2rem",
              overflow:"hidden",
              
              transform: 'rotate(10deg)',
            }}
          />
        </Grid>

        <Grid
          item
          xs={6}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,mt:{lg:-55,xs:-20,md:-45},ml:{md:92}
          }}
        >
          <Box >
            <Box
              sx={{
                display: "flex",

              
               
              }}
            >
              <Grid container spacing={2} sx={{ display: "flex", gap: 1, }}>
              <Grid item lg={4} md={6} xs={6}>
                  <Paper
                    elevation={24}
                    sx={{ height: "155px",
                    width: "155px",borderRadius: "25px", bgcolor: "#2212", ml:{xs:-20,lg:0} }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "150px",
                        bgcolor: "#2f285f",
                        borderRadius: "25px",
                        
                      }}
                    >
                      <Typography sx={{ color: "black", textAlign: "center" }}>
                        <VerifiedIcon
                          sx={{ mt: 4, color: "#8164f4" }}
                        ></VerifiedIcon>
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          textAlign: "center",
                          mt: 1,
                          fontSize: "1.0rem",
                        }}
                      >
                        Experience
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          textAlign: "center",
                          fontSize: "0.8rem",
                        }}
                      >
                        2.5+ Years
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={4} md={6} xs={6}>
                  <Paper
                    elevation={24}
                    sx={{ height: "155px",
                    width: "155px", borderRadius: "25px", bgcolor: "#2212",mt:{xs:-22.5,lg:0},ml:{xs:2,lg:0} }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "150px",
                        bgcolor: "#2f285f",
                        borderRadius: "25px",
                      }}
                    >
                      <Typography sx={{ color: "black", textAlign: "center", }}>
                        <VerifiedIcon
                          sx={{ mt: 4, color: "#8164f4" }}
                        ></VerifiedIcon>
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          textAlign: "center",
                          mt: 1,
                          fontSize: "1.0rem",
                        }}
                      >
                        Experience
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          textAlign: "center",
                          fontSize: "0.8rem",
                        }}
                      >
                        2.5+ Years
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={4} md={6} xs={6}>
                  <Paper
                    elevation={24}
                    sx={{ height: "155px",
                    width: "155px",borderRadius: "25px", bgcolor: "#2212", ml:{xs:-20,lg:0} }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "150px",
                        bgcolor: "#2f285f",
                        borderRadius: "25px",
                        
                      }}
                    >
                      <Typography sx={{ color: "black", textAlign: "center" }}>
                        <VerifiedIcon
                          sx={{ mt: 4, color: "#8164f4" }}
                        ></VerifiedIcon>
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          textAlign: "center",
                          mt: 1,
                          fontSize: "1.0rem",
                        }}
                      >
                        Experience
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          textAlign: "center",
                          fontSize: "0.8rem",
                        }}
                      >
                        2.5+ Years
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item lg={4} md={6} xs={6}>
                  <Paper
                    elevation={24}
                    sx={{ height: "155px",
                    width: "155px", borderRadius: "25px", bgcolor: "#2212",mt:{xs:-22.5,lg:0},ml:{xs:2,lg:0} }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "150px",
                        bgcolor: "#2f285f",
                        borderRadius: "25px",
                      }}
                    >
                      <Typography sx={{ color: "black", textAlign: "center", }}>
                        <VerifiedIcon
                          sx={{ mt: 4, color: "#8164f4" }}
                        ></VerifiedIcon>
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          textAlign: "center",
                          mt: 1,
                          fontSize: "1.0rem",
                        }}
                      >
                        Experience
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          textAlign: "center",
                          fontSize: "0.8rem",
                        }}
                      >
                        2.5+ Years
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                
              </Grid>
            </Box>
          </Box>
          <Typography
            component="h6"
            variant="body2"
            sx={{
              width: { md: "70%" },
              textAlign: "center",
              color: "rgba(255,255,255,0.6)",
              ml: {lg:-22,md:-50,xs:-22},
              mt:2
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'book. It has survived
            not only five centuries, but also the leap
          </Typography>
          
            <Button variant="contained" sx={{ ml:{lg:-25,md:-51,xs:-23}, mt: 3, height: "40px",borderRadius:"10px" }}>
              <Typography sx={{ color: "black", fontSize: "0.9rem" }}>
                Reach Me
              </Typography>
            </Button>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
