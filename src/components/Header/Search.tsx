"use client";

import React, { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Image1 from "../../../public/icons/image-1.svg";
import Cross from "../../../public/icons/cross.svg";
import { getTypography } from "@/data/styles/typography";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
];

const popupIconStyles = { width: 24, height: 24 };

const typography = getTypography();

const Search: FC = () => {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // todo here! work on search styles and header

  return (
    <Autocomplete
      sx={{
        "& .MuiAutocomplete-popupIndicator": {
          "&..MuiAutocomplete-popupIndicatorOpen": {
            scale: 1,
          },
        },
      }}
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      popupIcon={<Image1 style={popupIconStyles} />}
      clearIcon={<Cross style={{ width: 24, height: 24 }} />}
      renderInput={(params) => (
        <TextField
          sx={{
            // padding: 2,
            width: 583,
            borderRadius: "4px",
            bgcolor: "grey.400",
            ...typography.button,
            "& fieldset": { border: "none" },
          }}
          placeholder={"Search"}
          {...params}
        />
      )}
    />
  );
};

export default Search;
