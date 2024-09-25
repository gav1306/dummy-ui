import Footer from "./footer";
import Header from "./header";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
