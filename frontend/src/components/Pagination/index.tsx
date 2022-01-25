import {ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="cinerama-pagination-container">
            <div className="cinerama-pagination-box">
                <button className="cinerama-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="cinerama-pagination-button" disabled={false} >
                    <Arrow className="cinerama-flip-horizontal" />
                </button>
            </div>
        </div>

    );
}

export default Pagination;