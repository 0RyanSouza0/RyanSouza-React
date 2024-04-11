import styles from './css/footer.module.css'
import { FaGithub } from 'react-icons/fa';
const github= "https://github.com/santos-vinicius"
function Fotter(){
    return(
        <div className={styles.align_footer}>
            <p>@ 2024 Ryan Souza </p>
            <p>Design: Vinicius Santos <a href={github}><FaGithub className={styles.icon_footer}> </FaGithub></a> </p>
        </div>
    )
}
export default Fotter;