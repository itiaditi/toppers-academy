import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react';

const WhyToppersAcademyWorks: React.FC = () => {
  return (
    <>
      <Box mr={150} ml={150} p={100}>
        <Center>
          <Text mb={20} fontSize={45} fontWeight={500} fontFamily="Source Serif 4, serif">Why Khan Academy works</Text>
        </Center>
        <HStack justifyContent="space-between" alignItems="start">
          <VStack w={320} alignItems="center">
            <Box h={100}>
              <Image src="https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png" w={110} />
            </Box>
            <Text fontSize={25} mb={3} textAlign="center">Personalized learning</Text>
            <Text textAlign="center">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</Text>
          </VStack>
          <VStack w={320} alignItems="center">
            <Box h={100}>
              <Image src="https://cdn.kastatic.org/images/lohp/trusted_content_icon.png" w={130} />
            </Box>
            <Text fontSize={25} mb={3} textAlign="center">Trusted content</Text>
            <Text textAlign="center">Created by experts, Topper's Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.</Text>
          </VStack>
          <VStack w={320} alignItems="center">
            <Box h={100}>
              <Image src="https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png" w={110} mt={4} />
            </Box>
            <Text fontSize={25} mb={3} textAlign="center">Tools to empower teachers</Text>
            <Text textAlign="center">With Topper's Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export { WhyToppersAcademyWorks };
