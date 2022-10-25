import { useEffect, useState } from "react";
import Entrylist from "./entrylist";

const Home = () => {

    const [entries,setEntries]=useState(null)
    const [load,setLoad]=useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/entries')
        .then(res => {
           return res.json();
        })
        .then(data => {
            setEntries(data);
            setLoad(false);
        })
    },[]);

    return (
        <div className="home">
            {load && <div>Loading Data.......</div>}
            {entries && <Entrylist entries={entries}/>}
        </div>  
      );
}
 
export default Home;