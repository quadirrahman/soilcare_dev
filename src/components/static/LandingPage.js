import React from "react";
import axios from "axios";



class LandingPage extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Soil HealthCare</h2>
            <h4>Soil Health Management, The Route to Quality Yield</h4>
            <button>Book Appointment</button>
            <button>Download Report</button>
            <button>Submit Sample Details</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;