import './App.css';
import Footer from './footer/Footer';
import NewsBox from './newsBox/NewsBox';
import WeatherBox from './weatherBox/WeatherBox';

const App = () => {
  return (
    <>
      <div className="App">
        <WeatherBox />
        <NewsBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
