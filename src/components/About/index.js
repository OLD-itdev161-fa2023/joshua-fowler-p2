import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    return(
        <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters
                strArray={['A','B','O','U','T',' ','M','E']}
                idx={15}/>
            </h1>
            <h2>Personal History</h2>
            <p>
                - 4+ years of experience with woodworking, along with personal and business projects, along with familiarity with miter saw, table saw, sanding tools, chisels, and staining/ painting
            </p>
            <p>
                - 3+ years of automotive work for personal and business purposes, experience includes oil changes, battery and radiator replacements, tune-ups, brake and suspension replacement, exhaust repair and replacement
            </p>
            <h2> Work History</h2>
            <p>
                - 4+ years of pc and networking repair/ installations, experience includes pc building and upgrades, router replacement and configuration
            </p>
            <p>
                - 6+ years of work experience ranging from physical to tedious to thought provoking and planning, this include semi truck loading, production machine operator, and IT contracting for MPS
            </p>
        </div>
        
    </div>
    <Loader type="pacman"/>
    </>
)
}


export default About