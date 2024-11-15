import { Container } from "@mui/material";
import AppRedirectButton from "@/components/AppRedirectButton";
import { appRoutes } from "@/data/routes";

export default function Home() {
  return (
    <Container component={"section"}>
      <AppRedirectButton route={appRoutes.uiKit}></AppRedirectButton>
    </Container>
  );
}
