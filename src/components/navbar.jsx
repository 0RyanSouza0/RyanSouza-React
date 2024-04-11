import styles from './css/navbar.module.css';
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import Projetos from './projetos';
import { Link,BrowserRouter, Routes } from 'react-router-dom';
import Page2 from './page2';
import Rotas from './rotas';
function NavBar(){

    return(
        <div className={styles.nav}>
            <nav>
                <div className={styles.nome}><a href=''>RyanSouza.dev</a></div>
                <ul>

                    <li>    
                        <BrowserRouter>
                            <Link to="./page2" >Projetos</Link>
                        </BrowserRouter>
                    </li>

                    <li><a href="#contato" className={styles.btn_contato}>Contato</a></li>
                </ul>
            </nav>
            
        </div>
    )
}
export default NavBar