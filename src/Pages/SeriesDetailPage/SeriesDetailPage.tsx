import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {CardContent,  Typography , CardMedia} from '@mui/material';
import CryptoJS from 'crypto-js';
import SeriesCard from '../../Components/SeriesDetail/SeriesCard';
import { SeriesData } from '../../Components/Series/SeriesData';
import LoadingPage from '../LoadingPage';
import StyledDiv from '../../Components/SeriesDetail/StyledDiv';
import { getConfigValue } from '@ijl/cli';

const publicKey = getConfigValue("NewMe.apiPublicKey");
const privateKey =  getConfigValue("NewMe.apiPrivateKey");
const baseUrl = getConfigValue("NewMe.apiBaseUrl");
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const SeriesDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesData | null>(null);

  useEffect(() => {
    fetch(`${baseUrl}/series/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`)
      .then(response => response.json())
      .then(data => setSeries(data.data.results[0]));
  }, [id]);

  if (!series) {
    return <LoadingPage/>;
  }

  return (
    <StyledDiv>
        <SeriesCard >
          <CardMedia
            component="img"
            image={(`${series.thumbnail.path}.${series.thumbnail.extension}`)}
            alt={series.title}/>
          <CardContent style={{ width: '50%' }}> 
            <Typography variant="h4" sx={{ backgroundColor: "black",color: 'white', fontWeight: 'bold' , fontFamily: '"Bangers", cursive' }}>{series.title}</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 , backgroundColor: "black",color: 'white', fontWeight: 'underline' , fontFamily: '"Bangers", cursive'}} >Description: {series.description ? series.description : 'Unknown'}</Typography>
            <Typography variant="h6" sx={{ marginTop: 2 , backgroundColor: "black",color: 'white', fontFamily: 'Courier New, monospace'}} >Start year: {series.startYear ? series.startYear : 'Unknown'}</Typography>
            <Typography variant="h6" sx={{backgroundColor: "black",color: 'white', fontFamily: 'Courier New, monospace'}}>End year: {series.endYear ? series.endYear : 'Unknown'}</Typography>
            <Typography variant="h6" sx={{ backgroundColor: "black",color: 'white' , fontFamily: 'Courier New, monospace'}} >Rating: {series.rating ? series.rating : 'Unknown'}</Typography>
            <Typography variant="h6" sx={{ backgroundColor: "black",color: 'white',  fontFamily: 'Courier New, monospace'}} >Modified: {new Date(series.modified).toLocaleDateString() ? new Date(series.modified).toLocaleDateString() : 'Unknown'}</Typography>
            {series.urls.map((url, index) => (
              <Typography key={index} variant="h5" sx={{ backgroundColor: "black",color: 'white', fontWeight: 'bold' , fontFamily: '"Bangers", cursive'}}>
                <a href={url.url} style={{ color: 'red' }}>More information here</a>
              </Typography>
            ))}
          </CardContent>
        </SeriesCard>
    </StyledDiv>
  );
};

export default SeriesDetailPage;
