import React, { useEffect } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZWRha2JhciIsImEiOiJja3hiNW16Z24wNWJvMm5wenVhaHhodjY4In0.Rexz4n_1l6YE6-cdcqaMmQ';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.987030, 21.433920],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;