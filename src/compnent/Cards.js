
import { SimpleGrid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import React from 'react'

function Cards() {
  return (
    <SimpleGrid columns={4} spacing={4}>
  <Box> <Image src="./img/Pic1.jpg" height='300px'/> </Box>
  <Box> <Image src="./img/Pic2.jpg" height='300px'/> </Box>
  <Box> <Image src= "./img/Pic3.jpg" height='300px'/> </Box>
  <Box> <Image src="./img/Pic4.jpg" height='300px'/> </Box>
  <Box> <Image scr="./img/Pic5.jpg" height='300px'/> </Box>
  <Box> <Image src= "./img/PIC6.jpg" height='300px'/> </Box>
  <Box> <Image src= "./img/Screenshot_1.png" height='250px'/> </Box>
  <Box> <Image src= "./img/Screenshot_2.png" height='250px'/> </Box>
  <Box> <Image src= "./img/Screenshot_3.png" height='300px'/> </Box>
  <Box> <Image src= "./img/Screenshot_4.png" height='300px'/> </Box>

   </SimpleGrid>
  )
}

export default Cards