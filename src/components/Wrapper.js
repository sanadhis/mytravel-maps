import React, { Component } from 'react';
import Footer from './Footer';
import Heading from './Heading';
import Map from './Map';

import * as d3 from 'd3';
import data from '../assets/data/travel.csv';

class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapdata: {},
            totalCities: {},
            totalCountries: {},
        }
    }

    componentDidMount() {
		d3.csv(data, (error, data) => {
            let mapdata = {};
            let totalCities = 0;
            let totalCountries = 0; 
			data.forEach((d) => {
				mapdata[d.country] = {
					fillKey: 'VISITED',
					cities: d.cities,
                }
                totalCountries += 1
                totalCities += d.cities.split(",").length
			});
			this.setState({
                mapdata: mapdata,
                totalCities: totalCities,
                totalCountries: totalCountries,
            })
		})
    }

    render() {
        const totalCities  = this.state.totalCities;
        const totalCountries = this.state.totalCountries;
        const mapdata = this.state.mapdata

        return (
            <div>
                <Heading totalCities={totalCities} totalCountries={totalCountries}/>
                <Map mapdata={mapdata}/>
                <Footer />
            </div>
        );
    }
}

export default Wrapper;
