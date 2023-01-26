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
  import EmailIcon from '@mui/icons-material/Email';
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import FacebookIcon from '@mui/icons-material/Facebook';
import { textDecoration } from "@chakra-ui/react";
const Contact = () => {
  return (
    <Container id="contact">
      <Box sx={{ textAlign: "center", mt: 15 }}>
        <Typography sx={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
          Get In Touch
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "#8164f4" }}>
          Contact Me
        </Typography>
      </Box>
      <Grid
          container
          spacing={3}
          sx={{
            mt: 5,mb:8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            justify: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={4}>
            {" "}
            <Card
              sx={{ml:{xs:7.5},
                width: "260px",
                height: "150px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.01)",
                  transition: "0.3s",
                },
                border: "2px solid #8164f4",
              }}
            >
              <Box sx={{textAlign:'center',mt:1}}><FacebookIcon sx={{height:"50px",width:"50px",color:"#8164f4"}}></FacebookIcon> </Box>
              <CardContent>
                <Typography sx={{mt:-2, color: "white",textAlign:'center',color:"rgba(255,255,255,0.6)" }}>
                  Contact me on facebook
                </Typography>
              </CardContent>
              <cardAction>
               <a href="https://www.facebook.com" id="button"> <Button
                  sx={{
                    ml: 9,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      opacity: [0.9, 0.8, 1.7],
                    },
                  }}
                  variant="contained"
                >
                  M{" "}
                  <Typography sx={{ textTransform: "lowercase" }}>
                    essage Me
                  </Typography>
                </Button></a>
                              </cardAction>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {" "}
            <Card
              sx={{ml:{xs:7.5},
                width: "260px",
                height: "150px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.01)",
                  transition: "0.3s",
                },
                border: "2px solid #8164f4",
              }}
            >
              <Box sx={{textAlign:'center',mt:1}}><EmailIcon sx={{height:"50px",width:"50px",color:"#8164f4"}}></EmailIcon> </Box>
              <CardContent>
                <Typography sx={{mt:-2, color: "white",textAlign:'center',color:"rgba(255,255,255,0.6)" }}>
                  Contact me on Email
                </Typography>
              </CardContent>
              <cardAction>
               <a id="button" href="https://mail.google.com/"> <Button
                  sx={{
                    ml: 9,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      opacity: [0.9, 0.8, 1.7],
                    },
                  }}
                  variant="contained"
                >
                  M{" "}
                  <Typography sx={{ textTransform: "lowercase" }}>
                    essage Me
                  </Typography>
                </Button></a>
                              </cardAction>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {" "}
            <Card
              sx={{ml:{xs:7.5},
                width: "260px",
                height: "150px",
                borderRadius: "25px",
                bgcolor: "#2f285f",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.01)",
                  transition: "0.3s",
                },
                border: "2px solid #8164f4",
              }}
            >
              <Box sx={{textAlign:'center',mt:1}}><WhatsAppIcon  sx={{height:"50px",width:"50px",color:"#8164f4"}}></WhatsAppIcon> </Box>
              <CardContent>
                <Typography sx={{mt:-2, color: "white",textAlign:'center',color:"rgba(255,255,255,0.6)" }}>
                  Contact me on WhatsApp
                </Typography>
              </CardContent>
              <cardAction>
               <a id="button" href="https://web.whatsapp.com"> <Button
                  sx={{
                    ml: 9,
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      opacity: [0.9, 0.8, 1.7],
                    },
                  }}
                  variant="contained"
                >
                  M{" "}
                  <Typography sx={{ textTransform: "lowercase" }}>
                    essage Me
                  </Typography>
                </Button></a>
                              </cardAction>
            </Card>
          </Grid>

          </Grid>
      
    </Container>
  );
};

export default Contact;
