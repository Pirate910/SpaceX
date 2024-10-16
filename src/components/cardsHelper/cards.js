import CardSelector from '../cardSelector/cardSelector';
import { cardList } from './../../helpers/cardsList';
import favoritesBtn from './../../img/header-like-btn.svg';
import { useState, useEffect, useRef } from 'react';

const Cards = () => {

    const [currentPage, setCurrentPage] = useState(0)
    const [cardsPerPage, setCardsPerPage] = useState(3)

    const lastPostIndex = (currentPage + 1) * cardsPerPage;
    const firstPostIndex = lastPostIndex - cardsPerPage;
  
    // projects.slice(firstPostIndex, lastPostIndex)
    const currentCards = cardList.slice(firstPostIndex, lastPostIndex);

    return ( 
        <>
            <ul className='card-navigation-ul'>

                {currentCards.map((massive, index) => (
                    <li className="card-navigation-el" key={index}>
                        <div className="card-el-image-block">
                            <img alt="spaceShip" className="card-image" src={massive.img} />
                        </div>
                        <div className="card-el-block-text">
                            <h1 className="card-title">{massive.title}</h1>
                            <p className="card-text">{massive.text}</p>
                        </div>
                        <div className="card-el-btn-block">
                            <button className="card-btn-buy" type="button">
                                Buy
                            </button>
                            <button className="card-btn-favorite" type="button">
                                <img className='card-btn-favorite-btn' alt="favoritesBtn" src={favoritesBtn} />
                            </button>
                        </div>
                    </li>
                ))}

            </ul>

            <CardSelector 
            
            cardListTotal = {cardList.length}
            cardsPerPage = {cardsPerPage}
            setCurrentPage={setCurrentPage}

            
            />

        </>
     );
}
 
export default Cards