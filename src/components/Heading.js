import React, { Component } from 'react';
import consts from '../constants/main';
import '../assets/css/Heading.css';
import { readTravelData } from '../constants/main';

class Heading extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-2 align-self-center">
                  <a href="javascript:history.back()" 
                     class="btn btn-success float-right btn-back">
                    Back <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </a>
              </div>
              <div class="col-10">
                <p class="text-left summary">
                    I have been into <span id="countries" class="info">{consts.totalCountry}</span> 
                    countries and <span id="cities" class="info">{consts.totalCities}</span> cities
                </p>
                <p class="summary subsummary">
                  As of <span id="now" class="info">{consts.time}</span>
                </p>
              </div>
            </div>
            </div>
        );
    }
}

export default Heading;