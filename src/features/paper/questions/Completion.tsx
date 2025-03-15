import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HTML from "@/components/HTML";
import { convert } from "html-to-text";

interface CompletionProps {
  question: ObjectiveQ;
  isSimpleMode?: boolean;
}

const Completion: React.FC<CompletionProps> = ({ question, isSimpleMode }) => {
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
        color="text.primary"
        variant="h6"
        fontWeight="bold"
        display="block"
      >
        {isSimpleMode ? convert(question.title, { wordwrap: false, }) : <HTML html={question.title} />}
      </Typography>
      <Typography
        sx={{
          mt: 2,
        }}
      >
        {isSimpleMode
          ? convert(question.stdAnswer.replace(/##%_YZPRLFH_%##/g, "或者"), { wordwrap: false, })
          : question.stdAnswer.replace(/##%_YZPRLFH_%##/g, "或者").replace(/<[^>]+>/g, "")}
      </Typography>
    </Box>
  );
};

export default Completion;
