import React, { FC } from "react";
import Cross from "../../../public/icons/cross.svg";
import { Chip as MuiChip, ChipProps } from "@mui/material";

type Props = { isActive?: boolean } & ChipProps;

const Chip: FC<Props> = ({ isActive, ...rest }) => {
  return (
    <MuiChip
      deleteIcon={isActive ? <Cross /> : <></>}
      disableRipple
      {...rest}
    />
  );
};

export default Chip;
