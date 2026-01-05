import { useEffect, useState } from "react"
import axios from "axios";

export function FetchAPIData(){
    const [data, setData]=useState([])
    useEffect(
        ()=>{
            fetch("https://fakestoreapi.com/users?limit=5")
            .then(res=>res.json())
            // .then(users=>console.log(users))
            .then(users=>setData(users))
        },[]);

    return (
  <div>
    <h1>Fetching Users Data</h1>

    {data.map((d) => (
      <p key={d.id}>
        {d.id} FirstName: {d.name.firstname} LastName: {d.name.lastname} Email: {d.email} City: {d.address.city}
      </p>
    ))}
  </div>
);
}

export function FetchAxiosData(){
    const [data, setData]=useState([])

    useEffect(
        ()=>{
            axios.get("https://fakestoreapi.com/users")
            .then(res=>res.data)
            .then(users=>{
                const slice=users.slice(5,10);
                setData(slice)
            })
        },[])
    return(
        <div>
            {data.map((d) => (
              <p key={d.id}>
                {d.name.firstname} {d.name.lastname}
              </p>
            ))}
        </div>
    )
}