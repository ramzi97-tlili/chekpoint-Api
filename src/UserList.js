import React, {useState,useEffect} from 'react';
import axios from 'axios';
function UserList(){
const [List, setList] = useState( [] );
useEffect(() => {
const fetchData = async () => {
    const result = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
    );
    setList(result.data);
    };
    fetchData();
    },[]);
return (
<div>
    
    {List.map(el => (
    <div>
    <h1> ID : {el.id}</h1>
    <div className="flex">
    <h2>Name : {el.name}</h2>
    <h2>User Name :{el.username}</h2>
    <p>email: {el.email}</p>
    <p>Address :{el.address.city}</p>
    </div>
</div>
    

      ))}
        </div>
    )
}

export default UserList
