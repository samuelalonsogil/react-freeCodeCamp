import mailIcon from './mail-icon.png';
import phoneIcon from './phone.png';

export default function Contact({img,name,phone,email}){
    return (
        <>
        <div id={'contact-wall'}>
            <div id={'contact-main-container'}>
                <div id={'container-profile-picture-contact'}>
                    <img id={'profile-picture-contact'} src={img} alt={'profile'}/>
                </div>
                <div id={'info-contact-container'}>
                    <div id={'main-info-contact'}>
                        <p id={'name-contact'}>{name}</p>
                    </div>
                    <div id={'details-info-contact'}>

                        <div>
                            <img src={phoneIcon} alt={'phone icon'} width={12}/>
                            <span className={'icons-contact'} >(+34) {phone}</span>
                        </div>

                        <div>
                            <img src={mailIcon} alt={'email icon'} width={15}/>
                            <span className={'icons-contact'} >{email}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}