import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Comp2() {
  return (
    <div className='text-rigth py-3 px-5'>
        <img 
        src="https://via.placeholder.com/150"
        alt="Imagen circular"
        className='rounded-circle progress-bar'
        />
        <div className="ms-3 text-rigth">
            <p className="text-center">Juan Pérez</p>
        </div>
        <div className="d-flex justify-content-center mt-4">
            
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaGithub size={40} />
            </a>
            
            
            <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaLinkedin size={40} />
            </a>
            
            
            <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="mx-3">
                <FaTwitter size={40} />
            </a>
        </div>
        
  </div>
      
  )
}

export default Comp2
