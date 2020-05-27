import React,{ useState, useEffect } from 'react';
import Users from './Users';
import axios from 'axios';
import {Navbar,NavbarBrand} from 'reactstrap';


function MainComponent(){

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
          const res = await axios.get('https://my-personal-website-3769d.firebaseio.com/members.json');
          setMembers(res.data);
          setLoading(false);
        };
        fetchUsers();
      }, []);
console.log(members)
    return(
       <div>
       <Navbar bg="dark">
      <h1 style={{textAlign:"center"}}>Activity Tracker</h1>
      
     </Navbar>
       <Users users={members} loading={loading}></Users>
       
       </div>

    );
}

export default MainComponent;