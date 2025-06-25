import React, { useState } from 'react';
import Layout from '../layout';
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
const [hovered, setHovered] = useState(false)

  return (
    <Layout title={"Dashboard"}>
      <div style={styles.containerWrapper}>
        <div style={styles.container}>
          <h1 style={styles.title}>Olá, sou o Nicollas Delgado</h1>
          <h2 style={styles.subTitle}>Desenvolvedor de Front-End | Desenvolvedor de Back-End</h2>
          <p style={styles.text}>
            Bem vindo ao meu dashboard! Aqui você encontrará informações sobre meus projetos, 
            habilidades e muito mais. 
            Sinta-se à vontade para explorar e conhecer melhor meu trabalho.
          </p>
        <button
            style={{...styles.button,
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hovered
               ? '0 6px 16px rgba(1, 196, 255, 0.86)'
               : '0 4px 12px #000000',
            }}
            onClick={() => navigate('/profile')}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Explorar o Portfólio
          </button>


          <div style={styles.socialContainer}>
            <a href="https://github.com/NicollasDelgado/" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                alt="GitHub" 
                style={styles.socialIcon} 
              />
            </a>

            <a href="https://www.linkedin.com/in/nicollas-delgado/" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="LinkedIn" 
                style={styles.socialIcon} 
              />
            </a>

            <a href="https://www.instagram.com/nicollas_delgado/" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
                alt="Instagram" 
                style={styles.socialIcon} 
              />
            </a>
          </div>
          
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  containerWrapper: {
    padding: '4px',
    borderRadius: '30px',
    background: 'linear-gradient(270deg, #fff,  #00f7ff, #0112ac, #00a8ad)',
    backgroundSize: '600% 600%',
    animation: 'gradientAnimati 10s ease infinite',
    display: 'inline-block',
  },
  container: {
    display: 'flex',
    flex: '1',
    maxWidth: '600px',
    flexDirection: 'column',
    padding: '50px',
    gap: '25px',
    alignItems: 'flex-start',
    borderRadius: '25px',
    background: '#000000cc',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 700,
    margin: 0,
    background: 'linear-gradient(135deg, #fff, #00f7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'left',
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.3rem',
    fontWeight: 400,
    margin: 0,
    textAlign: 'left',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.1rem',
    margin: 0,
    textAlign: 'left',
  },
  button: {
    padding: '14px 24px',
    background: 'linear-gradient(135deg, #e6e6e6, #00f7ff)',
    color: '#000',
    fontWeight: 600,
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '10px',
    marginTop: '10px',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 12px #000000',
  },
  socialContainer: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  socialLink: {
    display: 'inline-block',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    filter: 'brightness(0) invert(1)'
  },
}

export { Home }
