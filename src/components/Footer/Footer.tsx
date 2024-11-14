import React, { FC } from "react";
import { Container } from "@mui/material";
import Logo from "@/components/Header/Logo";
import Image from "next/image";
import maestroBathLogo from "../../../public/images/maestro-bath.png";
import { foreignLinks } from "@/data/foreignLinks";
import FooterLinksColumns, {
  FooterLinkItem,
} from "@/components/Footer/FooterLinksColumns";
import TwitterIcon from "../../../public/icons/twitter.svg";
import FacebookIcon from "../../../public/icons/facebook.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import PinterestIcon from "../../../public/icons/pinterest.svg";

const companyItems: FooterLinkItem[] = [
  {
    name: "About MB",
    link: "",
  },
  {
    name: "Privacy",
    link: "",
  },
  {
    name: "Terms",
    link: "",
  },
  {
    name: "Cookie Policy",
    link: "",
  },
];

const businessItems: FooterLinkItem[] = [
  {
    name: "For Designers",
    link: "",
  },
  {
    name: "For Vendors",
    link: "",
  },
  {
    name: "For Consumers",
    link: "",
  },
];

const getHelpItems: FooterLinkItem[] = [
  {
    name: "Support",
    link: "",
  },
  {
    name: "Contacts",
    link: "",
  },
];

const connectItems: FooterLinkItem[] = [
  {
    name: "Twitter",
    link: "",
    icon: <TwitterIcon style={{ width: 24, height: 24 }} />,
  },
  {
    name: "Facebook",
    link: "",
    icon: <FacebookIcon style={{ width: 24, height: 24 }} />,
  },
  {
    name: "Instagram",
    link: "",
    icon: <InstagramIcon style={{ width: 24, height: 24 }} />,
  },
  {
    name: "Pinterest",
    link: "",
    icon: <PinterestIcon style={{ width: 24, height: 24 }} />,
  },
];

const Footer: FC = () => {
  return (
    <Container
      sx={{
        mt: "auto",
        padding: 5,

        display: "flex",
        justifyContent: "space-between",
      }}
      component={"footer"}
    >
      <Logo />

      <FooterLinksColumns title="Company" items={companyItems} />
      <FooterLinksColumns title="Business" items={businessItems} />
      <FooterLinksColumns title="Get help" items={getHelpItems} />
      <FooterLinksColumns title="Connect" items={connectItems} />

      <a href={foreignLinks.maestroBath} target={"_blank"}>
        <Image src={maestroBathLogo} alt={"Maestro Bath"} />
      </a>
    </Container>
  );
};

export default Footer;
