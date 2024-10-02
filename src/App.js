import './App.css';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  return (
    <main className='min-h-screen bg-cream flex flex-col font-sans items-center px-4 justify-center'>
      <Title />
      <Chart />
      <Footer />
    </main>
  );
}

export default App;
