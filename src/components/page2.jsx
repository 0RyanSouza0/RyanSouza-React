import Projetos from "./projetos";
import styles from './css/page2.module.css'
import logo from '../logo.svg';
import img from './img/perfilgithub.png'

const desc =<><p>Lorem ipsum, dolor sit amet consectetur adipisicing
 elit. Possimus ut tenetur sunt id at sequi rerum facere a dolor quidem.</p></>

 const title = <><h2>Ryan</h2></>

 const desc2 =<><p>Lorem ipsum, dolor sit amet consectetur adipisicing
 elit. Possimus ut tenetur sunt id at sequi rerum facere a dolor quidem.</p></>

 const title2 = <><h2>Ryan</h2></>

 const desc3 =<><p>Lorem ipsum, dolor sit amet consectetur adipisicing
 elit. Possimus ut tenetur sunt id at sequi rerum facere a dolor quidem.</p></>

 const title3 = <><h2>Ryan</h2></>
 
function Page2(){
    return(
        <div className={styles.align_projeto}>
           <h2>Hobby,estudos e open-soource</h2>
           <Projetos imgProjeto={img} tituloProjeto={title} descricaoProjeto={desc}    ></Projetos>
            <Projetos imgProjeto={logo} tituloProjeto={title2}  descricaoProjeto={desc2} ></Projetos>
            <Projetos imgProjeto={img}  tituloProjeto={title3}  descricaoProjeto={desc3} ></Projetos>
      
        </div>
    )
}
export default Page2