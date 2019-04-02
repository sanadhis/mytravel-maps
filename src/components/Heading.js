import React, { Component } from 'react';
import consts from '../constants/main';
import '../assets/css/Heading.css';

class Heading extends Component {
    constructor(props){
      super(props)
      this.state = {
        totalCities: 0,
        totalCountries: 0,
      }
    }

    componentWillReceiveProps(props){
      const { totalCountries, totalCities } = props;
      console.log(totalCities)
      this.setState({
        totalCities: totalCities,
        totalCountries: totalCountries
      })
    }

    render() {
        const totalCities = this.state.totalCities
        const totalCountries = this.state.totalCountries

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
                    I have been into <span id="countries" class="info">{totalCountries}</span> countries 
                    and <span id="cities" class="info">{totalCities}</span> cities
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