import React, {Component} from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu} from "react-mdl";

class Porjets extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projets-grid">
                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "black",
                            height: "176px",
                            background: "url(https://www.cbnews.fr/sites/cbnews.fr/files/styles/panoramic_w1200/public/images/logo-meetic.jpg-2296.jpg?itok=UhJJTTTv) center / cover"
                        }}>Projets Meetic</CardTitle>
                        <CardText>
                            Le but du projet est de créer un site de rencontres à la manière d’un Meetic. Ce projet a
                            été réalisé en PHP brut avec une architecture MVC,
                            pour faciliter sa concéption j'ai utilisé de l'Ajax et du JQuery
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Victor-6/Meetic" target="_blank" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}></CardMenu>
                    </Card>
                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "black",
                            height: "176px",
                            background: "url(https://s.w.org/style/images/about/simplified.png) center / cover"
                        }}>Projets Wordpress</CardTitle>
                        <CardText>
                            Ce projet a été réalisé en groupe de trois personnes. Le but de ce projet est d'utilisé
                            Wordpress mais d'approfondir l'interface.
                            De créer un thème qui nous est propre, un plugin et un widget.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Victor-6/Wordpress" target="_blank" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}></CardMenu>
                    </Card>
                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "black",
                            height: "176px",
                            background: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png) center / cover"
                        }}>Projets PiePHP</CardTitle>
                        <CardText>
                            PiePHP est un framework "home made" basé sur la structure de CakePHP et la norme de Symfony.
                            Il m'a
                            permit d'approfondir l'architecture MCV ainsi que la compréhension d'un framework.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Victor-6/PiePHP" target="_blank" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}></CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projets-grid">
                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "#fff",
                            height: "176px",
                            background: "url(https://reactjs.org/logo-og.png) center / cover"
                        }}>Projets Spotify</CardTitle>
                        <CardText>
                            Ce projet a été réalisé en groupe de quatre personnes. Le but du projet est de créer une API
                            et un site.Il a été réalisé en React JS pour le côté client,
                            et en PHP du côté serveur.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Victor-6/Spotify-" target="_blank" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                        </CardMenu>
                    </Card>

                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "#fff",
                            height: "176px",
                            background: "url(https://reactjs.org/logo-og.png) center / cover"
                        }}>Projets I.R.C</CardTitle>
                        <CardText>
                            Ce projet est de réaliser un serveur IRC. Le serveur devra également implémenter des
                            “channels”. Le projet React JS pour le côté client, et NodeJS pour le côté serveur.
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Victor-6/IRC" target="_blank" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                        </CardMenu>
                    </Card>

                    <Card className="Card" shadow={5} style={{minWidth: "450", justifyContent: "space-between"}}>
                        <CardTitle style={{
                            color: "#fff",
                            height: "176px",
                            background: "url(https://reactjs.org/logo-og.png) center / cover"
                        }}>Projets Portfolio</CardTitle>
                        <CardText>
                            Ce projet a pour but d’utiliser mes acquis en développement pour établir votre page vitrine
                            personnelle.
                            recruteurs. Pour ce projet, j'ai utilisé du React pour le côté client.
                        </CardText>
                        <CardActions border>
                            <Button target="_blank" href="https://github.com/Victor-6/Portfolio" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                        </CardMenu>
                    </Card>
                </div>
            )

        } else if (this.state.activeTab === 2) {
            return (
                <div className="projets-grid">
                    <Card className="Card" shadow={5} style={{minWidth: "450", margin: "auto"}}>
                        <CardTitle style={{
                            color: "black",
                            height: "176px",
                            background: "url(https://lareclame-scanbook.s3.amazonaws.com/01-push-1260x679px1522423754.png) center / cover"
                        }}>Projets Leboncoin</CardTitle>
                        <CardText>
                            Le but de ce projet est de faire un site de petites annonces en utilisant le Framework
                            Laravel. J'ai décidé de reproduire le même design que
                            le site "Leboncoin".
                        </CardText>
                        <CardActions border>
                            <Button target="_blank" href="https://github.com/Victor-6/Leboncoin" colored>Gituhb</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                        </CardMenu>
                    </Card>
                </div>
            )

        } else if (this.state.activeTab === 3) {
            return (
                <Card className="Card" shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{
                        color: "black",
                        height: "176px",
                        background: "url(https://www.fil.univ-lille1.fr/~aubert/ap1/img/initg.png) center / cover"
                    }}>Projets Puissance 4</CardTitle>
                    <CardText>
                        Ce projet a été réalisé en PHP brut avec une architecture MVC, pour faciliter sa concéption pour
                        différentes fonctionnalités j'ai utilisé de l'Ajax et du JQuery
                    </CardText>
                    <CardActions border>
                        <Button target="_blank" href="https://github.com/Victor-6/Puissance-4" colored>Gituhb</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>PHP</Tab>
                    <Tab>React</Tab>
                    <Tab>Framework</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>

                <section className="projets-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Porjets;