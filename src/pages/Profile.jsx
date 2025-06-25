import React from 'react'
import Layout from '../layout';

function Profile() {
  return(
    <Layout>
        <div style={styles.containerWrapper}></div>
        <div style={styles.container}>
          <div style={styles.avatarSection}></div>
           <img src="https://avatars.githubusercontent.com/u/184513984?s=400&u=7a7e40205732c4fd08a1723856cf5369c59fbba5&v=4" alt="" style={styles.avatar}  />
           <div>
            <p style={styles.Text}>
              Tenho paixão por tecnologia e programação, sempre buscando aprender e compartilhar conhecimento, 
              Estou estudando para me tornar um desenvolvedor Full Stack, desenvolvedor de React, JavaScritp, Node.js e Python.
            </p>
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
  avatarSection: {
    display: 'flex',
    flex:  '0 0 200px',
    justifyContent: 'center',
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(225, 225, 225, 0.2)',
  },
  Text:
  { color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.1rem',
    margin: 0,
    textAlign: 'left',}
}
  
export { Profile }