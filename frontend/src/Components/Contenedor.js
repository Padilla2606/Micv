
import { Secciones } from "../SubComponents/Secciones"
import { Cartas } from "../SubComponents/Cartas"
import Imagenes from "../Imagenes/Imagenes"

export const Contenedor = ()=>{
    return(
        <>
        
        <Secciones url={Imagenes.myimage} titulo="Yoiler Adonis Padilla Rios" parrafo="Edad: 21 años" parrafo2="Resido En: Montevideo, Uruguay" parrafo3="Contacto: 096238818 / 097605531  yoilerADONIS@hotmail.com"/>

        <Secciones titulo="Sobre mi:" parrafo="Soy un apasionado programador con formación en ingeniería de sistemas, aunque mi educación formal no está completa, mi entusiasmo por la tecnología y el desarrollo de software ha sido constante. he tenido el privilegio de explorar diversas áreas de la programación, lo que me ha permitido adquirir un conjunto variado de habilidades.

Mi formación en la Universidad Gran Mariscal de Ayacucho en Puerto Ordaz, Venezuela, sentó las bases para mi carrera en la tecnología. Aunque no culminé la carrera, mi pasión por la programación me llevó a buscar oportunidades de aprendizaje y crecimiento por mi cuenta. He invertido tiempo y esfuerzo en desarrollar mis habilidades como programador, participando en proyectos personales y colaborativos que me han brindado una experiencia valiosa.

Mi mudanza a Montevideo, Uruguay, ha sido una nueva oportunidad para seguir creciendo profesionalmente. Me considero un individuo motivado y autoaprendizaje, siempre en busca de desafíos que me permitan expandir mis conocimientos y habilidades en el mundo del desarrollo de software. Mi objetivo es seguir creciendo como programador y contribuir de manera significativa en proyectos innovadores que impulsen el progreso tecnológico."/>
        
        <Cartas/>
        </>
    )
}