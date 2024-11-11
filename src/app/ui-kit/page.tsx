"use client";

import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Cross from "../../../public/icons/cross.svg";
import Favourite from "../../../public/icons/favourite.svg";
import { useState } from "react";

export default function UiKit() {
  const [selectedChip, setSelectedChip] = useState<number>(null);

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
      <Typography variant="caption1">Caption1</Typography>
      <Typography variant="caption2">Caption2</Typography>
      <Typography variant="overline1">Overline 1</Typography>
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
            onClick={() => handleChipClick(index)} // Выбор чипа
            onDelete={handleDeleteChip}
            deleteIcon={selectedChip === index ? <Cross /> : <></>}
          />
        ))}
      </Stack>
    </Box>
  );
}
