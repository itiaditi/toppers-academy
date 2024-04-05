
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Body from "./Body";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../components/AuthContext";

interface Course {
  id: number;
  course: string;
  image: string;
  classes: CourseClass[];
}

interface CourseClass {
  [x: string]: any;
  grade: number;
  titles: string[];
}


interface Unit {
  id: number;
  title: string;
  mcqs: MCQ[];
}

interface MCQ {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}
interface Course2 {
  courseId: number;
  courseName: string;
  unitsCompleted: number[]; // Array of numbers representing completed units
  progress: number;
  classes: CourseClass[]; // Array of Class objects
}
export function BasicUseage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<number[]>([]);
  const [subject, setSubject] = useState("Maths");
  const {setClassData,ClassData} = useContext(AuthContext);

  useEffect(() => {
    const fetchCourses = () => {
      fetch(`https://toppers-academy.onrender.com/courses`)
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error("Error fetching courses:", error));
    };
    fetchCourses();
  }, []);
  
  const [filteredCourseClasses, setFilteredCourseClasses] = useState<CourseClass[]>(
    []
  );
  useEffect(() => {
    if (courses.length > 0) {
      const [filteredCourse] = courses.filter(
        (course) => course.course === subject
      );
     // console.log(filteredCourse);
     

      const courseClasses: CourseClass[] = filteredCourse.classes.map((currClass) => {
        return {
          grade: currClass.grade,
          titles: currClass.units.map((unit: { title: string }) => unit.title)
        };
      });
    //  console.log(courseClasses);
      //console.log()
      const courseQuestions = selectedGrades.flatMap((grade) => {
        console.log(grade);
        return courseClasses.filter((currClass) => {
          return currClass.grade === grade;
        });
      });
      
      setClassData(courseQuestions);
      setFilteredCourseClasses(courseClasses);

      // console.log(filteredCourseClasses);
    }
  }, [selectedGrades]);

  // console.log(courses);

 

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const grade = parseInt(event.target.value);

    if (event.target.checked) {
      setSelectedGrades([...selectedGrades, grade]);
      // console.log(selectedGrades);
    } else {
      setSelectedGrades(selectedGrades.filter((g) => g !== grade));
    }
  };

  // console.log(selectedGrades);

  const filteredCourses = courses.filter((course) =>
    selectedGrades.includes(course.id)
  );

  const handleSubmit = async () => {
    const userData2: Course2 = {
      courseId: 1,
      courseName: "Maths",
      unitsCompleted: [],
      progress: 0,
      classes: filteredCourseClasses,
    };

    console.log(userData2);

    try {
      const response = await fetch(
        `https://toppers-academy.onrender.com/learningProfiles/2`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            courses: [userData2],
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Button onClick={onOpen} color="white" bg="blue">
        Edit Courses
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <Text textAlign="center" fontSize={25} fontWeight="bold" color="blue">
            Personslize Toppers Academy
          </Text>
          <br />
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            
            backgroundPosition="center"
            backgroundSize="cover"
          >
            <Text>What grade are you in ?</Text>
            <Text marginBottom={2}>we will gather right lession for you</Text>
          </ModalHeader>
          <ModalCloseButton />
          <Box overflowY="scroll" maxHeight="70vh">
            <ModalBody>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem w="100%">
                  <Text fontWeight="bold" marginBottom={2}>
                    Classes
                  </Text>
                  <Divider borderColor="black" borderWidth="1px" />
                  <RadioGroup defaultValue="2">
                    <Stack spacing={3} direction="column">
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="1"
                        isChecked={selectedGrades.includes(1)}
                        onChange={handleGradeChange}
                      >
                        Class 1
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="2"
                        isChecked={selectedGrades.includes(2)}
                        onChange={handleGradeChange}
                      >
                        Class 2
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="3"
                        isChecked={selectedGrades.includes(3)}
                        onChange={handleGradeChange}
                      >
                        Class 3
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="4"
                        isChecked={selectedGrades.includes(4)}
                        onChange={handleGradeChange}
                      >
                        Class 4
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="5"
                        isChecked={selectedGrades.includes(5)}
                        onChange={handleGradeChange}
                      >
                        Class 5
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="6"
                        isChecked={selectedGrades.includes(6)}
                        onChange={handleGradeChange}
                      >
                        Class 6
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="7"
                        isChecked={selectedGrades.includes(7)}
                        onChange={handleGradeChange}
                      >
                        Class 7
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="8"
                        isChecked={selectedGrades.includes(8)}
                        onChange={handleGradeChange}
                      >
                        Class 8
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="9"
                        isChecked={selectedGrades.includes(9)}
                        onChange={handleGradeChange}
                      >
                        Class 9
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="10"
                        isChecked={selectedGrades.includes(10)}
                        onChange={handleGradeChange}
                      >
                        Class 10
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="11"
                        isChecked={selectedGrades.includes(11)}
                        onChange={handleGradeChange}
                      >
                        Class 11
                      </Checkbox>
                      <Checkbox
                        colorScheme="blue"
                        name="grade"
                        value="12"
                        isChecked={selectedGrades.includes(12)}
                        onChange={handleGradeChange}
                      >
                        Class 12
                      </Checkbox>
                    </Stack>
                  </RadioGroup>
                </GridItem>
                <GridItem w="100%">
                  <Text marginBottom={2}>University/Adult Learner</Text>
                  <Divider borderColor="black" borderWidth="1px" />
                  <RadioGroup defaultValue="2">
                    <Stack spacing={2} direction="column">
                      <Radio colorScheme="blue" value="1">
                        1st Year University
                      </Radio>
                      <Radio colorScheme="blue" value="2">
                        2nd Year University
                      </Radio>
                      <Radio colorScheme="blue" value="3">
                        3rd Year University
                      </Radio>
                      <Radio colorScheme="blue" value="4">
                        4th Year University
                      </Radio>
                      <Radio colorScheme="blue" value="5">
                        Graduate Studies
                      </Radio>
                      <Radio colorScheme="blue" value="6">
                        Adult Leraner
                      </Radio>
                      <Radio colorScheme="blue" value="7">
                        Other
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </GridItem>
              </Grid>
              <Divider borderColor="black" borderWidth="1px" />
            </ModalBody>
          </Box>
          <ModalFooter>
            {/* {showContinueModal && <Continue isOpen={showContinueModal} onClose={handleCloseContinueModal} />} */}
            {/* <NavLink
              to="/card"
              onClick={() => {
                setSelectedGrades(selectedGrades);
                console.log(selectedGrades);
              }}
            > */}
            <Button
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Continue
            </Button>

            {/* </NavLink> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}