import React, { Component } from 'react'
import './Home.scss';

export default class home extends Component {

    state = {
        track1: new Audio(require('../../asset/song/CLAUDE DEBUSSY CLAIR DE LUNE.mp3')),
        track2: new Audio(require('../../asset/song/Rival Consoles - Odyssey (Official Music Video).mp3')),
    }

    left = (stop) => {
        if(stop === true){
            this.state.track1.pause();
        } else {
            this.state.track1.play();
        }
    }

    right = (stop) => {
        if(stop === true){
            this.state.track2.pause();
        } else {
            this.state.track2.play();
        }
    }

    render() {
        return (
            <div className="container">
                <img className="title" src={require("../../asset/img/titre.png")} alt="title"/>
                
                <div className="L" onMouseEnter={this.left} onMouseLeave={() => this.left(true)}></div>
                <div className="R" onMouseEnter={this.right} onMouseLeave={() => this.right(true)}></div>

                <div className="left" onMouseEnter={this.left} onMouseLeave={() => this.left(true)}>
                    <img className="effectL" src={require('../../asset/img/classique2.png')} alt="2" />
                    <img className="bg1" src={require("../../asset/img/classique.png")} alt="1" />
                </div>

                <div className="right" onMouseEnter={this.right} onMouseLeave={() => this.right(true)}>
                    <img className="effectR" src={require('../../asset/img/electro2.png')} alt="2"/>
                    <img className="bg2" src={require("../../asset/img/electro.jpg")} alt="2" />
                </div>

                <div className="pochetteL">
                    <img src={require('../../asset/img/01.jpg')} alt="pochetteL" />
                </div>
                <div className="pochetteR">
                    <img src={require('../../asset/img/02.jpg')} alt="pochetteR" />
                </div>

            </div>
        )
    }
}
