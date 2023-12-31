import './FooterStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WaLink, InstagramLink, TikTokLink, emailLink } from '../socialLink';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <div className='head'>
                    <h1>Berkah Barokah Rental Mobil</h1>
                    <p>Murah Terpercaya</p>
                </div>
                <div>
                    <a href="https://www.facebook.com">
                        <i><FontAwesomeIcon icon={faFacebookSquare} /></i>
                    </a>
                    <a href={TikTokLink}>
                        <i><FontAwesomeIcon icon={faTiktok} /></i>
                    </a>
                    <a href={InstagramLink}>
                        <i><FontAwesomeIcon icon={faInstagramSquare} /></i>
                    </a>
                    <a href={WaLink}>
                        <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                    </a>
                </div>
            </div>

            <div className='bottom'>
                <div className='addres'>
                    <h4>Alamat</h4>
                    <a href="https://www.google.com/maps/place/7%C2%B048'14.1%22S+110%C2%B021'35.8%22E/@-7.8039073,110.3573581,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.8039073!4d110.359933?hl=id&entry=ttu">Notoprajan, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55262</a>
                    
                </div>
                
                <div>
                    <h4>Informasi</h4>
                    <a href={WaLink}>Whats App admin : 0821-4334-4252</a>
                    <a href={WaLink}>Whats App admin : 0821-4334-4252 </a>
                    <a href={emailLink}>Email</a>
                    
                </div>
                <div>
                    <h4>Social</h4>
                    <a href="/">Faceboook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Tiktok</a>
                    <a href="/">WhatsApp</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;