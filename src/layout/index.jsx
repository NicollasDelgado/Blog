import React from 'react'

const Layout = ({ children, title }) => {
  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div style={styles.container}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    flex: 1,
    background: 'linear-gradient(135deg,rgb(5, 226, 255), #000000, #9e9e9e)',
    backgroundSize: '300% 300%',
    backgroundPosition: '0% 50%', // <-- ESSENCIAL para a animação funcionar
    animation: 'gradientBG 15s ease infinite',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    maxWidth: '600px',
    width: '100%',
  },
}

export { Layout }
