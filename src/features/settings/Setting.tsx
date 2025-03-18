import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeToggleButton from "./ModeToggleButton";
import MobToken from "./MobToken";
import { styled } from "@mui/material/styles";
import { Alert, Link } from "@mui/material";

const Heading = styled(Typography)(({ theme }) => ({
  margin: "20px 0 10px",
  color: theme.palette.grey[600],
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(11),
  textTransform: "uppercase",
  letterSpacing: ".08rem",
}));

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  const onClose = () => setOpen(false);

  const onOpen = () => setOpen(true);

  return (
    <>
      <Tooltip title="设置" enterDelay={300}>
        <IconButton color="primary" disableTouchRipple onClick={onOpen}>
          <SettingsOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        onClose={onClose}
        open={open}
        PaperProps={{
          elevation: 0,
          sx: {
            width: { xs: 310, sm: 360 },
            borderRadius: "10px 0px 0px 10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="body1" fontWeight="500">
            设置
          </Typography>
          <IconButton color="inherit" onClick={onClose} edge="end">
            <CloseIcon color="primary" fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ pl: 2, pr: 2 }}>
          <Heading gutterBottom id="settings-mode">
            主题
          </Heading>
          <ModeToggleButton />
          <Heading gutterBottom id="settings-mode">
            如何获取 mob-token?
          </Heading>
          <Alert severity="info">
            请在手机上开启抓包应用，随后登录到慕课 APP，在请求中即可找到对应账户的 mob-token。
            <br />
            常见抓包应用：<Link href="https://github.com/emanuele-f/PCAPdroid">PCAPDroid</Link>、<Link href="https://reqable.com/zh-CN/android/">Reqable</Link>（原 HttpCanary，现已闭源）、Fiddler、Charles等
          </Alert>
          <Heading gutterBottom id="settings-mode">
            mob-token
          </Heading>
          <MobToken />
          <Heading gutterBottom id="settings-mode">
            注意！
          </Heading>
          <Alert severity="error">
            查询答案会<b>开启一次测验</b>，请确认查询的内容是否有答题时间和次数的限制！
            <br />
            如果有类似限制，请<b>慎重查询答案</b>，以免发生因答题次数耗尽无法答题<b>获得零分</b>的悲剧！
          </Alert>
        </Box>
      </Drawer>
    </>
  );
}
