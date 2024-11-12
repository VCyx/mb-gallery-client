"use client";

import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Favourite from "../../../public/icons/favourite.svg";
import { Fragment, useState } from "react";
import Chip from "@/components/Chip/Chip";

export default function UiKit() {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const handleDeleteChip = () => {
    console.info("You clicked the delete icon.");
  };

  const handleChipClick = (index: number) => {
    setSelectedChip(index === selectedChip ? null : index);
  };

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
      <Typography variant="button2">Button2</Typography>
      <Typography variant="caption">Caption1</Typography>
      <Typography variant="caption2">Caption2</Typography>
      <Typography variant="overline">Overline 1</Typography>
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

      <br />

      <Stack direction="row" spacing={1}>
        {["Accessories", "Chip 2", "Chip 3"].map((label, index) => (
          <Chip
            key={label}
            label={label}
            variant="outlined"
            icon={index === 0 ? <Favourite /> : <></>}
            isActive={index === selectedChip}
            onClick={() => handleChipClick(index)}
            onDelete={handleDeleteChip}
          />
        ))}
      </Stack>

      <Checkbox size="small" color="primary" />
      <Checkbox size="small" color="secondary" />

      <Switch />

      <Autocomplete
        disablePortal
        options={["USA", "Ukraine", "Option 3", "Option 4", "Option 5"]}
        sx={{ width: 320 }}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Country/Region" />
        )}
      />
    </Box>
  );
}
