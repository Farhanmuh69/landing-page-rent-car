import './SkillsStyles.css'
import Card from '../Card/Card'
// import React from '../../assets/React.webp'
import catalogData from './CatalogData';


function cardCatalog() {
    return (
        <div className="catalog-container">
            <h1>Catalog</h1>
            <div className="catalog-card-container">
                {catalogData.map((item) => (
                    <Card key={item.id} img={item.img} heading={item.heading} capacity={item.capacity} text={item.text} />
                ))}
            </div>
        </div>
    );
}

export default cardCatalog;