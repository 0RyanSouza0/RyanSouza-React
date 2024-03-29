import { FaPhp,FaJs,FaSql,FaReact } from "react-icons/fa";
import styles from './css/descricao.module.css';

function clique(){
    
    const react= document.getElementById('react')

    react.addEventListener('click',()=>{
        react.style.background="red"
        console.log("oi")
    })
    
}

function Descricao(){

    return(
        <div className={styles.align_sobre_mim}>

            <div className={styles.descricao}>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ex tempore asperiores optio vitae iusto magnam, possimus animi dolore, assumenda officiis atque quasi ut reiciendis repudiandae, tempora consectetur quia! Quibusdam dolorem est numquam 
                at unde tenetur repellendus soluta inventore consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi optio accusamus, nobis ea impedit itaque tempore consectetur excepturi culpa officia!
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
                    <a href="" className={styles.social_link}><FaReact className={styles.icon}></FaReact></a>
                    <a href="" className={styles.social_link}><FaJs className={styles.icon}></FaJs></a>
                    <a href="" className={styles.social_link}><FaPhp className={styles.icon}></FaPhp></a>
                    
                </div>
            </div>
        </div>

    )

}

export default Descricao;