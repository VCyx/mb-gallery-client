"use client";

import React, { FC, useState } from "react";
import { Avatar, Badge, Box, Button } from "@mui/material";
import FavoriteSvg from "../../../public/icons/favourite.svg";
import NotificationSvg from "../../../public/icons/notification.svg";
import AccountIcon from "../../../public/icons/account.svg";

const LoginActionsBlock: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return isLoggedIn ? (
    <Box
      sx={{
        marginLeft: "92px",
        marginRight: "auto",

        display: "flex",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <Button
        sx={{
          width: 200,
        }}
        variant="contained"
        size="large"
        onClick={handleLogin}
      >
        Submit a Design
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <FavoriteSvg
          style={{
            width: 24,
            height: 24,
          }}
        />
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              padding: "4px",
              width: 18,
              height: 18,
              top: 6,
              right: 3,
            },
          }}
          badgeContent={10}
          color="error"
        >
          <NotificationSvg
            style={{
              width: 24,
              height: 24,
            }}
          />
        </Badge>

        <Avatar
          sx={{
            width: 40,
            height: 40,
          }}
          alt="Remy Sharp"
        >
          <AccountIcon style={{ width: 40, height: 40 }} />
        </Avatar>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        marginLeft: "64px",
        marginRight: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Button
        sx={{
          px: "17.5px",
          maxWidth: 85,
        }}
        size="large"
        variant="outlined"
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button
        sx={{
          px: "11.5px",
          maxWidth: 85,
        }}
        size="large"
        variant="contained"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default LoginActionsBlock;
