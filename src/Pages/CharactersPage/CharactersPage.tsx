import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import StyledSearchForm from "../../Components/Series/StyledSearchForm";
import StyledInput from "../../Components/Series/StyledInput";
import StyledButton from "../../Components/Series/StyledButton";
import StyledDiv from "../../Components/Characters/StyledDiv";
import SeriesContainer from "../../Components/Series/SeriesContainer";
import SeriesCard from "../../Components/Series/SeriesCard";
import SeriesCaption from "../../Components/Series/SeriesCaption";
import StyledCardMedia from "../../Components/Series/StyledCardMedia";
import LoadingPage from "../LoadingPage";
import {CharactersData}  from "../../Components/Characters/CharactersData";

const publicKey = "99f249b7070a2e4cc1a49513d6065289";
const privateKey = "375757c2f7b7462e446837bceedbc801a5349ff8";
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const SeriesPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<CharactersData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCharactersClick = (characters: CharactersData) => {
    navigate(`/characters/${characters.id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSearchTerm("");
    setCharacters([]);
  };

  const handleGet = (event) => {
    event.preventDefault();
    fetchCharacters(searchTerm);
  };

  const fetchCharacters = async (searchTerm = "") => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `api/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=100&nameStartsWith=${searchTerm}`
      );
      const data = await response.json();
      setCharacters(data.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <StyledDiv>
      <StyledSearchForm>
        <StyledInput
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter characters name"
        />
        <div>
          <StyledButton type="submit" onClick={handleGet}>
            Get
          </StyledButton>
          <StyledButton type="submit" className="reset" onClick={handleReset}>
            Reset
          </StyledButton>
        </div>
      </StyledSearchForm>
      {characters.length > 0 && (
        <SeriesContainer>
          {characters.map((characters) => (
            <SeriesCard
              key={characters.id}
              onClick={() => handleCharactersClick(characters)}
            >
              <StyledCardMedia
                image={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
              />
              <SeriesCaption>{characters.name}</SeriesCaption>
            </SeriesCard>
          ))}
        </SeriesContainer>
      )}
    </StyledDiv>
  );
};

export default SeriesPage;
