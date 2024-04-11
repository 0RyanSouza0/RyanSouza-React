import styles from './css/main.module.css';
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import foto from './img/perfilgithub.png'

const github = "https://github.com/0RyanSouza0"
const linkedin = "https://www.linkedin.com/in/ryan-dias-367813300/"
const instagram = "https://www.instagram.com/ryan__souza/"


function Main(){
    return(

        <div className={styles.align_main} id='contato'>
            <div className={styles.img}>
                <img src={foto} alt="" />
            </div>
            <div className={styles.align_info}>
                <div className={styles.cargo}>
                    <p className={styles.nome}>Ryan Souza</p>
                    <p className={styles.funcao}>Desenvolvedor Web|Front-End Júnior</p>
                </div>

                <div className={styles.sobre}>
                    <p className={styles.desc}>Sou estudante de Analise e Desevolvimento de Sistemas, estou me especializando em diversas linguagens para me tornar um <span>Full-Stack Developer.</span>  
                    </p>
                </div>


                <div className={styles.redes_sociais} >
                    <a href={github} className={styles.social_link} target='__blank' ><FaGithub className={styles.icon}></FaGithub></a>
                    <a href={linkedin} className={styles.social_link} target='__blank'><FaLinkedin className={styles.icon}></FaLinkedin></a>
                    <a href={instagram} className={styles.social_link} target='__blank'><FaInstagram className={styles.icon}></FaInstagram></a>
                </div>


            </div>
        </div>
    )
}
export default Main;