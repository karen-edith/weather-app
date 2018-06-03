import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      latitude:'',
      longitude: ''
    }
  }

  showPosition(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  componentDidMount(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    } else {
        console.log( "Geolocation is not supported by this browser.");
    }
  }

  findweather(){
    FETCH_URL = 'api.openweathermap.org/data/2.5/weather?lat={'+this.state.latitude+'}&lon={'+this.state.longitude'}&APPID=dc10313a7d1d664909789eadbe3c4bd1'
    fetch(FETCH_URL, {
      method: 'GET'
    }).then((response) => {if (response.ok){
      return response.json()
      .then(json => {
        return console.log(json);
      })
    }}).catch(error => )
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default App;
