import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  render() {
    const { res, RestaurantStore } = this.props;

    return (
      <div className={`reservation ${res.completed ? "conditional" : ""}`}>
        <div className="reservation__row">
          <span className="reservation__name">{res.name}</span>
          <span className="reservation__people"> — {res.numPeople} people</span>

          {res.seated && !res.completed && (
            <span className="reservation__tag">SEATED</span>
          )}
          {res.completed && <span className="reservation__tag">DONE</span>}
        </div>

        <div className="reservation__actions">
          {!res.seated && (
            <button onClick={() => RestaurantStore.seatRes(res.id)}>
              Seat reservation
            </button>
          )}
          {!res.completed && (
            <button onClick={() => RestaurantStore.completeRes(res.id)}>
              Complete reservation
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default inject("RestaurantStore")(observer(Reservation));
