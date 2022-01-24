import './styles.css'

function Form(){

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="cinerama-form-container">
        <img className="cinerama-movie-card-image" src={movie.image} alt={movie.title}/>
        <div className="cinerama-card-bottom-container">
            <h3>{movie.title}</h3>
            <form className="cinerama-form">
                <div className="form-group cinerama-form-group">
                    <label htmlFor="email">Informe seu email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group cinerama-form-group">
                    <label htmlFor="score">Informe sua avaliação</label>
                    <select className="form-control" id="score">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="cinerama-form-btn-container">
                    <button type="submit" className="btn btn-primary cinerama-btn">Salvar</button>
                </div>
            </form >
            <button className="btn btn-primary cinerama-btn mt-3">Cancelar</button>
        </div >
    </div >
    );
}

export default Form;