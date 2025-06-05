import * as React from 'react'
import Box from '@mui/material/Box'
import SingleChoice from './questions/SingleChoice'
import MultipleChoice from './questions/MultipleChoice'
import Completion from './questions/Completion'

export default function Paper({
  mocPaperDto,
  isAnswerVisible,
  isSimpleMode,
}: {
  mocPaperDto: MocPaperDto
  isAnswerVisible?: boolean
  isSimpleMode?: boolean
}) {
  return (
    <Box>
      <Box id="answer-box">
        {mocPaperDto.objectiveQList.map((objectiveQ) => {
          switch (objectiveQ.type) {
            case 1:
            case 4:
              return (
                <SingleChoice
                  key={objectiveQ.id}
                  question={objectiveQ}
                  isSimpleMode={isSimpleMode}
                  isAnswerVisible={isAnswerVisible}
                />
              )
            case 2:
              return (
                <MultipleChoice
                  key={objectiveQ.id}
                  question={objectiveQ}
                  isSimpleMode={isSimpleMode}
                  isAnswerVisible={isAnswerVisible}
                />
              )
            case 3:
              return (
                <Completion
                  key={objectiveQ.id}
                  question={objectiveQ}
                  isSimpleMode={isSimpleMode}
                  isAnswerVisible={isAnswerVisible}
                />
              )
            default:
              return null
          }
        })}
      </Box>
    </Box>
  )
}
