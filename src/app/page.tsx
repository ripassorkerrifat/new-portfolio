import Header from "../components/header";
import Banner from "../components/banner";
import AboutMe from "../components/about-me";
import ExperienceEducationTabs from "../components/ExperienceEducationTabs";
import Skills from "../components/skills";
import Projects from "../components/projects";
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
                <Skills />
                <ExperienceEducationTabs />
                <AboutMe />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
