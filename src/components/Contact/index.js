import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const [letterClass] = useState('text-animation')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
            .sendForm('gmail', 'service_lk1hlsj', form.current, 'service_lk1hlsj')
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }
            )
        }

    return(
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C','O','N','T','A','C','T',' ','M','E']}
                        idx={15}/>
                    </h1>
                    <p>
                    Please send me a message if you need to get into contact with me regarding Automotive work, Wood based projects, or IT questions.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit ={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input 
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required/>
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required/>
                                    </li>
                                <li>
                                    <textarea 
                                    placeholder="Message"
                                    name="message"
                                    required></textarea>
                                </li>
                                <li>
                                    <input type ="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>

    )


}

export default Contact