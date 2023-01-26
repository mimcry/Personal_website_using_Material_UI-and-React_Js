
import {
    Grid,
    List,
    ListItemText,
    Typography,
    Button,
    Stack,
    Paper,
   
    Container,
  } from "@mui/material";
  import { Box } from "@mui/system";
  
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  
  import SendIcon from "@mui/icons-material/Send";
  
  export default function Footer() {
    return (
      <Container>
      <Paper  elevation={24}
        sx={{
          background:"#2f285f",
         borderRadius:"20px",
          p: { xs: 4, md: 10 },
          pt: 12,
          pb: 12,
          fontSize: { xs: '12px', md: '14px' },
          mb:5
        
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={6} lg={4}>
              <Typography><Box component="img"
                src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2102/wikagraphic210207138.jpg"
                alt="delivery"
                sx={{width: "70px",
                height: "50px",
                borderRadius:"25px"
          }}
              /></Typography>
            <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#8164f4",mt:2}}>About Me</Typography>
            <Typography variant="caption2" sx={{color:"rgba(255,255,255,0.6)"}}>
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
              incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud.
            </Typography>
           
          </Grid>
          
          <Grid item md={6} lg={2}>
            <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#8164f4"}}>Contact</Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2"sx={{color:"rgba(255,255,255,0.6)"}}>
                 Location: Dhulikhel, Bhattidanda
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"rgba(255,255,255,0.6)"}}>
                 Phone: 9860428022
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"rgba(255,255,255,0.6)"}}>
                  Email: salongautam4@gmail.com
                </Typography>
              </ListItemText>
              
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
          <Box
              sx={{
                mt: 4,
                flexDirection: "row",
                ml:{lg:20}
              }}
            >
              <FacebookIcon sx={{ mr: 1,color:"#8164f4",cursor:"pointer"}} />
              <TwitterIcon sx={{ mr: 1,color:"#8164f4",cursor:"pointer" }} />
              <InstagramIcon sx={{ mr: 1,color:"#8164f4",cursor:"pointer" }}/>
              <LinkedInIcon sx={{ mr: 1,color:"#8164f4" ,cursor:"pointer"}}/>
              <YouTubeIcon sx={{color:"#8164f4",cursor:"pointer"}} />
            </Box>
          </Grid>
          
        </Grid>
      </Paper></Container>
    );
  }