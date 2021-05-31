/** this component will need to dynamically figure out 
 * which Movie it should render 
 * 
*/
import { useParams } from "react-router-dom";

// Here we add `match` to the arguments so we can
// acces the path information in `routerProps` that
// is passed from MoviesPage.js
function MovieShow({ movies }) {
    // call useParams to access the `params` from the url:
    // the dynamic portion of our /movies/:movieId path
    const params = useParams();
    console.log(`useParams returns an object of key/value pairs of URL parameters; \nin the current component, we have only one parameter, movieId; \ninvoking useParams() in this component yields: `)
    console.log(params);

    return (
        <div>
            {/* 
                And here we access the `movieId` stored in `params`
                to render information about the selected movie
            */}
            <h3>{movies[params.movieId].title}</h3>
        </div>
    );
}

export default MovieShow;
