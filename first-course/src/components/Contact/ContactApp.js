import Contact from "./Contact";
import image01 from './maxresdefault.jpg';
import image02 from './ben.jpg';
import image03 from './gojo.PNG';
import image04 from './zoro.jpg';

export default function ContactApp() {
    return (
        <>
            <div id={'container-main-contact-app'}>
                <Contact 
                    img = {image01}
                    name = 'Botitas'
                    phone = '676890453'
                    email = 'botitas@gail.com'
                />
                <Contact
                    img = {image02}
                    name = 'Gato'
                    phone = '676890453'
                    email = 'botitas@gail.com'
                />
                <Contact
                    img = {image03}
                    name = 'Perro'
                    phone = '676890453'
                    email = 'botitas@gail.com'
                />
                <Contact
                    img = {image04}
                    name = 'Ordfenador'
                    phone = '676890453'
                    email = 'botitas@gail.com'
                />

            </div>
        </>
    )
}