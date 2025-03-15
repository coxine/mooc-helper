import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import SingleChoice from "./questions/SingleChoice";
import MultipleChoice from "./questions/MultipleChoice";
import Completion from "./questions/Completion";
import { Button, FormControlLabel, Switch } from "@mui/material";

export default function Paper({ mocPaperDto }: { mocPaperDto: MocPaperDto }) {
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSimpleMode(event.target.checked);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2} mt={2}>
        <FormControlLabel
          control={<Switch checked={isSimpleMode} onChange={handleToggle} />}
          label="简洁模式"
        />
      </Box>
      <Box>
        {mocPaperDto.objectiveQList.map((objectiveQ) => {
          switch (objectiveQ.type) {
            case 1:
            case 4:
              return <SingleChoice key={objectiveQ.id} question={objectiveQ} isSimpleMode={isSimpleMode} />;
            case 2:
              return <MultipleChoice key={objectiveQ.id} question={objectiveQ} isSimpleMode={isSimpleMode} />;
            case 3:
              return <Completion key={objectiveQ.id} question={objectiveQ} isSimpleMode={isSimpleMode} />;
            default:
              return null;
          }
        })}
      </Box>
    </Box>
  );
}