"use client"

import {Heading, Center, Image, Text, Box} from "@chakra-ui/react"

export default function Home() {
  return (
    <>
    {/* <Center>
      <Image src = "/images/frame1.png" alt = "Frame1" width = "142px" height = "45px" top = "15px" left = "29px" />
      <Heading width = "526px" height = "47px" top = "13.5px" left = "281px" gap = "32px">Home</Heading>
      <Heading width = "526px" height = "47px" top = "13.5px" left = "281px" gap = "32px">Product</Heading>
      <Heading width = "526px" height = "47px" top = "13.5px" left = "281px" gap = "32px">Contact</Heading>
      <Heading width = "526px" height = "47px" top = "13.5px" left = "281px" gap = "32px">Partner with us!</Heading>
      <Image src = "/images/frame2.png" alt = "Frame2" width = "148px" height = "47px" top = "13px" left = "924px" />
    </Center> */}
   
    <Image src = "/images/top nav.png" alt = "top nav" width = "1087px" height = "74px" top = "38px" left = "213px" mb = "20" marginTop = "50px" />



    <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
    <Image src="/images/frame12.png" alt="Frame 12" width="348px" height="336px" style={{ borderRadius: "20px", position: "absolute", top: "-100px", left: "420px", zIndex: 2,}} />
    </div>
    


    <Center> 
      <Image src = "/images/frame3.png" alt = "Frame3" width = "365px" height = "226px" position = "relative" left = "70px" top = "50px"/>
      
      <Box>
      <Text width = "732px" height = "126px" font = "Ubuntu" fontWeight = "500" fontSize = "55px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
        Powering Convenience, <br />
        Fueling Sustainability.
      </Text>

      <Text width = "762px" height = "72px" font = "Poppins" fontWeight = "400" fontSize = "26px" lineHeight = "100%" letterSpacing = "0%" color = "#3B3B3B" textAlign = "center">
        Explore the best energy solution for your home or business <br />
        while finding fuel when you need it most.
      </Text>
      </Box>
      
      <Image src = "/images/frame 5.png" alt = "Frame 5" width = "279px" height = "273px" position = "relative" right = "90px" top = "-20px" />
    </Center>



    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame2.png" alt = "Frame2" width = "148px" height = "47px" top = "527px" left = "690px"  mb = "20"/>
    </div>
    
   
    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame 6.png" alt = "Frame 6" width = "95%" maxHeight = "1100px" height = "auto" mb = "12" borderRadius = "25px"/>
    </div>
              
    
    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame 7.png" alt = "Frame 7" width = "95%" maxHeight = "1100px" height = "auto" mb = "12" borderRadius = "25px"/>
    </div>
    

    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame 8.png" alt = "Frame 8" width = "95%" maxHeight = "900px" height = "auto" mb = "12" />
    </div>


    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame 9.png" alt = "Frame 9" width = "92%" maxHeight = "400px" height = "auto" mb = "12" borderRadius = "25px"/>
    </div> 


    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame10.png" alt = "Frame10" width = "95%" maxHeight = "400px" height = "auto" mb = "12" />
    </div>
   

    <div style = {{display: "flex", justifyContent: "center"}}>
    <Image src = "/images/frame11.png" alt = "Frame11" width = "95%" maxHeight = "550px" height = "auto" />
    </div>

    </>
  );
}
