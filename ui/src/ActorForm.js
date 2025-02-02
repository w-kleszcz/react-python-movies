import {useState} from "react";

export default function ActorForm(props) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');

    function addActor(event) {
        event.preventDefault();
        //props.onActorSubmit({name, surname});
        const actorData = {
            name,
            surname,
            movieId: selectedMovie, // Include the selected movie ID
        };
        props.onActorSubmit(actorData);
        setName('');
        setSurname('');
        setSelectedMovie('');
    }

    return <form onSubmit={addActor}>
        <h2>Add actor</h2>
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <label>Surname</label>
            <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)}/>
        </div>
        <div>
            <label>Assign to Movie</label>
            <select
                value={selectedMovie}
                onChange={(event) => setSelectedMovie(event.target.value)}
            >
                <option value="">Select a movie</option>
                {props.movies.map((movie) => (
                    <option key={movie.id} value={movie.id}>
                        {movie.title}
                    </option>
                ))}
            </select>
        </div>
        <button>{props.buttonLabel || 'Submit'}</button>
    </form>;
}
