import { Flex } from '@chakra-ui/react'
import React from 'react'
import QuizTopic from './QuizTopic'
import AttemptQuiz from './AttemptQuiz'
import McqComponent from './McqComponent'

const QuizDetail = () => {
  return (
    <Flex>
        <QuizTopic/>
        <AttemptQuiz/>
        <McqComponent/>
    </Flex>
  )
}

export default QuizDetail
