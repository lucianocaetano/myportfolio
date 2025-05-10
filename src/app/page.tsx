import Footer from "@/components/footer";
import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Contact from "@/components/home/contact";
import MoreSection from "@/components/home/more-section";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id="home">
        <Banner/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <MoreSection/>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}
