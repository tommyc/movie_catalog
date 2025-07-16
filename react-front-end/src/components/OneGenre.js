import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom"


const OneGenre = () => {
    // we need to get the prop passed to this component
    const location = useLocation();
    const {genreName} = location.state;

    // set statefull variables
    const [movies, setMovies] = useState([])

    // get the id from the url
    let { id } = useParams();

    // useeffect to get list of movies
    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type","application/json")

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`${process.env.REACT_APP_BACKEND}/movies/genres/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                console.log(data.message);
            } else {
                setMovies(data); 
            }
        })
        .catch(err => {console.log(err)});
    },[id])

    // return jsx
    return (
        <>
            <h2>{genreName} movies</h2>

            <hr />
            {movies ? (
            <table className="table table-stripped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link
                                to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{new Date(m.release_date).toLocaleDateString('en-US',{timeZone: 'UTC'})}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <p>No movies in this genre (yet)</p>
            )}
        </>
    )
}

export default OneGenre;