import profilePicture from './maxresdefault.jpg';
import mailIcon from './mail-icon.png';
import phoneIcon from './phone.png';

export default function Contact(props){
    return (
        <>
        <div id={'contact-wall'}>
            <div id={'contact-main-container'}>
                <div id={'container-profile-picture-contact'}>
                    <img id={'profile-picture-contact'} src={props.img} alt={'profile picture'}/>
                </div>
                <div id={'info-contact-container'}>
                    <div id={'main-info-contact'}>
                        <p id={'name-contact'}>{props.name}</p>
                    </div>
                    <div id={'details-info-contact'}>

                        <div>
                            <img src={phoneIcon} alt={'phone icon'} width={12}/>
                            <span className={'icons-contact'} >(+34) {props.phone}</span>
                        </div>

                        <div>
                            <img src={mailIcon} alt={'email icon'} width={15}/>
                            <span className={'icons-contact'} >{props.email}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}