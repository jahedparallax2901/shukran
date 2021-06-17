import React, { Component } from "react";
import moment from "moment";

class CountDownSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: null,
      minutes: null,
      hours: null,
      days: null,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const { days, hours, minutes, seconds } = this.state;
    console.log("testing time",days, hours, minutes, seconds )
    return (
      <div className="timer">
        <span className="block">{days}</span> :
        <span className="block">{hours}</span> :
        <span className="block">{minutes}</span> :
        <span className="block">{seconds}</span>
      </div>
    );
  }
}

export default CountDownSimple;
