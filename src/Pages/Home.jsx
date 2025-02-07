import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div id='home'>
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;