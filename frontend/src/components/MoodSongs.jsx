import React from 'react'
import { useState } from 'react'

const MoodSongs = () => {


    const [ Songs, setSongs ] = useState([
        {
            title: "test_title",
            artist: "test_artist",
            url: "test_url",
        },
        {
            title: "test_title",
            artist: "test_artist",
            url: "test_url",
        },
        {
            title: "test_title",
            artist: "test_artist",
            url: "test_url",
        },
    ])


    return (
        <div className='mood-songs text-zinc-300 flex flex-col items-center gap-10 mt-10 w-full'>
            <h2 className='text-5xl font-bold'>Recommended Songs</h2>

            {Songs.map((song, index) => (
                <div className='song flex justify-around w-full' key={index}>
                    <div className="title">
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                    <div className="play-pause-button">
                        <i className="ri-pause-line"></i>
                        <i className="ri-play-circle-fill"></i>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default MoodSongs