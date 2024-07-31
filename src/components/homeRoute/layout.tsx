import FooterComponent from "../footer";
import NavbarComponent from "../navbar";
import MainComponent from "./main";

const HomeLayout = () => {
  return (
    <>
      <NavbarComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
