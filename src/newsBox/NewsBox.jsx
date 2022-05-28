import React from 'react';
import './NewsBox.css'
const NewsBox = () => {
    return (
        <div className='newsBox'>
            <div className="newsElement">
                <img
                    src="./images/1.jpg"
                    alt=""
                />
            </div>
            <div className="newsElement">
                <img
                    src="./images/2.jpg"
                    alt=""
                />
            </div>
            <div className="newsElement">
                <img
                    src="./images/3.jpg"
                    alt=""
                />
            </div>
            <div className="descMore">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <a href="https://amineichou.github.io/amineichou-portfolio">More to discover</a>
            </div>
        </div>
    );
}

export default NewsBox;
