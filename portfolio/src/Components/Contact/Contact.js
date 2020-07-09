import React, {Component} from "react";
import moi from "../../Assets/moi.jpeg";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {

    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Victor Fagot</h2>
                        <img
                            className="contact-photo"
                            src={moi}
                            alt="avatar"
                            style={{height: "250px"}}/>
                        <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                            Je suis Développeur Intégrateur Web étudiant à la WebAc@démie by EPITECH Nancy.
                            C'est une formation sur 2 ans où j'étudie différentes technologies par des projets sont
                            individuels
                            ou en groupes au cours de notre première année. Au cours de ma seconde année, je dois
                            parfaire
                            mon cursus par le biais d'une alternance de 14 mois en contrat de professionnalisation à
                            partir du 14 Septembre 2020 au 5 Novembre 2021.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contactez-moi</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: "40px", fontFamily: "Anton", fontWeight: "bold"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/> {" "}
                                        06 30 43 96 44 <br/>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: "40px", fontFamily: "Anton", fontWeight: "bold"}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/> {" "}
                                        vicfag@live.fr <br/>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: "40px", fontFamily: "Anton", fontWeight: "bold"}}>
                                        <i className="fa fa-skype" aria-hidden="true"/> {" "}
                                        Victorfag6 <br/>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        style={{fontSize: "40px", fontFamily: "Anton", fontWeight: "bold"}}>
                                        <i className="fa fa-linkedin" aria-hidden="true"/> {" "}
                                        Victor Fagot <br/>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;