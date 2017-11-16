import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/char'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

    weatherRender(data) {
        const city = data.city.name
        const temps = data.list.map(w => w.main.temp - 273.15)
        const humidies = data.list.map(w => w.main.humidity)
        const pressures = data.list.map(w => w.main.pressure)
        const { lon, lat } = data.city.coord

        return (
            <tr key={city}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="red" /></td>
                <td><Chart data={pressures} color="blue" /></td>
                <td><Chart data={humidies} color="green" /></td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (c°)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidite (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.weatherRender)}
                </tbody>
            </table>
        )
    }
}

// function mapStateToProps( {weather} ) { return { weather } )
function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)