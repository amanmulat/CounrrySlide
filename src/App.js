import { useEffect, useState } from 'react';
import './App.css';

import CountrySlides from './component/CountrySlides';
import Navigation from './component/Navigation';
import Spinner from './component/Spinner';
function App() {
  const [begining, setbegining] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentRegion, setCurrentRegion] = useState("all")
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  
  const FilterWord = (region) => {
    setUrl(`https://restcountries.com/v3.1/${region}`)
    setCurrentRegion(region)
  }
  const [countries, setCountries] = useState([])

  const fetchCountries = async (url) => {
      setIsLoading(true)
      fetch(url)
      .then ( res => {
        if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`);
      } else {
          return res.json();
      }
      }).then(res => {
            setCountries(res)
            setIsLoading(false)
      })
  }
  
    useEffect(() => {
      fetchCountries(url)
      setbegining(0)

    }, [url])
  return (
    <div className="App">
     
      <Navigation FilterWord={FilterWord} currentRegion = {currentRegion} />
      {isLoading ? <Spinner />
        : <CountrySlides slides={countries} begining={begining} />}
     
     
    </div>
  );
}

export default App;
