import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HTML from '@/components/HTML'
import Plaintext from '@/components/Plaintext'

export default function Homework({
  mocPaperDto,
  isAnswerVisible,
  isSimpleMode,
}: {
  mocPaperDto: MocPaperDto
  isAnswerVisible?: boolean
  isSimpleMode?: boolean
}) {
  return (
    <Box id="homework-box">
      {mocPaperDto.subjectiveQList.map((subjectiveQ) => {
        return (
          <Box
            key={subjectiveQ.id}
            component="span"
            sx={{
              display: 'flex',
              p: 2,
              my: 1,
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'center' },
              transitionProperty: 'all',
              transitionDuration: '150ms',
              '&:hover, &:focus': {
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'primaryDark.700'
                    : 'grey.100',
                '@media (hover: none)': {
                  bgcolor: 'transparent',
                },
              },
            }}
          >
            <span>
              <Typography variant="subtitle1" display="block">
                {isSimpleMode ? (
                  <Plaintext html={subjectiveQ.title}></Plaintext>
                ) : (
                  <HTML html={subjectiveQ.title} />
                )}
              </Typography>

              {isAnswerVisible && (
                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  {subjectiveQ.judgeDtos.map((judgeDto) => (
                    <span
                      style={{ display: 'flex', flexDirection: 'column' }}
                      key={judgeDto.id}
                    >
                      {isSimpleMode ? (
                        <Plaintext html={judgeDto.msg}></Plaintext>
                      ) : (
                        <HTML html={judgeDto.msg} />
                      )}
                    </span>
                  ))}
                </Typography>
              )}
            </span>
          </Box>
        )
      })}
    </Box>
  )
}
