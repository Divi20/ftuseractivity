import React,{ useState } from 'react';
import {Card, CardBody, CardTitle, CardHeader,CardText, CardFooter} from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Time  = ({at , startDate}) =>{

var selectedDate = Date.parse(startDate);
console.log(selectedDate);

  return(<Card style={{padding:"10px"}}>
  {at.map(attime =>{

    var startDatee = attime.start_time.split(" ").slice(0,3).join(" ");
    console.log(startDatee);

    var endDatee = attime.end_time.split(" ").slice(0,3).join(" ");

    console.log(Date.parse(new Date(startDatee)));
    console.log(Date.parse(new Date(endDatee)));

    var st = Date.parse(new Date(startDatee));
    var endt = Date.parse(new Date(endDatee));

    if(selectedDate >= st && selectedDate <= endt){
      return(<div className="row">
      <div className="col-4">
      <Card style={{width:"100%"}}>
      <CardText>From : {attime.start_time} </CardText>
      </Card>
      </div>
      <div className="col-4">
      <Card style={{width:"100%"}}>
    
      <CardText>To : {attime.end_time}</CardText>
      </Card>
      </div>
      <div className="col-4" style={{textAlign:"center"}}>
      <Card>
      <CardText style={{color:"red"}}>View</CardText>
      </Card>
      </div>
      </div>);
    }
    else{
     return  <div>No activity found</div>
    }
  
  })}
  
  </Card>)
}


const Users = ({ users,loading}) => {
const [currentUserActivityPeriods , setCurrentUserActivityPeriods] = useState([]);
const [startDate, setStartDate] = useState(new Date("Feb 1 2020"));
  console.log(currentUserActivityPeriods)
  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="App">
     
    
      <header className="App-header">
      <div className="accountscontainer">
      <Card className="accountscardtextdark">
      <CardHeader className="accountscardheader">
      <CardTitle>
     <h2 className="cardheading" style={{textAlign:"center"}}>TotalUsers</h2>
     <h1 style={{textAlign:"center", fontSize:"80px"}}>{users.length}</h1>
      </CardTitle>
      </CardHeader>
      
      <CardBody style={{borderStyle:"hidden"}}>
      <ul className="list-groupmb-3">
      {users.map(user => (
          <li
            key={user.id}
            className="list-group-item"
            onClick={() => setCurrentUserActivityPeriods([user.activity_periods])}  data-toggle="modal" data-target="#exampleModal"
           >
           {user.real_name}
          </li>
      ))}
      </ul>
      </CardBody>
      </Card>
      </div>
     
      </header>
     
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div className="container" style={{height:"500px", width:"600px",padding:"0",borderRadius:"45px 45px"}}>
        <Card style={{width:"100%", height:"100%",borderRadius:"35px"}}>
        <CardHeader>
        
        <div class="modal-header" style={{display:"block"}}>
        
        <h1 className=" cardheading modal-title" id="exampleModalLabel" style={{textAlign:"center"}}>Users's Activity</h1>
        <br></br>
        <div class="container">
        <h3>Choose  the date </h3>
<div class="row">
    <div class='col'>
    <DatePicker
    selected={startDate}
    onChange={date => setStartDate(date)}
    showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    timeCaption="time"
    dateFormat="MMM d yyyy"
  />
    </div>
</div>
</div>

      </div>
        
        </CardHeader>
        <CardBody>
        <div class="modal-body">
        {currentUserActivityPeriods.map(at =>{
         return <div>
         <Time at={at} startDate={startDate}></Time>
         </div>
         })
         
        }
        </div>
        </CardBody>
        <CardFooter>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </CardFooter>
        </Card>
        </div>


         
         
      
         
          
        </div>
      </div>
    </div>
    </div>
    
    
    
  );
};



export default Users;
