import React, {useState, useEffect} from 'react'
import api from '../../../../api'
import {Link, useParams} from"react-router-dom"
import Erreurs from"../../Erreurs/Erreurs"

export default function Resultat() {


    let {slug} = useParams();

    const [result, setResult] = useState(true);
    const [streamerInfo, setStreamerInfo] = useState([]);

    let cleanSearch = slug.replace(/ /g,'');

    useEffect(() =>{

        const fetchData = async () => {
            const result =await api.get(`https://api.twitch.tv/helix/users?login=${cleanSearch}`);
            console.log(result);

            if(result.data.data.length === 0) {
                setResult(false);
            }else{
                setStreamerInfo(result.data.data);

            }   
        }
        fetchData()


    }, [])
   

    return (

        result?

        <div> 
            <div className="containerDecaleResultats">
            
                <h4>Resultats de recherche :</h4>

                {streamerInfo.map((stream, index) => (

                    <div key={index} className="carteResultats">
                        <img src={stream.profile_image_url} alt="resultat profile" className="imgCarte" />
                        <div className="cardBodyResults">
                        <h5 className ="titreCarteStream">{stream.display_name}</h5>
                        <div className="txtResult">
                            {stream.description}
                        </div>
                        <Link
                        className="lien"
                        to={{
                            pathname:`/live/${stream.login}`
                        }}
                        >

                        <div className="btnCard btnResult">{stream.display_name}</div>
                        
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
         :
        <Erreurs />

    )
}
