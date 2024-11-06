import { Button, Typography } from "@mui/material";

export default function UiKit() {
  return (
    <div>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button1">Button1</Typography>
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

      <Button variant="contained">Test button</Button>
    </div>
  );
}
