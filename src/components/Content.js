import React, {Component} from 'react';

import Countdown from './Countdown';
class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'March 7, 2019'
        };
    }

    render() {
        return (
            <div className="content justify-content-center pb-5 mt-5 mt-lg-0">
                <div className="container">
                    <div className="row pt-5 mt-md-4">
                        <div className="col-12 col-md-12 col-lg-6 countdown-wrapper text-white mb-5 mb-lg-0">
                            <div className="row discount-title justify-content-center justify-content-lg-start">
                                New year offer
                            </div>
                            <div className="row discount-title justify-content-center justify-content-lg-start">
                                <span>82% OFF &nbsp;</span>
                                Web Hosting
                            </div>
                            <div className="row mt-2 mb-4 justify-content-center justify-content-lg-start">
                                <div className="arrow arrow-right">&nbsp;</div>
                                <Countdown deadline={this.state.deadline}/>
                                <div className="arrow arrow-left">&nbsp;</div>
                            </div>
                            <div className="row justify-content-lg-start justify-content-center ">
                                <a href="/"
                                   className="btn btn-danger btn-lg rounded pt-3 pb-3 pr-5 pl-5 text-uppercase font-weight-bold">get
                                    started now</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 text-white per-month mt-5 mt-lg-0">
                            <div className="inner-wrap">
                                <div className="currency">$</div>
                                <div className="big-number">
                                    <div className="discount-tooltip">
                                        <div className="discount-square"><span id="discount-text">SAVE 82%</span>
                                            <div className="arrow arrow-down">&nbsp;</div>
                                        </div>
                                    </div>
                                    <p>1</p>
                                </div>
                                <div className="right-side">
                                    <div className="small-number">45</div>
                                    <div className="month">/mo</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;

