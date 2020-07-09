import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import hobbies from "../../Assets/hobbies.jpg";

class Presentation extends Component {

    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div className="about-text">
                            <h2 style={{marginTop: "5px"}}>A propos de moi</h2>
                            <hr/>
                            <p>Je suis Développeur Intégrateur Web étudiant de 25 ans à la WebAc@démie by EPITECH Nancy.
                                C'est une formation sur 2 ans où j'étudie la théorie via différents projets individuel
                                ou en groupe au cours de notre première année. Au cours de ma seconde année, je dois
                                parfaire
                                mon cursus par le biais d'une alternance de 14 mois en contrat de professionnalisation.
                                Pendant ma première année, j'ai pus étudier et travailler sur plusieurs langages, en
                                particulier le PHP,
                                le Javascript et le ReactJs. J'ai pus approfondir le PHP en utilisant des Frameworks
                                comme Laravel et Symfony
                                au cours de mes projets, ainsi que d'y ajouter des technologies comme le Javascript,
                                l'Ajax et du JQuery pour plus de facilité
                                de conception. En ce qui concerne le ReactJs, j'ai pus travailler avec sur plusieurs
                                Frameworks comme Lumen, Slim, MDL, mais également,
                                du NodeJS, MangoDB, Express, Expo pour le côté serveur.
                            </p>
                        </div>
                    </Cell>
                </Grid>
                <div className="skill-body">
                    <Grid style={{backgroundColor: "#C4C4C3"}} className="skill-grid">
                        <Cell col={6}>
                            <h2 className="titre-technologie" style={{textAlign: "center"}}>Technologies</h2>
                            <button className="buttons">HTML5</button>
                            <button className="buttons">CSS</button>
                            <button className="buttons">PHP</button>
                            <button className="buttons">MySQL</button>
                            <button className="buttons">Laravel</button>
                            <button className="buttons">Symfony</button>
                            <button className="buttons">Javascript</button>
                            <button className="buttons">JQuery</button>
                            <button className="buttons">Ajax</button>
                            <button className="buttons">ReactJS</button>
                            <button className="buttons">ReactNative</button>
                            <button className="buttons">Express</button>
                            <button className="buttons">Expo</button>
                            <button className="buttons">NodeJS</button>
                            <button className="buttons">MongoDB</button>
                        </Cell>
                        <Cell col={6}>
                            <h2 className="titre">Compétences</h2>
                            <hr/>
                            <div className="skill-list">
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>Développement front-end
                                </li>
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>Développement back-end
                                </li>
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>
                                    Méthodologie de la conception web
                                </li>
                            </div>
                        </Cell>
                    </Grid>
                </div>
                <div className="hobbies">
                    <Grid className="hobbies-grid">
                        <Cell>
                            <img className="hobbies-image"
                                 src={hobbies}
                                 alt="hobbies_images"></img>
                            <div className="hobbies-text">
                                <h2>Hobbies & passions</h2>
                                <hr/>
                                <p>J'aime beacuoup la musique, je joue de la guitare, et éléctrique. J'aime également
                                    beacuoup le sport,
                                    je pratique le Kung Fu depuis quelques années déjà, ainsi que le Street Workout,
                                    mais également autres
                                    sport diverses comme la course à pied ou le ski.
                                </p>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Presentation;