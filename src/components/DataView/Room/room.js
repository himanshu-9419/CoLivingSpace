import React,{Component} from 'react';

class Room extends Component {
    render(){
        var info = []; let room = this.props.room;
        for (var key in room) {
            if (room.hasOwnProperty(key)) {
                info.push({'sharing' : key,...room[key]});
            }
        }
        let roomInfo=info.map((x,index)=>
            <div key={index}>Sharing:{x.sharing},Rent:{info[0][0].rentAmount},Deposit:{info[0][0].depositAmount}</div>
        )
        console.log(info);
        return(
            <div className="" >
                Room Types Available
                {roomInfo}
            </div>
        )
    }
};
export default Room;