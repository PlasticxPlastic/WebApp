import React from 'react'
import '../style/VoteButton.css'


export default function Button({ parentCallback, countVote, textBtn }) {

    const UpVote = () => {
        parentCallback(countVote + 1)
    }
    const DownVote = () => {
        parentCallback(countVote - 1)
    }
    return (
        <div className='button-container'>
            <button className='button' onClick={UpVote}>Click to Vote</button>
            <div className='display-vote'>{textBtn}</div>
            <button className='button' onClick={DownVote}>Click to Unvote</button>
        </div>
    )
}