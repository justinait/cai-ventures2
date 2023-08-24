import React from 'react'
import cai1 from '../../assets/images/cai1.jpeg'

function Services() {
  return (
    <div>
     <main>
        <section classname="servicios">
            <div classname="container">
                <h2 classname="color-text">¿Qué servicios ofrecemos?</h2>
                <div classname="row">
                    <div classname="col-12 col-lg-12">
                        <h3 classname="color-text">1. Tesis de grado</h3>
                        <p>Ofrecemos un servicio de acompañamiento completo para la elaboración de tesis de licenciatura, tesis de pregrado y tesinas. Nuestro apoyo abarca desde la construcción del planteamiento del problema, el marco teórico y el diseño metodológico, hasta el procesamiento de los datos, el análisis de resultados, las conclusiones y las referencias bibliográficas.</p>
                    </div>
                    
                    <div classname="col-12 col-lg-12">
                        <h3 classname="color-text">2. Tesis de postgrado</h3>
                        <p>Nos especializamos en brindar asesorías para tesis de Maestría y Posgrados en Ciencias Sociales, acompañando a la persona que realiza la tesis en todo su proceso.</p>
                    </div>
                </div>
            </div>

        </section>
        <section classname="carreras">
            <div>
                <img src={cai1.jpeg} alt="Mujer Estudiando" classname="img-ciencas-sociales"/>
            </div>
            <div>
            <div classname="container">
            <h2 classname="color-text">Nos enfocamos en asesorías de tesis de las carreras de:</h2>
                  
                    <ul>
                        <li>Contabilidad</li>
                        <li>Administración</li>
                        <li>Economia</li>
                        <li>Educación</li>
                        <li>Antropología</li>
                        <li>Psicología</li>
                        <li>Ingeniería industrial</li>
                    </ul>
                </div>
            </div>
        </section>
        
        
        
        <section className="asesorias">
            <div classname="container">
                <h2 classname="color-text title-card">¿Qué incluyen las asesorías?</h2>
                <div classname="row">
                    <div classname="col-12 col-md-6 col-lg-6 col-xl-6 cards">
                        <div><i classname="fa-regular fa-id-card color-text"></i></div>
                        <h3 classname="color-text">Asesoría integral</h3>
                        <p classname="color-text">Te apoyamos en cada paso, desde la elección del titulo de tu tesis hasta su finalización. Nuestro objetivo es ayudarte a superar con éxito el proceso de titulación.</p>
                    </div>
                    <div classname="col-12 col-md-6 col-lg-6 col-xl-6 cards">
                        <div><i classname="fa-solid fa-user-group color-text"></i></div>
                        <h3 classname="color-text">Asesoría profesionales</h3>
                        <p classname="color-text">Nuestro equipo de asesoramiento tiene una amplia experiencia y especialización en diversas áreas. Te proporcionaremos una asesoría personalizada según tus necesidades e intereses.</p>
                    </div>
                    <div classname="col-12 col-md-6 col-lg-6 col-xl-6 cards">
                        <div><i classname="fa-solid fa-book-open color-text"></i></div>
                        <h3 classname="color-text">Investigadores</h3>
                        <p classname="color-text">Contarás con el apoyo de un equipo de investigación que te asistirá en la búsqueda y obtención de información para tu tesis.</p>
                    </div> 
                    <div classname="col-12 col-md-6 col-lg-6 col-xl-6 cards">
                        <div><i classname="fa-solid fa-desktop color-text"></i>
                        </div>
                        <h3 classname="color-text">Plataforma virtual</h3>
                        <p classname="color-text">Cada etapa de tesis cuenta con módulos de apoyo donde aprenderas a elaborar y realizar tu trabajo de grado de la mejor manera.</p>
                    </div>
                    
                </div>
                </div>
               <a>AGENDAR REUNION</a>
            
        </section>

        <section className="etapas">
            <div classname="container">
                <h2>Nuestras etapas de asesorías</h2>
                <div className="row">
                    <div classname="col-12 col-lg-12">
                        <div><i classname="fa-regular fa-calendar-check"></i></div>
                        <h3>Plan de tesis</h3>
                        <p>Comenzaremos por definir el tema de tu tesis y el problema que investigaremos, utilizando las herramientas de investigación adecuadas. Luego, estableceremos el marco teórico de tu plan.</p>
                    </div>
                    <div classname="col-12 col-lg-12">
                        <div><i classname="fa-solid fa-pen-to-square"></i></div>
                        <h3>Borrador de Tesis</h3>
                        <p>Nos enfocamos en estructurar tu información y evaluamos los datos recopilados, así como las observaciones que pueda tener la persona asesora de la universidad. Concluimos con un diagnóstico y sugerencias para optimizar tu propuesta.</p>
                    </div>
                    <div classname="col-12 col-lg-12">
                        <div><i classname="fa-solid fa-person-chalkboard"></i></div>
                        <h3>Sustentación</h3>
                        <p>Te preparamos para la etapa final en la que corregiremos los detalles finales de tu sustentación junto a nuestro equipo especializado. Además, te brindamos apoyo en la creación de los dispositivos necesarios.</p>
                    </div>
                </div>
            </div>
        </section>

    
    </main>
    </div>

  )
}

export default Services