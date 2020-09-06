import React, {useState, useEffect} from 'react';
import Logo from'./IconeTwitch.svg'
import search from'./Search.svg'
import menuIco from'./Menu.svg'
import {Link} from 'react-router-dom'
import croix from './Croix.svg'



export default function Header() {

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');
    

    useEffect(() => {


        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {

        if(menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }


    return (
        <div>
            <nav className="HeaderTop">
                {(menu || ! smallScreen) && (
                 <ul className="ListeMenu">
                     <li onClick={hideMenu} className="LiensNav">
                         <Link className="lien" to="/">
                         <img src={Logo} alt="logo twitch" className="Logo"/>
                         </Link>
                     </li>
                     <li onClick={hideMenu} className="LiensNav">
                         <Link className="lien" to="/">
                         Top Games
                         </Link>
                     </li>
                     <li onClick={hideMenu} className="LiensNav">
                         <Link className="lien" to="/topstreams">
                         Top Streams
                         </Link>
                     </li>

                     <li className="LiensNav">
                         <form className="FormSubmit" onSubmit={handleSubmit}>

                         
                             <input required value={searchInput} onChange={(e) => handleKeyPress(e)} type="text" className="InputRecherche"/>

                         <Link
                        className="lien"
                        to={{
                            pathname: `/resultat/${searchInput}`
                        }}
                        > 
                             <button type="submit">
                                <img src={search} alt="icone loupe" className="LogoLoupe" />
                             </button>
                         </Link> 
                        
                         </form>
                     </li>
                </ul>
        )}
            </nav>
            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco" />
            </div>

        </div>
    )
}
