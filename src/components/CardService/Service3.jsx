import './service3.css';
import planTesisImage from '../../assets/icons/icon-park-outline_plan.png';
import borrarTesisImage from '../../assets/icons/bx_edit.png';
import sustenTesisImage from '../../assets/icons/mdi_teach-poll.png';

const Service3 = () => {

    return (
        <section className="servicesThreeContainer">
            <h2>Nuestras etapas de asesorías</h2>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <img className='imgSerTr' src={planTesisImage} alt="icono calendario con un check" />
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Plan de tesis</h3>
                    <p className='textSerTres'>Comenzaremos por definir el tema de tu tesis y el problema que investigaremos, utilizando las herramientas de investigación adecuadas. Luego, estableceremos el marco teórico de tu plan.</p>
                </div>
            </div>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <img className='imgSerTr' src={borrarTesisImage} alt="icono de un lapiz y una hoja" />
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Borrador de Tesis</h3>
                    <p className='textSerTres'>Nos enfocamos en estructurar tu información y evaluamos los datos recopilados, así como las observaciones que pueda tener la persona asesora de la universidad. Concluimos con un diagnóstico y sugerencias para optimizar tu propuesta.</p>
                </div>
            </div>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <img className='imgSerTr' src={sustenTesisImage} alt="icono de teach-poll" />
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Sustentación</h3>
                    <p className='textSerTres'>Te preparamos para la etapa final en la que corregiremos los detalles finales de tu sustentación junto a nuestro equipo especializado. Además, te brindamos apoyo en la creación de los dispositivos necesarios.</p>
                </div>
            </div>
        </section>
    );
}
export default Service3;