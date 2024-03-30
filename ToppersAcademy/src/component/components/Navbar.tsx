"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { EditProfile } from "./EditProfile";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={40}  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Flex h={40} alignItems={"center"} justifyContent={"space-between"} gap={7} >
          <Image
            src="https://cdn.kastatic.org/images/avatars/svg/blobby-green.svg"
            height={20}
          />
           <div>
                <h2 style={{ fontSize: 25, fontWeight: "bold" }}>
                  dayasagar301{" "}
                </h2>
                <Link style={{ fontSize: 15 }}>
                  Pick a username- Add your bio
                </Link>
              </div>
          <Flex alignItems={"center"} gap={1000} justifyContent={"space-between"} marginLeft={500}>
            <Stack direction={"row"} spacing={60} gap={70}>
            
              <Menu>
                <div>
                    <div>
                    {/* <Button colorScheme="blue" variant='outline' size="sm">
                  Edit Profile
                </Button> */}
                <EditProfile/>
                    </div>
                    <div style={{display:"flex" ,gap:"8px"}}>
                    <span style={{ backgroundColor: "blue", color: "white" ,paddingBottom:"4px",paddingRight:"3px",paddingLeft:"2px",height:"25px"}}>0</span>
                    <span style={{ backgroundColor: "green", color: "white" ,paddingBottom:"4px",paddingRight:"3px",paddingLeft:"2px",height:"25px"}}>o</span>
                    <span style={{ color: "teal" }}>0</span>
                    <span style={{ backgroundColor: "red", color: "white" ,paddingBottom:"4px",paddingRight:"3px",paddingLeft:"2px",height:"25px"}}>0</span>
                    <span style={{ backgroundColor: "blue", color: "white" ,paddingBottom:"4px",paddingRight:"3px",paddingLeft:"2px",height:"25px"}}>0</span>
                    
                    </div>
                </div>
               
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
