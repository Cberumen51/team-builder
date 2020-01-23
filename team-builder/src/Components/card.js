import React from 'react'
import Form from './Form'

export default function card(props) {
    const {team} = props
    return (
        <div className="card">
            <p>{team.name}</p>
            <p>{team.email}</p>
            <p>{team.role}</p>
        </div>
    )
}
