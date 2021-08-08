import React from "react";
import {useState, useEffect} from "react";

import "./home.css";

function HomePage(){

    const [classAssignments, setClassAssignments] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:3000/assignment/class/${localStorage.getItem("class_id")}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setClassAssignments(data);
            });
    }, [])


    if(!classAssignments){
        return(<div>Loading</div>)
    }
    else{
        return(
            <div className="home">
                <div className="scrollable-container assignments-scroll-component">
                {classAssignments.map((assignment, item) =>
                        <div className="assignment-card">
                            <span className="assignment-card-title" >{assignment.assignment_name}</span>
                            <span className="assignment-card-due-date" >Due By: {assignment.due_date}</span>
                            <button className="class-card-button">View</button>
                        </div>)}

                </div>
            </div>
        )
    }
}

export default HomePage;