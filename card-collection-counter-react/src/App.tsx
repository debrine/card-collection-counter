import AppRoutes from './Routes';

function App() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
      <AppRoutes />
    </div>
  );
}

export default App;
