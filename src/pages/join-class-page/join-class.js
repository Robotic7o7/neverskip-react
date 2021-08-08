import React from "react"
import {useState, useEffect} from "react"
import "./join-class.css"
import { match } from "assert";

function JoinClass(){

    const [classList, setClassList] = useState([]); 
    const [classPassword, setClassPassword] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/classes/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setClassList(data)
                console.log(classList)
            });
    }, [])

    function join(item){
        fetch(`http://localhost:3000/student/${localStorage.getItem("student_id")}/update_class`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    classRoom: item._id
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        alert("JOINED CLASS "+ item.name+item.section);
                        localStorage.setItem("class_id", item._id);
                        window.location.href="/home";
                    }

                    else {
                        alert("error. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    }

    function closePopup(){
        document.getElementById("join-class-popup").style.display="none";
    }

    function checkPassword(password, id){
        if(classPassword === password){
            console.log("match "+classPassword+""+password);
            console.log(id)
        } 
        else{
            console.log("executed");
        }
    }

    if(!classList){
        return( <div>Loading.....</div>)
    }
    else{
        return(
            <>
            <div className="join-class">
                {classList.map((classItem, item) =>
                        <div className="class-card">
                            <span className="class-card-title" >{classItem.class}{classItem.section}</span>
                            <span className="class-card-key" >{classItem.key}</span>
                            <button className="class-card-button" onClick={e=>{e.preventDefault(); join(classItem)}}>Join</button>
                        </div>)}
            </div>
            <div className="join-class-popup" id="join-class-popup">
                <input className="class-popup-input" placeholder="Enter Password" onChange={e=>{e.preventDefault();setClassPassword(e.target.value)}}></input>
                <button className="class-card-button" onClick={closePopup}>Join</button>
            </div>
            </>
      )
    }


    
}

export default JoinClass