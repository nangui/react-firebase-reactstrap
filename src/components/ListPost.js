import React from 'react'

export default function ListPost (props) {
    return <div>
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
        <p>{props.post.createAt}</p>
    </div>
}