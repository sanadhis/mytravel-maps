import PropTypes from 'prop-types';
import React from 'react';
import Datamaps from 'datamaps';
import '../assets/css/Map.css';

const MAP_CLEARING_PROPS = [
	'height', 'scope', 'setProjection', 'width'
];

const propChangeRequiresMapClear = (oldProps, newProps) => {
	return MAP_CLEARING_PROPS.some((key) =>
		oldProps[key] !== newProps[key]
	);
};

export default class Map extends React.Component {

	static propTypes = {
		arc: PropTypes.array,
		arcOptions: PropTypes.object,
		bubbleOptions: PropTypes.object,
		bubbles: PropTypes.array,
		data: PropTypes.object,
		graticule: PropTypes.bool,
		height: PropTypes.any,
		labels: PropTypes.bool,
		responsive: true,
		style: PropTypes.object,
		updateChoroplethOptions: PropTypes.object,
		width: PropTypes.any
	};

	constructor(props) {
		super(props);
		this.state = {
            data: {}
        }
		this.resizeMap = this.resizeMap.bind(this);
	}

	componentDidMount() {
		if (this.props.responsive) {
			window.addEventListener('resize', this.resizeMap);
		}
	}

	componentWillReceiveProps(newProps) {
		if (propChangeRequiresMapClear(this.props, newProps)) {
			this.clear();
		}
		const { mapdata } = newProps 
		this.setState({data: mapdata})
		this.componentDidUpdate()
	}

	componentDidUpdate() {
		this.drawMap();
	}

	componentWillUnmount() {
		this.clear();
		if (this.props.responsive) {
			window.removeEventListener('resize', this.resizeMap);
		}
	}

	clear() {
		const { container } = this.refs;

		for (const child of Array.from(container.childNodes)) {
			container.removeChild(child);
		}

		delete this.map;
	}

	drawMap() {
		const {
			arc,
			arcOptions,
			bubbles,
			bubbleOptions,
			data,
			graticule,
			labels,
			updateChoroplethOptions,
			...props
		} = this.props;

		let map = this.map;
		let mapdata = this.state.data;

		if (!map) {
			map = this.map = new Datamaps({
                ...props,
                fills: {
                    VISITED: '#fab1a0',
                    defaultFill: '#74b9ff'
                },
                geographyConfig: {
                    popupTemplate: function(geo, geoData) {
                        return ['<div class="hoverinfo"><strong>',
                                'Places I visited in ' + geo.properties.name,
                                ': ' + geoData.cities,
                                '</strong></div>'].join('');
                    }
                },
                responsive: true,
				mapdata,
				element: this.refs.container
			});
		} else {
			map.updateChoropleth(mapdata, updateChoroplethOptions);
		}

		if (arc) {
			map.arc(arc, arcOptions);
		}

		if (bubbles) {
			map.bubbles(bubbles, bubbleOptions);
		}

		if (graticule) {
			map.graticule();
		}

		if (labels) {
			map.labels();
        }
    
	}

	resizeMap() {
		this.map.resize();
	}

	render() {
		const style = {
			height: '100%',
			position: 'relative',
			width: '100%',
			...this.props.style
		};
        return   (
            <div class="container">
                <div ref="container" style={style} />
            </div>
        );  
	}

}