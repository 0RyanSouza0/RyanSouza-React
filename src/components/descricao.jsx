import { FaPhp,FaJs,FaHtml5,FaReact,FaCss3Alt,FaPython} from "react-icons/fa";
import styles from './css/descricao.module.css';



function Descricao(){

    return(
        <div className={styles.align_sobre_mim}>

            <div className={styles.descricao}>
                <h2>Sobre mim</h2>
                <p>Sou estudante de Analise e Desenvolvimento de Sistemas na Fatec Ferraz de Vasconcelos, porém em 2022 cursei Desenvolvimento de Sistemas na Etec Guaianases, onde descobri de fato meu interesse e amor pela programação
                </p>
            </div>
            
            <div className={styles.conhecimentos}>
                <h2 >Stacks</h2>
                <div className={styles.linha}>
                    <a href=""  className={styles.social_link} ><FaReact className={styles.icon}></FaReact></a>
                    <a href="" className={styles.social_link}><FaJs className={styles.icon}></FaJs></a>
                    <a href="" className={styles.social_link}><FaPhp className={styles.icon}></FaPhp></a>
                </div>
                <div className={styles.linha}>
                    <a href="" className={styles.social_link}><FaCss3Alt className={styles.icon}></FaCss3Alt></a>
                    <a href="" className={styles.social_link}><FaHtml5 className={styles.icon}></FaHtml5></a>
                    <a href="" className={styles.social_link}><FaPython className={styles.icon}></FaPython></a>
                    
                </div>
            </div>
        </div>

    )

}

export default Descricao;