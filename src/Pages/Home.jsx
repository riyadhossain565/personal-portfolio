import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
        </div>
    );
};

export default Home;