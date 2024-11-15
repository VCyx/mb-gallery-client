"use client";

import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/data/routes";

const Logo: FC = () => {
  const { push } = useRouter();

  return (
    <Typography
      sx={{ width: 110, cursor: "pointer" }}
      variant="h1"
      onClick={() => push(appRoutes.mainPage)}
    >
      Logo
    </Typography>
  );
};

export default Logo;
