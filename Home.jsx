import { Box, Grid, Typography, Chip,Paper } from "@mui/material";


function Home() {
  
  return (
    <Grid container sx={{mt:10}}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Typography
              component="span"
              variant="h5"
              color="white"
              sx={{
               fontFamily:"Sofia Sans",
                fontSize: { xs: 30, md: 40 },
              }}
            >
             Hi, 👋

            </Typography>
            <Typography
              component="span"
              variant="h5"
              sx={{
                fontFamily:"Sofia Sans",
                color:"white",
                fontSize: { xs: 30, md: 40 },
              }}
            >
           its me 
            </Typography>
            <Typography
              component="span"
              variant="h5"
              color="white"
              sx={{
               fontFamily:"Sofia Sans",
                fontSize: { xs: 30, md: 40 },
              }}
            >
           Salon Gautam 🧑‍🦰

            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Typography
              component="span"
              variant="h5"
              color="#8164f4"
              sx={{mt:1,
               ml:-1,
                fontSize: { xs: 20, md: 30 },
              }}
            >Freelancer Front End Designer
            </Typography>
          
          </Box>
        </Box>
        <Typography
          component="h6"
          variant="body2"
          sx={{
            width: { md: "70%" },
            textAlign: {lg:"center", xs:"center", md:"center",},
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry'book. It has survived not
          only five centuries, but also the leap
        </Typography>
       
      </Grid>
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
         
        }}
      ><Paper elevation={24} sx={{borderRadius:"250px 250px 50px 50px",
      background:'radial-gradient(circle,white,#1a193a,#1a193a)', width: {lg:350,xs:250,md:350}, display:{ xs:"none",md:'block'},
      height:555,}}>
        <Box
          component="img"
          src="me.png"
          sx={{
            display:{ xs:"none",md:'block'},
            mt:"auto",
            width: {lg:"100%",xs:"65%",md:"100%"},
            height:"auto",
            objectFit:'cover',padding:0,margin:0,
          }}
        /></Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
