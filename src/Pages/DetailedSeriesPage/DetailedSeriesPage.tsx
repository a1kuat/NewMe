import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent,  Typography , CardMedia} from '@mui/material';
import CryptoJS from 'crypto-js';
import { SeriesData } from '../../Components/Series/SeriesData';
import LoadingPage from '../LoadingPage';
import StyledDiv from '../../Components/DetailedSeries/StyledDiv';
import SeriesContainer from '../../Components/DetailedSeries/SeriesContainer';
const publicKey = '99f249b7070a2e4cc1a49513d6065289';
const privateKey = '375757c2f7b7462e446837bceedbc801a5349ff8';
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const SeriesDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesData | null>(null);


  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/series/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`)
      .then(response => response.json())
      .then(data => setSeries(data.data.results[0]));
  }, [id]);

  if (!series) {
    return <LoadingPage/>;
  }

  return (
    <StyledDiv>
      <SeriesContainer>
        <Card style={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image={(`${series.thumbnail.path}.${series.thumbnail.extension}`)}
            alt=""
            style={{ width: '40%' }} // Adjust as needed
          />
          <CardContent style={{ width: '50%' }}> // Adjust as needed
            <Typography variant="h5">Title</Typography>
            <Typography variant="body2">Description</Typography>
            {/* Add more Typography components for other information */}
          </CardContent>
        </Card>
      </SeriesContainer>
    </StyledDiv>
  );
};

export default SeriesDetailPage;
