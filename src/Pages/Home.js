import Description from "../Components/Description/Description";
// import Footer from "../Components/Footer/Footer";
import Hero from "../Components/HeroSection/Hero";
import CardCatalog from "../Components/Catalog/CardCatalog";
import HeroImg from '../assets/BGHero.png';
import TermsUse from "../Components/TermsAndUse/TermsAndUse";

function Home (){
    return(
        <>
            <div>
                <Hero
                cName="hero"
                HeroImg={HeroImg} 
                title="Rental Mobil Jogja Berkah Barokah"
                url="/about"
                btnClass="show"
                buttonText="Hubungi Kami"
                />
                <CardCatalog/>
                <Description/>
                <TermsUse/>
            </div>
        </>
    )
}

export default Home;
