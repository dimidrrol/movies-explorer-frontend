import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from "react";

function Main(props) {
    return (
        <>
            <Header
                onHamburgerClick={props.onHamburgerClick}
                navigateMain={props.navigateMain}
                navigateMovies={props.navigateMovies}
                navigateSavedMovies={props.navigateSavedMovies}
                navigateProfile={props.navigateProfile}
                navigateLogin={props.navigateLogin}
                navigateRegister={props.navigateRegister}
                loggedIn={props.loggedIn}
            />
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;