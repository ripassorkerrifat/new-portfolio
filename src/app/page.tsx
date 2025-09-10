import Header from "../components/header";
import Banner from "../components/banner";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Stats from "../components/stats";
import Education from "../components/education";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section id="home">
                    <Banner />
                </section>
                <Projects />
                <About />
                <Skills />
                <Stats />
                <Education />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
