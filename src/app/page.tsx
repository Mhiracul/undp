import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Testimonials from "./component/Testimonials";
import WeDo from "./component/WeDo";
import TypeWriter from "../app/api/TypeWriter";
import Job from "./component/Job";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Service />
      <WeDo />
      <Testimonials />
      <Job />

      <Footer />
    </main>
  );
}
