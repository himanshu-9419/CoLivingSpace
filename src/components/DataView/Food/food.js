import React, { Component } from 'react';

class Food extends Component {
    render() {
        var info = []; let food = this.props.food;
        for (var key in food) {
            if (food.hasOwnProperty(key)) {
                info.push({ 'type': key, detail: food[key].details, weekdays: food[key].weeekdays,weekends:food[key].weekend });
            }
        }
        let foodInfo = info.map((x, index) =>
            <tr key={index}>
                <th>{x.type}</th>
                <th>{x.detail}</th>
                <th>{x.weekdays}</th>
                <th>{x.weekends}</th>
            </tr>
        )
        //console.log(info);
        return (
            <div className="container table-responsive" >
                Food Available
                <table className="table">
                    <tr>
                        <th>Type</th>
                        <th>Details</th>
                        <th>Weekdays</th>
                        <th>Weekends</th>
                    </tr>
                    {foodInfo}
                </table>
            </div>
        )
    }
};
export default Food;