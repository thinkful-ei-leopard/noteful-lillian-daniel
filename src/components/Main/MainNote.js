import React from 'react';

function Note (props) {
    return (
        <li>
            <h3>{props.name}</h3>
            <button className='' type='submit'>Delete</button>
        </li>
    )
}

export default Note;