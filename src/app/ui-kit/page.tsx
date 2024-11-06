import { Box, Button, Typography } from "@mui/material";

export default function UiKit() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button">Button1</Typography>
      <br />
      <Typography variant="button2">Button2</Typography>
      <br />
      <Typography variant="caption1">Caption1</Typography>
      <br />
      <Typography variant="caption2">Caption2</Typography>
      <br />
      <Typography variant="overline1">Overline 1</Typography>
      <br />
      <Typography variant="overline2">Overline 2</Typography>

      <br />
      <br />

      <Button
        sx={{
          width: 280,
        }}
        variant="contained"
      >
        Contained button
      </Button>

      <Button
        sx={{
          width: 280,
        }}
        variant="contained"
        disabled
      >
        Disabled contained button
      </Button>

      <br />

      <Button
        sx={{
          width: 280,
        }}
        variant="outlined"
      >
        Outlined button
      </Button>
      <Button
        sx={{
          width: 280,
        }}
        variant="outlined"
        disabled
      >
        Disabled outlined button
      </Button>
    </Box>
  );
}
