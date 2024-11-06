"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

type Props = {
  route: string;
};

const AppRedirectButton: FC<Props> = ({ route }) => {
  const { push } = useRouter();

  return (
    <Button variant="contained" onClick={() => push(route)}>
      Ui kit
    </Button>
  );
};

export default AppRedirectButton;
