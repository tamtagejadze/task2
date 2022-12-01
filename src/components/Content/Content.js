import React from 'react';
import Div from './Div';
import { useRef, useState } from "react";
import axios from 'axios';


const users =[
    {
    id:7,
    first_name:"Michael",
    last_name:"Lawson",
    avatar:"https://reqres.in/img/faces/7-image.jpg",
    friend: true
    },
    {
    id:8,
    first_name:"Lindsay",
    last_name:"Ferguson",
    avatar:"https://reqres.in/img/faces/8-image.jpg",
    friend: false
    },
    {
    id:9,
    first_name:"Tobias",
    last_name:"Funke",
    avatar:"https://reqres.in/img/faces/9-image.jpg",
    friend: true
    },
    {
    id:10,
    first_name:"Byron",
    last_name:"Fields",
    avatar:"https://reqres.in/img/faces/10-image.jpg",
    friend: false
    },
    {
    id:11,
    first_name:"George",
    last_name:"Edwards",
    avatar:"https://reqres.in/img/faces/11-image.jpg",
    friend: true
    },
    {
    id:12,
    first_name:"Rachel",
    last_name:"Howell",
    avatar:"https://reqres.in/img/faces/12-image.jpg",
    friend: false
    }
]

function Content() {
    const divRef = useRef();
    const inputRef = useRef();
    const [value, setValue] = useState('')
    const [newusers, setnewusers] = useState(users)

    
    function add(e){
        axios.post("https://reqres.in/api/users", 
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    .then(response => {console.log(response);})
    .catch(error => {console.log(error);})

        e.preventDefault();
        const newUsers = [
            ...newusers,
            {
                
                    "name": "morpheus",
                    "job": "leader"
                

            },
        ]
        setnewusers(newUsers)
        setValue("")
    }

    return (
        <>
        <form onSubmit={add}>
            <input
            className='input'
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            ref ={inputRef}        
            />
        </form>
    <div className='div'>
        {
            users.map(element =>(           
                <Div 
                    key={element.id} 
                    className="userDiv"
                    ref = {divRef}>   
                    <h5>{element.first_name + " " + element.last_name }</h5>         
                    <img src={element.avatar}></img>
                    <button className='btn'onClick={()=>(element.friend ? '' : alert('Friend request is sent'))}>Add Friend</button>
                </Div>
            ))
        }
    </div>
    </>
  )
}

export default Content