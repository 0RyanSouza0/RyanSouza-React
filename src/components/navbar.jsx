import styles from './css/navbar.module.css';
import { FaGithub,FaLinkedin,FaWhatsapp } from "react-icons/fa";
import Projetos from './projetos';
function NavBar(){

    return(
        <div className={styles.nav}>
            <nav>
                <div className={styles.nome}><a href=''>RyanSouza.dev</a></div>
                <ul>
                    <li><a href='./projetos.jsx'>Projetos</a></li>
                    <li><a href="" className={styles.btn_contato}>Contato</a></li>
                </ul>
            </nav>
            
        </div>
    )
}
export default NavBar