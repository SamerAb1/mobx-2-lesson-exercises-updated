import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  addReservation = () => {
    const { GeneralStore, RestaurantStore } = this.props;
    const { name, numPeople } = GeneralStore;
    RestaurantStore.addRes(name, Number(numPeople)); // use both stores
  };

  render() {
    const { RestaurantStore } = this.props;
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        {
          /* Add in # of people in restaurant */
          <div>
            You have {this.props.RestaurantStore.restPopulation} people in the
            resturant
          </div>
        }
        {
          /* Add in # of completed tables with id "completedTables*/
          <div id="completedTables">
            You have {this.props.RestaurantStore.completedTables} completed
            tables in the resturant
          </div>
        }
        <ResInput />
        <button id="addRes" onClick={this.addReservation}>
          Add Reservation
        </button>
        {/* Make the Add Reservation button work */}
        <div className="reservations">
          {/* Map reservation data to Reservation components here */}
          {RestaurantStore.reservations.map((r) => (
            <Reservation key={r.id} res={r} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
