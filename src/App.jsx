import MainLayout from "./features/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <div style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--text-main)' }}>
          Utilizador
        </h1>
        <p style={{ marginTop: '1rem' }}>Contenido del Layout verificado.</p>
      </div>
    </MainLayout>    
  )
}

export default App
