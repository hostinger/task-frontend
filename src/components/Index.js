import React, { Component } from 'react';
import Clock from './Clock'
import "../styles/index.scss"
import "../styles/clock.scss"

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

class Index extends Component {
    render() {

        return (
            <div className={'row'}>
                <div className={'price'}>
                    <div className={'discount'}>Save 82%</div>
                    <div className={'halfBox__left'}>
                        <div>$</div>
                        <div></div>
                    </div>
                    <div className={'fullBox'}>1</div>
                    <div className={'halfBox__right'}>
                        <div>45</div>
                        <div>/mo</div>
                    </div>
                </div>
                <div className={'yearOffer'}>
                    <div>New Year Offer</div>
                    <div><span>82% OFF</span> Web Hosting</div>
                    <Clock/>
                    <div className={'btn'}>
                        <div>Get Started Now</div>
                    </div>
                </div>

                <div className={'claims'}>
                    <div><FontAwesomeIcon icon="check" style={{color: "#7ec67c"}}/> Guaranteed 99.9% Uptime</div>
                    <div><FontAwesomeIcon icon="check" style={{color: "#7ec67c"}}/> Superior Speed Performance</div>
                    <div><FontAwesomeIcon icon="check" style={{color: "#7ec67c"}}/> 24/7 Support Chat</div>
                    <div><FontAwesomeIcon icon="check" style={{color: "#7ec67c"}}/> 30-Day Money-Back Guarantee</div>
                </div>
            </div>
        );
    }
}


export default Index;

