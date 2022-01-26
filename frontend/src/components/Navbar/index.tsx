import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'
function Navbar(){

    return(
        <header>
        <nav className="container">
            <div className="cinerama-nav-content">
                <h1>Cinerama</h1>
                <a href="https://github.com/wgustavosantos/cinerama" target="_blank" rel="noreferrer">
                    <div className="cinerama-contact-container">
                        <GithubIcon />
                        <p className="cinerama-contact-link">/Cinerama on GitHub</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
      );
}

export default Navbar;