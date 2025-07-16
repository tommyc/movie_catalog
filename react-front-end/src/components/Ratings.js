import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ratings = () => {

    const [ratings, setRatings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type","application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`${process.env.REACT_APP_BACKEND}/ratings`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if(data.error) {
                setError(data.message)
            } else {
                setRatings(data);
            }
        })
        .catch(err => {console.log(err)})
    },[])
    if (error !== null) {
        return <div>{error.message}</div>
    } else {
    return(
        <div>
            <h2>Ratings</h2>
            <hr />
            <div className="list-group">
                {ratings.map((r) => (
                    <Link
                    key={r.rating}
                    className="list-group-item list-group-item-action"
                    to={`/rating/${r.rating}`}
                    state={
                        {
                            ratingName: r.rating,
                        }
                    }
                    ><span key={r.rating} className="badge rounded-pill bg-primary me-2">{r.movie_count}</span> {r.rating} </Link>
                ))}
            </div>
        </div>
    )}
}

export default Ratings;
