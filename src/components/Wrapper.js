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
            data: []
        }
        
        // this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getCsvData();
    }

    fetchCsv() {
        // return d3.csv(data).then((data) => {
        //     var totalCountry = 0;
        //     var totalCities = 0;
        //     var mapdata = {};
        //     data.forEach(function(d){
        //         totalCountry += 1
        //         totalCities += d.cities.split(",").length
        //         mapdata[d.country] = {
        //             fillKey: 'VISITED',
        //             cities: d.cities,
        //         }
        //     })
        //     return mapdata;
        // })
    }

    getData(result) {
        this.setState({data: result})
    }

    async getCsvData() {
        let data = await this.fetchCsv();

        this.getData(data)
    }

    render() {
        return (
            <div>
                <Heading />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default Wrapper;
