import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Hero = ({ searchTerm }) => {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, SetLoading] = useState(null);
    const [errors, SetErrors] = useState(false);

    async function getData() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
            }
        };

        try {
            SetLoading(true);
            const endpoint = searchTerm
                ? `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`
                : 'https://api.themoviedb.org/3/discover/movie';

            const data = await fetch(endpoint, options);
            if (!data.ok) {
                SetLoading(false);
                SetErrors("Cannot find input data")
                throw new Error("Bad connection request: cannot get data");

            }

            const requiredData = await data.json();
            setMoviesData(requiredData.results);
        } catch (err) {
            console.log("Failed to get the data:", err);
        }
        finally {
            SetLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [searchTerm]);

    return (
        <div className="hero-section">

            <h2 className="section-title">Trending Movies</h2>
            
            {loading && <Spinner/>}
            {errors && <div>
                <h3>{errors}</h3>
            </div>}
            <div className="movie-container">
                {moviesData.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                            className="movie-image"
                        />
                        <div className="movie-body">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview ? movie.overview.slice(0, 100) + "..." : ""}</p>
                            <p style={{ color: "yellow" }}>ratings :  <strong style={{ fontWeight: "bolder" }}>{movie.vote_average.toFixed(2)}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
