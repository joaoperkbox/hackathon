import React, { Component } from 'react';
import './App.css';
import Confetti from "react-confetti"
import data from "./users.json"
import moment from "moment"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: data.anniversaries.map((user) => {return {
        name: `${user.FirstName} ${user.LastName}`,
        years: moment().year() - moment(user.HireDate).year(),
        img: user.ImageURL,
        type: "anniversary",
        gifTag: "celebration"
      }}).concat(
        data.birthdays.map((user) => {return {
          name: `${user.FirstName} ${user.LastName}`,
          img: user.ImageURL,
          type: "birthday",
          gifTag: "birthday"
        }})
      ).concat(
      data.probation_passed.map((user) => {return {
        name: `${user.FirstName} ${user.LastName}`,
        img: user.ImageURL,
        type: "probation",
        gifTag: "celebration"
      }})),
      num: 0
    }
  }

  getGif(tag) {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          url: myJson.data.images.fixed_height.url
        })
      });
  }

  componentDidMount() {
    const {events, num} = this.state
    const {width, height} = this.container.getBoundingClientRect()
    this.getGif(events[num].gifTag)

    this.setState({
      width,
      height
    })
  }

  onClick() {
    const {events, num} = this.state
    if(events[num + 1]) {
      this.getGif(events[num + 1].gifTag)

      this.setState({
        num: num + 1
      })
    }
  }

  render() {
    const {height, width, events, num} = this.state
    const user = events[num]

    const msg = () => {
      if(user.type === "birthday") {
        return <div className="message">
          Happy Birthday {user.name}!
          <img alt="" src={user.img} height="170px" width="170px"/>
        </div>
      }

      if(user.type === "anniversary") {
        return <div className="message">
          {user.name} has been here for an astonishing {user.years} years! Happy Anniversary!  
          <img alt="" src={user.img} height="170px" width="170px"/>
        </div>
      }

      if(user.type === "probation") {
        return <div className="message">
          As of today {user.name} has passed their 3 month probation! Well done!
          <img alt="" src={user.img} height="170px" width="170px"/>
        </div>
      }

      return null
    }

    return (
      <div className="App" onClick={this.onClick.bind(this)}>
        {height && <Confetti width={width} height={height} />}
        <div className="birthday" ref={(element) => { this.container = element }}>
          <div className="name">
          {msg()}
          </div>
          <div className="gif"><img src={this.state.url} alt=""/></div>
        </div>
      </div>
    );
  }
}

export default App;
