import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {CardContent,  Typography , CardMedia} from '@mui/material';
import CryptoJS from 'crypto-js';
import SeriesCard from '../../Components/SeriesDetail/SeriesCard';
import { CharactersData } from '../../Components/Characters/CharactersData';
import LoadingPage from '../LoadingPage';
import StyledDiv from '../../Components/CharactersDetail/StyledDiv';
const publicKey = '99f249b7070a2e4cc1a49513d6065289';
const privateKey = '375757c2f7b7462e446837bceedbc801a5349ff8';
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const CharactersDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [characters, setCharacters] = useState<CharactersData | null>(null);

  useEffect(() => {
    fetch(`api/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`)
      .then(response => response.json())
      .then(data => setCharacters(data.data.results[0]));
  }, [id]);

  if (!characters) {
    return <LoadingPage/>;
  }

  return (
    <StyledDiv>
        <SeriesCard >
          <CardMedia
            component="img"
            image={(`${characters.thumbnail.path}.${characters.thumbnail.extension}`)}
            alt={characters.name}/>
          <CardContent style={{ width: '50%' }}> 
            <Typography variant="h4" sx={{ backgroundColor: "black",color: 'white', fontWeight: 'bold' , fontFamily: '"Bangers", cursive' }}>{characters.name}</Typography>
            <Typography variant="h6" sx={{ marginTop: 2 , backgroundColor: "black",color: 'white', fontWeight: 'underline' , fontFamily: '"Bangers", cursive'}} >Description: {characters.description ? characters.description : 'Unknown'}</Typography>
            <Typography variant="h6" sx={{  marginTop: 2 , backgroundColor: "black",color: 'white',  fontFamily: 'Courier New, monospace'}} >Modified: {new Date(characters.modified).toLocaleDateString() ? new Date(characters.modified).toLocaleDateString() : 'Unknown'}</Typography>
            {characters.urls.map((url, index) => (
              <Typography key={index} variant="h5" sx={{ backgroundColor: "black",color: 'white', fontWeight: 'bold' , fontFamily: '"Bangers", cursive'}}>
                <a href={url.url} style={{ color: 'red' }}>More information here</a>
              </Typography>
            ))}
          </CardContent>
        </SeriesCard>
    </StyledDiv>
  );
};

export default CharactersDetailPage;
