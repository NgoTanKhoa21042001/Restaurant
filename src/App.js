import "./App.scss";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurel,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurel />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
