import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowDown from "../../../public/icons/arrow-down.svg";
import Search from "@/components/Header/Search";
import Logo from "@/components/Header/Logo";
import Link from "next/link";
import { appRoutes } from "@/data/routes";

const Header: FC = () => {
  return (
    <Container
      sx={{
        padding: 3,

        display: "flex",
        alignItems: "center",
      }}
      component={"header"}
    >
      <Logo />

      <Link href={appRoutes.mainPage}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Typography variant="subtitle2">Explore</Typography>
          <ArrowDown style={{ width: 16, height: 16 }} />
        </Box>
      </Link>

      <Link href={appRoutes.mainPage}>
        <Typography variant="subtitle2">Archive</Typography>
      </Link>

      <Search />
    </Container>
  );
};

export default Header;
