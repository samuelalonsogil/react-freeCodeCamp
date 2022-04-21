import picture from '../raw/default-avatar.jpg';
import twitter from '../raw/twitter-icon.png';
import facebook from '../raw/facebook-icon.png';
import github from '../raw/github-icon.png';
import instagram from '../raw/instagram-icon.png';

export default function BusinessCard() {
    return (
        <>
            <div id={'main-container-card'}>
                <div id={'container-card'}>
                    <div id={'info'}>
                        <img id={'profile-picture'} src={picture} alt={'profile picture'}/>

                        <div id={'personal-data'}>
                            <p id={'personal-name'}>Samuel Alonso Gil</p>
                            <p id={'personal-title'}>Frontend Developer</p>
                            <p id={'personal-website'}>samuelalonsogil.website</p>
                        </div>

                        <div id={'buttons'}>
                            <button id={'email'}><a href={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'}>Email</a></button>
                            <button id={'github'}><a href={'https://github.com/samuelalonsogil'}>Github</a></button>
                        </div>

                        <p>About</p>
                        <blockquote id={'about-quote'}>
                            Titled in Multiplatform Develop Applications with a media of 7,5 also
                            working on a React project right now and creating a business card with all the information
                            i can think about. Born in Moaña and working in Vigo.
                        </blockquote>

                        <p>Interests</p>
                        <blockquote id={'interests-quote'}>
                            I love working with React and everything related to it. I also love videogames and sports.
                            One of my favourite games is Elden Ring which i am currently playing.
                        </blockquote>
                    </div>

                    <footer>
                        <img className={'social-media'} src={twitter} alt={'twitter lik icon'}/>
                        <img className={'social-media'} src={instagram} alt={'instagram lik icon'}/>
                        <img className={'social-media'} src={facebook} alt={'facebook lik icon'}/>
                        <img className={'social-media'} src={github} alt={'github lik icon'}/>

                    </footer>
                </div>
            </div>
        </>
    )
}