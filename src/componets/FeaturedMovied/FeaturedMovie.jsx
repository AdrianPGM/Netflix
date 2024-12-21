import React from "react";
import './FeaturedMovie.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date)
    let genres = []

    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featered--vertical">
                <div className="featered--horizontal">
                    <div className="featered--name">{item.original_name}</div>
                    <div className="featered--info">
                        <div className="featered--points">{item.vote_average} pontos</div>
                        <div className="featered--year">{firstDate.getFullYear()}</div>
                        <div className="featered--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featered--description">{item.overview}</div>
                    <div className="featered--buttons">
                        <a href={`/watch/${item.id}`} className="featered--play">▶Assitir</a>
                        <a href={`/list/add/${item.id}`} className="featered--list">+ Minha Lista</a>
                    </div>
                    <div className="featered--genres"><strong>Genêros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section >
    )
}