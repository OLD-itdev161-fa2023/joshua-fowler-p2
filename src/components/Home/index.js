import {useState } from 'react'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-j.png';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['J','o','s','h','u','a',' ','F','o','w','l','e','r']
    const statarray = ['A','N','D',' ','T','H','I','S',' ','I','S',' ','M','Y',' ','R','E','A','C','T','J','S',' ','P','O','R','T','F','O','L','I','O']

    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>

                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

                <br/> 

                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer" />

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />

                <AnimatedLetters letterClass={letterClass}
                strArray={statarray}
                idx={3}/>
                </h1>
                <h2> Mobile Application Developer /  IT/Handy Man / Carpenter</h2>
                <Link to="/contact" className='flat-bottom'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home