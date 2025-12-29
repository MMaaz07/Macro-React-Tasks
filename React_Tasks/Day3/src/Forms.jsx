import { useRef, useState } from "react"

export function ControlledForm(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [age, setAge]=useState("");
    const [submittedData, setSubmittedData]=useState(null);

    function handleSubmit(event){
        event.preventDefault();   
        setSubmittedData({name, email, age});
        setName("");
        setEmail("");
        setAge("");
    }
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Controlled Form</h3>
            <input type="text" placeholder="Enter Name" id="name" value={name} onChange={(event)=>setName(event.target.value)} />
            <br />
            <input type="text" placeholder="Enter Email" id="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
            <br />
            <input type="text" placeholder="Enter Age" id="age" value={age} onChange={(event)=>setAge(event.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>

        {
            submittedData && (
                <div>
                    <h3>Submitted Data</h3>
                    <p>Name:{submittedData.name} </p>
                    <p>Email: {submittedData.email}</p>
                    <p>Age:{submittedData.age}</p>
                </div>
            )
        }
    </div>)
}


export function UnControlledForm(){
    const roleRef=useRef("");
    const salaryRef=useRef("");
    const [submittedData, setSubmittedData]=useState(null);

    function handleUnSubmit(event){
        event.preventDefault();
        setSubmittedData({
            role:roleRef.current.value,
            salary:salaryRef.current.value
        })
        roleRef.current.value="";
        salaryRef.current.value="";
    }

    return(
        <div>
            <h3>Uncontrolled Form</h3>
            <form onSubmit={handleUnSubmit}>
                <input type="text" placeholder="Enter your Role" ref={roleRef} /><br />
                <input type="text" placeholder="Enter your Salary" ref={salaryRef} /><br />
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                    submittedData && (
                        <div>
                            <h3>Submitted Data</h3>
                            <p>Role:{submittedData.role}</p>
                            <p>Salary:{submittedData.salary}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}