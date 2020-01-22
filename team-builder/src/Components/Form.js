import React, {useState} from 'react'

export default function Form(props) {

    const [form, setForm] =useState({name: '', email: '', role: ''})

    const handleChanges = e =>{
        setForm({name: e.target.value,
                email: e.target.value,
                role: e.target.value
            });
            console.log(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault();
        props.addNewMate(form);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    type="text"
                    onChange={handleChanges}
                    name="title"
                />
                <label htmlFor="email">E-Mail: </label>
                <input 
                    id="email"
                    type="email"
                    onChange={handleChanges}
                    name="email"
                />
                <label htmlFor="role">Role: </label>
                <input
                    id="role"
                    type="text"  
                    onChange={handleChanges}
                    name="role"
                />
                <button type="submit">Add Teammate</button>
            </form>
        </div>
    )
}
