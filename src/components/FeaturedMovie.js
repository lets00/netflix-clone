import React from 'react'
import './FeaturedMovie.css'

export default function FeaturedMovie({ item }) {
    const getYear = new Date(item.first_air_date).getFullYear()

    const getGenres = () => {
        let genres = []
        item.genres.forEach(element => genres.push(element.name));
        return genres.join(', ')
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{item.vote_averege}</div>
                        <div className="featured-year">{getYear}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured-description">{item.overview}</div>
                    <div className="featured-buttons">
                        <a href={`/watch/${item.id}`} className="featured-watchbutton">► Assistir</a>
                        <a href={`/list/${item.id}`} className="featured-listbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured-genres"><strong>Gêneros: </strong>{getGenres()}</div>
                </div>
            </div>
        </section>
    )
}
