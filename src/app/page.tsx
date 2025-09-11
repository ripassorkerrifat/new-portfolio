import Header from "../components/header";
import Banner from "../components/banner";
import AboutMe from "../components/about-me";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Education from "../components/education";
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
                <Experience />
                <Skills />
                <AboutMe />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
