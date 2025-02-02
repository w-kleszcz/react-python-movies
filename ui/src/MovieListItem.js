export default function MovieListItem(props) {
    return (
        <div>
            <div>
                <strong>{props.movie.title}</strong>
                {' '}
                <span>({props.movie.year})</span>
                {' '}
                directed by {props.movie.director}
                {' '}
                <a onClick={props.onDelete}>Delete</a>
                <p>
                    <strong>Actors: </strong>
                    {props.movie.actors.length > 0 ? (
                        props.movie.actors.map((actor, index) => (
                            <span key={actor.id}>
                                {actor.name} {actor.surname}
                                {index < props.movie.actors.length - 1 ? ', ' : ''}
                            </span>
                        ))
                    ) : (
                        <span> No actors assigned</span>
                    )}
                </p>
            </div>
            <p>{props.movie.description}</p>
        </div>
    );
}