import React, { useState } from 'react';

function UseStateHooks(props) {
    const [count,setCount]=useState(7)
    const [name,setName]=useState("mahesh")
    const [person,setPersonDetails]=useState({name:"ravi"})
    const [students,setStudentDetails]=useState([{name:"ravi"},{name:"kavi"},{name:"mavi"},{name:"bavi"}])
    return (
        <div>
          <label>functional</label>
          <button onClick={()=>setCount(count+1)}>Count{count}</button>
          {name}
          <button onClick={()=>setName("kavi")}>ChangeName</button>
          <h1>---------------------</h1>
          <button onClick={()=>setPersonDetails({name:"kavi"})}>ChangePewsron</button>
          {person.name}
          <h3>---------------------------------------</h3>
          {
            students.map(student=>
              <h1>
                {
                  student.name
                }
              </h1>
            )

          }
        </div>
    );
}

export default UseStateHooks;