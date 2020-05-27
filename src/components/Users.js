import React,{ useState } from 'react';
import {Card, CardBody, CardTitle, CardHeader,CardText} from 'reactstrap';
import DatePicker from 'react-datepicker';


const DateTime = ({startDate,setStartDate}) =>{

  return <DatePicker
  selected={startDate}
  onChange={date => setStartDate(date)}
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={15}
  timeCaption="time"
  dateFormat="MMMM d, yyyy h:mm aa"
/>

}


const Time  = ({at}) =>{
  
  return(<Card style={{padding:"10px"}}>
  {at.map(attime =>(
    <div className="row">
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
  </div>
    ))}
  
  </Card>)
}

const Users = ({ users,loading}) => {
const [currentUserActivityPeriods , setCurrentUserActivityPeriods] = useState([]);
const [startDate, setStartDate] = useState(new Date());
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
     <h2 className="cardheading">Select an account</h2>
      </CardTitle>
      </CardHeader>
      
      <CardBody>
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
     
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Choose date to View User activity</h5>
         

            <div class="container">
    <div class="row">
        <div class='col-sm-6'>
            <DateTime startDate={startDate} setStartDate={setStartDate}></DateTime>
        </div>
    </div>
</div>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
          </div>
          <div class="modal-body">
          {currentUserActivityPeriods.map(at =>{
           return <div>
           <Time at={at}></Time>
           </div>
           })
           
          }
          </div>
      
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
  );
};



export default Users;
