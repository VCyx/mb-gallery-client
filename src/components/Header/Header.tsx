import React, { FC } from "react";
import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import ArrowDown from "../../../public/icons/arrow-down.svg";
import Search from "@/components/Header/Search";
import Logo from "@/components/Header/Logo";
import Link from "next/link";
import { appRoutes } from "@/data/routes";
import LoginActionsBlock from "@/components/Header/LoginActionsBlock";
import { foreignLinks } from "@/data/foreignLinks";
import Image from "next/image";
import maestroBathLogo from "../../../public/images/maestro-bath.png";

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

      <Box
        sx={{
          marginLeft: "52px",
          marginRight: "78px",

          display: "flex",
          alignItems: "center",
          gap: "48px",
        }}
      >
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

        <Link href={appRoutes.mainPage}>
          <MuiLink variant="subtitle2">Archive</MuiLink>
        </Link>
      </Box>

      <Search />

      <LoginActionsBlock />

      <Link
        sx={{
          marginRight: "auto",
          display: "flex",
        }}
        href={foreignLinks.maestroBath}
        target={"_blank"}
      >
        <Image
          src={maestroBathLogo}
          alt={"Maestro Bath"}
          width={72.8}
          height={56}
        />
      </Link>
    </Container>
  );
};

export default Header;
