import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HTML from '@/components/HTML'
import { convert } from 'html-to-text'
import Plaintext from '@/components/Plaintext'

interface CompletionProps {
  question: ObjectiveQ
  isSimpleMode?: boolean
  isAnswerVisible?: boolean
}

const Completion: React.FC<CompletionProps> = ({
  question,
  isSimpleMode,
  isAnswerVisible,
}) => {
  return (
    <Box
      key={question.id}
      component="span"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        my: 1,
        transitionProperty: 'all',
        transitionDuration: '150ms',
        '&:hover, &:focus': {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.100',
          '@media (hover: none)': {
            bgcolor: 'transparent',
          },
        },
      }}
    >
      <Typography variant="subtitle1" display="block">
        {isSimpleMode ? (
          <Plaintext html={question.title}></Plaintext>
        ) : (
          <HTML html={question.title} />
        )}
      </Typography>
      <Typography
        sx={{
          mt: 2,
        }}
      >
        {() => {
          if (isAnswerVisible) {
            isSimpleMode
              ? convert(
                  question.stdAnswer.replace(/##%_YZPRLFH_%##/g, '或者'),
                  { wordwrap: false }
                )
              : question.stdAnswer
                  .replace(/##%_YZPRLFH_%##/g, '或者')
                  .replace(/<[^>]+>/g, '')
          }
        }}
      </Typography>
    </Box>
  )
}

export default Completion
