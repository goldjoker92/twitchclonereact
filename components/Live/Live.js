import React, {useState, useEffect} from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import {useParams} from 'react-router-dom';
import api from "../../api";


export default function Live(){

    let {slug} = useParams();


    const [infoStream, setInfoStream] = useState([]);
    const [infoGame, setInfoGame] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const result = await api.get(`https://api.twitch.tv/helix/streams?user_login=${slug}`)
            console.log(result);

            if(result.data.data.length === 0){
                setInfoStream(false)
            }else{

                
                let gameID = result.data.data.map(gameId => {
                    return gameId.game_id
                })
                
                const resultNomGame = await api.get(`https://api.twitch.tv/helix/games?id=${gameID}`)
                console.log(resultNomGame);
                
                let nomJeu = resultNomGame.data.data.map(gameName => {
                    return gameName.name;
                })
                console.log(nomJeu)
                
                setInfoGame(nomJeu);
                setInfoStream(result.data.data[0]);
            }
        }
            
        fetchData();


    }, [])

    
    return (

        infoStream ?

        <div className="containerDecale">
            <ReactTwitchEmbedVideo height="754" width="100%" channel={slug} />
            <div className="contInfo">
                <div className="titreStream"> {infoStream.title}</div>
                <div className="Viewer">Viewers: {infoStream.viewer_count}</div>
                <div className="infogame">Streamer: {infoStream.user_name}, &nbsp; langue : {infoStream.language}</div>
            </div>
        <div className="nomJeu">Jeu : {infoGame}</div>
        </div>

:

        <div className="containerDecale">
            <ReactTwitchEmbedVideo height="754" width="100%" channel={slug} />
            <div className="contInfo">
                <div className="titreStream">Le streamer est offline !</div>
            </div>

        </div> 

   ) 
} 

