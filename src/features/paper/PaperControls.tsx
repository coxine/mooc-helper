import * as React from "react";
import { Box, Button, FormControlLabel, Switch } from "@mui/material";

interface PaperControlsProps {
  isAnswerVisible: boolean;
  isSimpleMode: boolean;
  onAnswerVisibleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSimpleModeToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPrint: () => void;
}

export default function PaperControls({
  isAnswerVisible,
  isSimpleMode,
  onAnswerVisibleToggle,
  onSimpleModeToggle,
  onPrint,
}: PaperControlsProps) {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2} mt={2}>
      <FormControlLabel
        control={<Switch checked={isAnswerVisible} onChange={onAnswerVisibleToggle} />}
        label="显示答案"
      />
      <FormControlLabel
        control={<Switch checked={isSimpleMode} onChange={onSimpleModeToggle} />}
        label="简洁模式（格式混乱、打印时使用）"
      />
      <Button variant="contained" color="primary" onClick={onPrint}>
        打印 / 导出 PDF
      </Button>
    </Box>
  );
}