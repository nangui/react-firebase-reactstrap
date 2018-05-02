import React from 'react'
import renderHTML from 'react-render-html'

export default function ListPost (props) {
    return <div>
        <h2>{props.post.title}</h2>
        <div>{renderHTML(props.post.body)}</div>
        <p>{props.post.createAt}</p>
    </div>
}