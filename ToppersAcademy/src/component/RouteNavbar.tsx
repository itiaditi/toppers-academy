import {
    Box,
    Flex,
    Text,
    IconButton,
   
    Stack,
    Collapse,
    // Icon,
    Popover,
    PopoverTrigger,
    // PopoverContent,
    useColorModeValue,
    useDisclosure,
    
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    // ChevronDownIcon,
    // ChevronRightIcon,
  } from "@chakra-ui/icons";
  import { NavLink } from "react-router-dom";
  
  
  export  const RouteNavbar:React.FC=()=> {
    const { isOpen, onToggle } = useDisclosure();
  
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex 
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex width={'100%'}
         
            // flex={{ base: 1 }}
            // justify={{ base: "center", md: "space-between" }}
justifyContent={"space-around"}
columnGap={100}
            // align={"center"}
          >
          
  
  
            <Flex display={{ base: "none", md: "flex" }} ml={'10rem'}>
              <DesktopNav />
            </Flex>
  
  
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              
            </Stack>
          </Flex>
        </Flex>
  
  
        <Collapse in={isOpen} animateOpacity>
          {/* <MobileNav /> */}
        </Collapse>
      </Box>
    );
  }
  
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("red", "white");
   // const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
  
    return (
      <Flex ml={'5rem'} justifyContent="space-evenly" >
        {NAV_ITEMS.map((navItem) => {
          return (
            <Box ml={14} key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box  fontSize={"sm"}
                      fontWeight={800}
                      color={linkColor}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}>
                    <NavLink
                      to={`${navItem.to}`}
                     >
                      <Text fontSize={"1rem"} fontWeight={"500"}>
                        {navItem.label}
                      </Text>
                    </NavLink>
                  </Box>
                </PopoverTrigger>
  
  
                {/* {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )} */}
              </Popover>
            </Box>
          );
        })}
      </Flex>
    );
  };
  
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Box
//         as="a"
//         href={href}
//         role={"group"}
//         display={"block"}
//         p={2}
//         rounded={"md"}
//         _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//       >
//         <Stack direction={"row"} align={"center"}>
//           <Box>
//             <Text
//               transition={"all .3s ease"}
//               _groupHover={{ color: "pink.400" }}
//               fontWeight={500}
//             >
//               {label}
//             </Text>
//             <Text fontSize={"sm"}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={"all .3s ease"}
//             transform={"translateX(-10px)"}
//             opacity={0}
//             _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//             justify={"flex-end"}
//             align={"center"}
//             flex={1}
//           >
//             <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Box>
//     );
//   };
  
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue("white", "gray.800")}
//         p={4}
//         display={{ md: "none" }}
//       >
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
  
//   const MobileNavItem = ({ label, children, to }) => {
//     const { isOpen, onToggle } = useDisclosure();
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <NavLink
//           py={2}
//           to={to}
//           _hover={{
//             textDecoration: "none",
//           }}
//         >
//           <Text
//             fontWeight={600}
//             color={useColorModeValue("gray.600", "gray.200")}
//             mt={2}
//           >
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={"all .25s ease-in-out"}
//               transform={isOpen ? "rotate(180deg)" : ""}
//               w={6}
//               h={6}
//             />
//           )}
//         </NavLink>
  
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={"solid"}
//             borderColor={useColorModeValue("gray.200", "gray.700")}
//             align={"start"}
//           >
//             {children &&
//               children.map((child) => (
//                 <Box as="a" key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Box>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
  
  const NAV_ITEMS = [
    {
      label: "COURSES",
      to: "/card",
      // children: [
      //   {
      //     label: "Job Board",
      //     subLabel: "Find your dream design job",
      //     href: "#",
      //   },
      //   {
      //     label: "Freelance Projects",
      //     subLabel: "An exclusive list for contract work",
      //     href: "#",
      //   },
      // ],
    },
    {
      label: "MY ACCOUNT",
      // href: "#",
      to: "#",
    },
    {
      label: "PROGRESS",
      // href: "#",
      to: "/progress",
    },
    {
      label: "PROFILE",
      // href: "#",
      to: "/profile",
    },
    {
      label: "TEACHERS",
      // href: "#",
      to: "/teachers",
    },
  ];
  