import React, { FC, ReactElement } from "react";
import { Box, Typography, Link } from "@mui/material";

export type FooterLinkItem = {
  name: string;
  link: string;
  icon?: ReactElement;
};

type Props = {
  title: string;
  items: FooterLinkItem[];
};

const FooterLinksColumns: FC<Props> = ({ title, items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography mb={3} variant="subtitle1">
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {items.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.name}
              target={"_blank"}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {item.icon}
              <Typography variant="body1">{item.name}</Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default FooterLinksColumns;
