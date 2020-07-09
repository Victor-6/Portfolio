import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import auchan from "./image/auchan.png";
import bouygues from "./image/bouygues.JPG";
import mondial_tissus from "./image/mondial_tissus.jpg";

class Experiences extends Component {

    render() {
        return (
            <div>
                <div className="all-card">
                    <img className="auchan-image"
                         src={auchan}
                         alt="auchan"></img>
                    <img className="bouygue-image"
                         src={bouygues}
                         alt="bouygue"></img>
                    <img className="mondial-image"
                         src={mondial_tissus}
                         alt="mondial_tissus"></img>
                    <div>
                        <Grid className="auchan-grid">
                            <Cell>
                                <div className="auchan-text">
                                    <h2 style={{marginTop: "5px"}}>Auchan</h2>
                                    <hr/>
                                    <p style={{color: "white"}}>Diplômé d'un bac STMG, j'ai entrepris un BTC MUC en
                                        alternance dans l'entreprise Auchan dans
                                        laquelle je suis resté 2 années et mon école se situait à Metz. J'y ai occupé
                                        tous les secteurs d'activité.
                                        J'ai également occupé des postes de ventes et de conseil client afin de réaliser
                                        mes projets d'études.
                                    </p>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="bouygue-grid">
                            <Cell>
                                <div className="bouygue-text">
                                    <h2 style={{marginTop: "5px"}}>Bouygues Télécom</h2>
                                    <hr/>
                                    <p style={{color: "white"}}>Suite à mon BTS, j'ai voulu me réorienter plus
                                        précisément dans la vente, le conseil à
                                        la clientèle et dans un domaine qui me plaisait. J'ai travaillé chez Bouygues
                                        Télécom en tant que vendeur boutique
                                        pendant quelques mois.
                                    </p>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="mondial_tissus-grid">
                            <Cell>
                                <div className="mondial_tissus-text">
                                    <h2>Mondial Tissus</h2>
                                    <hr/>
                                    <p style={{color: "white"}}>Après mon CDD chez Bouygues Télécom, j'ai décidé de
                                        reprendre mes études en faisant une licence en management
                                        en alternance en tant que responsable adjoint. J'ai eu l'opportunité de
                                        travailler dans l'enseigne Mondial Tissus pendant une année tandis
                                        que mon école se situait à Lyon. J'ai effectué plusieurs missions concernant la
                                        partie commerciale et manageriale.
                                    </p>
                                </div>
                            </Cell>
                        </Grid>
                    </div>
                </div>
                <div className="skill-body">
                    <Grid style={{backgroundColor: "#C4C4C3"}} className="skill-grid">
                        <Cell col={6}>
                            <h2 className="titre-technologie" style={{textAlign: "center"}}>Savoir-être</h2>
                            <button className="buttons">Sérieux</button>
                            <button className="buttons">Consciencieux</button>
                            <button className="buttons">Polyvalent</button>
                            <button className="buttons">Autonome</button>
                            <button className="buttons">Esprit d'équipe</button>
                        </Cell>
                        <Cell col={6}>
                            <h2 className="titre">Compétences</h2>
                            <hr/>
                            <div className="skill-list">
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>Management d'équipe</li>
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>Gestion</li>
                                <li style={{width: "100%", margin: "auto", paddingTop: "1em"}}>Conseil client</li>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Experiences;