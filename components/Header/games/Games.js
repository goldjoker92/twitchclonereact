import React, {useState, useEffect} from 'react';
import api from '../../../api';
import {Link} from 'react-router-dom';

export default function Games() {

    const [games, setGames] = useState([])

    useEffect(() => {
        const fetcData = async ()=> {

            const result = await api.get("https://api.twitch.tv/helix/games/top");
            //console.log(result);

            let dataArray = result.data.data
            
            
            let finalArray = dataArray.map(game =>{
                let newUrl = game.box_art_url
                .replace("{width}", "250")
                .replace("{height}", "300");
            game.box_art_url = newUrl;
            return game;
            });

            setGames(finalArray);
           // console.log(Games);

        }



    fetcData();

    }, [])   

    return (
        <div>

           <h1 className="TitresGames">Jeux les plus populaires</h1>

                <div className="FlexAccueil">

                    {games.map((game, index) => (

                        <div key={index} className ="cardGames">

                            <img src={game.box_art_url} alt="jeu profile pic" className="imgCard"/>

                            <div className="cardBodyGames">

                                <h5 className="titreBodyGames">{game.name}</h5>

                                <Link
                                className="lien"
                                to={{
                                    pathname: "game/" + game.name,
                                    state: {
                                        gameID: game.id
                                    }
                                }}
                                >
                                <div className="btnCard">See{game.name}</div>
                                </Link>
                                
                            </div>
                        </div>
                    ))}

                </div>
            
        </div>
    )
}


