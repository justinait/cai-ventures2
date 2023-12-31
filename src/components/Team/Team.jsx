// import React from 'react'
import Vanesa from '../../assets/cofounder.png'
import Yuli from '../../assets/yuli2.jpg'
import './Team.css'

function Team() {
    return (
        <>
            <div style={{ textAlign: 'center' }} className='titleTeam'>Equipo</div>
            <div className='teamContainer'>
                <div className='personContainer'>
                    <img src={Yuli} alt="Yuli Yasmina Soria Mendoza" />
                    <div className='infoPerson personFounder'>
                        <h5>Yuli Yasmina Soria Mendoza</h5>
                        <p>CEO & FOUNDER</p>
                        <p>Dos años de experiencia en formulación de proyectos y
                            tres años de experiencia como especialista en metodología
                            de investigación y estadística.</p>
                    </div>
                </div>
                <div className='personContainer'>
                    <img src={Vanesa} alt="Vanesa Rimache Salcedo" />
                    <div className='infoPerson personCoFounder'>
                        <h5>Vanesa Rimache Salcedo</h5>
                        <p>COFOUNDER</p>
                        <p>Tres años de experiencia en Banca y Finanzas,
                            dos años de experiencia como especialista en investigación.  </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team