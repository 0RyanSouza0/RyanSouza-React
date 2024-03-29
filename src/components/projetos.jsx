import NavBar from './navbar.jsx';
import styles from './css/projetos.module.css'
import Fotter from './footer.jsx';
const github = "https://github.com/0RyanSouza0"


function Projetos(props){
    return(
        
        <>
         
         
            <div className={styles.card_projeto}>
                <div className={styles.img_projeto}>
                    <img src={props.imgProjeto} alt="" />
                </div>
                
                <div className={styles.informacoes_projeto}>
                    <h2>{props.tituloProjeto}</h2>

                    <p>{props.descricaoProjeto}</p>
                </div>

                <div className={styles.btn_informacoes}>
                    <a href={github} target='__blank'> Github</a>

                    <a href={props.link_projeto}  target='__blank' className={styles.btn_ver}>Ver </a>

                </div>
            </div>

           
          
           
         </>
    )
}
export default Projetos