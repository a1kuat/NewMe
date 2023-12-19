import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import CryptoJS from 'crypto-js';
import StyledSearchForm from '../../Components/Series/StyledSearchForm';
import StyledInput from '../../Components/Series/StyledInput';
import StyledButton from '../../Components/Series/StyledButton';
import StyledDiv from '../../Components/Series/StyledDiv';
import SeriesContainer from '../../Components/Series/SeriesContainer';
import SeriesCard from '../../Components/Series/SeriesCard';
import SeriesCaption from '../../Components/Series/SeriesCaption';
import StyledCardMedia from '../../Components/Series/StyledCardMedia';
import { SeriesData } from '../../Components/Series/SeriesData';
import LoadingPage from '../LoadingPage';
import { getConfigValue } from '@ijl/cli';

const publicKey = getConfigValue("NewMe.apiPublicKey");
const privateKey =  getConfigValue("NewMe.apiPrivateKey");
const baseUrl = getConfigValue("NewMe.apiBaseUrl");
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const SeriesPage = () => {
  const navigate = useNavigate();
  const [series, setSeries] = useState<SeriesData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSeriesClick = (series: SeriesData) => {
    navigate(`/series/${series.id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handleReset = (event) => {
    event.preventDefault();
    setSearchTerm('');
    setSeries([]);
  };
 
  const handleGet = (event) => {
    event.preventDefault();
    fetchSeries(searchTerm);
  };
 
  const fetchSeries = async (searchTerm = '') => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/series?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=20&titleStartsWith=${searchTerm}`);
      console.log(`${baseUrl}/series?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=20&titleStartsWith=${searchTerm}`);
      const data = await response.json();
      setSeries(data.data.results);
    } catch (error) {
      console.error('Error fetching series:', error);
    } finally {
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
    fetchSeries();
  }, []);
  
  if (isLoading) {
    return <LoadingPage/>;
  }

  return (
    <StyledDiv>
      <StyledSearchForm>
     <StyledInput value={searchTerm} onChange={handleSearch} placeholder="Enter series name"/>
     <div>
       <StyledButton type= 'submit' onClick={handleGet}>Get</StyledButton>
       <StyledButton type= 'submit' className='reset' onClick={handleReset}>Reset</StyledButton>
     </div>
   </StyledSearchForm>
    {series.length > 0 && ( 
        <SeriesContainer>
          {series.map(series => (
            <SeriesCard key={series.id} onClick={() => handleSeriesClick(series)}>
              <StyledCardMedia
                image={`${series.thumbnail.path}.${series.thumbnail.extension}`}
              />
              <SeriesCaption>{series.title}</SeriesCaption>
            </SeriesCard>
          ))}
        </SeriesContainer>
      )}
    </StyledDiv>
  );
};

export default SeriesPage;
