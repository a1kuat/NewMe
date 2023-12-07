import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContent,  Typography} from '@mui/material';
import { styled } from '@mui/system';
import paperImage from '../../Images/paper.jpg';
import CryptoJS from 'crypto-js';

const publicKey = '99f249b7070a2e4cc1a49513d6065289';
const privateKey = '375757c2f7b7462e446837bceedbc801a5349ff8';
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

interface SeriesData {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: Array<{type: string, url: string}>;
    startYear: number;
    endYear: number;
    rating: string;
    modified: Date;
    thumbnail: {path: string, extension: string};
    comics: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    stories: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string, type: string}>, returned: number};
    events: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    characters: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    creators: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string, role: string}>, returned: number};
    next: {resourceURI: string, name: string};
    previous: {resourceURI: string, name: string};
}


  const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    padding: '1em',
    backgroundColor: 'white',
    backgroundImage: `url(${paperImage})`,
  }));

const SeriesDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesData | null>(null);


  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/series/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`)
      .then(response => response.json())
      .then(data => setSeries(data.data.results[0]));
  }, [id]);

  if (!series) {
    return <div>Loading...</div>;
  }

  return (
        <StyledCardContent>
          <Typography variant="h4">Title: {series.title}</Typography>
          <Typography variant="body1">Description: {series.description}</Typography>
          <Typography variant="body2">Start Year: {series.startYear}</Typography>
          <Typography variant="body2">End Year: {series.endYear}</Typography>
          <Typography variant="body2">Rating: {series.rating}</Typography>
          {/* Add more detailed series information here */}
        </StyledCardContent>
  );
};

export default SeriesDetailPage;
