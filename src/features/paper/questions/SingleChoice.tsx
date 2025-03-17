import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import HTML from "@/components/HTML";
import Plaintext from "@/components/Plaintext";

interface SingleChoiceProps {
  question: ObjectiveQ;
  isSimpleMode?: boolean;
}

const SingleChoice: React.FC<SingleChoiceProps> = ({ question, isSimpleMode }) => {
  return (
    <Box
      key={question.id}
      component="span"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        my: 1,
        transitionProperty: "all",
        transitionDuration: "150ms",
        "&:hover, &:focus": {
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "primaryDark.700" : "grey.100",
          "@media (hover: none)": {
            bgcolor: "transparent",
          },
        },
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        display="block"
      >
        {isSimpleMode ? <Plaintext html={question.title}></Plaintext> : <HTML html={question.title} />}
      </Typography>
      <FormControl>
        <RadioGroup
          value={
            question.optionDtos.find((optionDtosItem) => optionDtosItem.answer)
              ?.id
          }
        >
          {question.optionDtos.map((optionDto) => (
            <FormControlLabel
              key={optionDto.id}
              value={optionDto.id}
              control={<Radio />}
              label={
                <Typography>
                  {isSimpleMode ? <Plaintext html={optionDto.content}></Plaintext> : <HTML html={optionDto.content} />}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SingleChoice;
