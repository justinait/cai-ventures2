import './service3.css';
const Service3 = () => {

    return (
        <section className="servicesThreeContainer">
            <h2>Nuestras etapas de asesorías</h2>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <i className="fa-regular fa-calendar-check"></i>
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Plan de tesis</h3>
                    <p>Comenzaremos por definir el tema de tu tesis y el problema que investigaremos, utilizando las herramientas de investigación adecuadas. Luego, estableceremos el marco teórico de tu plan.</p>
                </div>
            </div>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <i className="fa-solid fa-pen-to-square"></i>
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Borrador de Tesis</h3>
                    <p>Nos enfocamos en estructurar tu información y evaluamos los datos recopilados, así como las observaciones que pueda tener la persona asesora de la universidad. Concluimos con un diagnóstico y sugerencias para optimizar tu propuesta.</p>
                </div>
            </div>
            <div className='cardServicesChildren'>
                <div className='containerIconsServices'>
                    <i className="fa-solid fa-person-chalkboard"></i>
                </div>
                <div className='infoServiceBox'>
                    <h3 className='title-services'>Sustentación</h3>
                    <p>Te preparamos para la etapa final en la que corregiremos los detalles finales de tu sustentación junto a nuestro equipo especializado. Además, te brindamos apoyo en la creación de los dispositivos necesarios.</p>
                </div>
            </div>
        </section>
    );
}
export default Service3;