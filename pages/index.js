import Layout from "../components/Layout";
import Container from "../components/Container"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Mostpicked from "../components/Mostpicked"
import Backyard from "../components/Backyard"
import Testimoni from "../components/Testimoni"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <Layout title="Home">
      
      <Container>

        <Navbar />

        <Hero />

        <Mostpicked />

        <Backyard />

        <Testimoni />

        <Footer />

      </Container>

    </Layout>
  );
}