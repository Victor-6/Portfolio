import React, {Component} from "react";
import {Cell, Grid, Button} from "react-mdl";
import moi from "../../Assets/moi.jpeg";
import CV from "../../Assets/CV-Victor_Fagot.pdf";

class LandingPage extends Component {


    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            style={{marginBottom: "1%"}}
                            src={moi} alt="avatar"
                            className="photo-img"/>
                        <div className="header-text">
                            <h2 style={{}}>Victor Fagot</h2>
                            <h1>Développeur Intégrateur Web</h1>
                            <hr/>
                            <p>HTML/CSS | PHP | Javascript | JQuery | Ajax | NodeJS | Express | MongoDB | React | React
                                Native </p>
                            <div className="social-links">
                                {/* linkedin */}
                                <a href="https://www.linkedin.com/in/victor-fagot-218298122" rel="noonpener noreferrer"
                                   target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/Victor-6" rel="noonpener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                            <Button href={CV} target="_blank" style={{color: "#fff", fontWeight: "bold"}}>Télécharger
                                CV</Button>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;