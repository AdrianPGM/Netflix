import React, { useState } from "react";
import './MovieRow.css'
import Next from '../../assets/next.svg'
import Before from '../../assets/before.svg'


export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0)

    const handleNext = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 250
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    const handleBefore = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)

        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--next" onClick={handleNext}>
                <img src={Next} alt="" style={{ width: 50 }} />
            </div>

            <div className="movieRow--before" onClick={handleBefore}>
                <img src={Before} alt="" style={{ width: 50 }} />
            </div>

            <div className="movieRow--left"></div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}