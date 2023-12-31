import './DescriptionStyles.css'
import DescImg from '../../assets/tugu.webp'
import DescImg2 from '../../assets/prambanan.jpg'
import DescriptionData from './DescriptionData'


const Description= () =>{
    return(
        <div>
            <DescriptionData
            className = "description"
            Title="Rental Mobil Jogja Berkah Barokah"
            text="Rental mobil berkah barokah kami menyediakan sarana transportasi untuk memudahkan perjalanan anda. Kami menyediakan berbagai jenis mobil untuk kebutuhan anda.
            segera pilih mobil yang anda inginkan dan rasakan pengalaman rental mobil berkah barokah di. dengan harga yang murah dan sudah termasuk supir dapat memperlancar perjalanan anda"
            img={DescImg}
            img2={DescImg2}
            />
        </div>
    )
}

export default Description;