import React, { useEffect, useState } from 'react';
import ReactFlow , {Node , Edge , Handle , Position, Background}from 'react-flow-renderer';
import { CharactersData } from '../../Components/Characters/CharactersData';
import CryptoJS from 'crypto-js';
import StyledDiv from '../../Components/Graph/StyledDiv';
import { StyledDiv1 } from '../../Components/Graph/StyledDiv1';
import { StyledDiv2 } from '../../Components/Graph/StyledDiv2';

const publicKey = '99f249b7070a2e4cc1a49513d6065289';
const privateKey = '375757c2f7b7462e446837bceedbc801a5349ff8';
const ts = new Date().getTime().toString();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


const CharacterNode = ({ data , characterColors}) => {
  console.log(data.id);
  return (
    <StyledDiv1 color={characterColors[data.id]} >
      <Handle type="source" position={Position.Top} id="a" />
      <div>{data.title}</div>
      <img 
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
        alt={data.title} 
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </StyledDiv1>
  );
};



const SeriesNode = ({ data }) => {
  return (
    <StyledDiv2>
      <Handle type="target" position={Position.Bottom} id="a" />
      <div>{data.title}</div>
    </StyledDiv2>
  );
};



const GraphPage = () => {
  const nodeTypes = {
    character: (props) => <CharacterNode {...props} characterColors={characterColors} />,
    series: SeriesNode,
  };
  const characterIds = [1009610, 1009368 , 1009187 , 1009165 , 1009268 , 1017575, 1009378, 1010801 , 1010338 , 1011299 , 1009718 , 1009215];
  const [characters, setCharacters] = useState<CharactersData[]>([]);
  const colorPalette = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'magenta', 'teal', 'lime'];

  useEffect(() => {
    Promise.all(
      characterIds.map(id =>
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}&ts=${ts}&hash=${hash}`)
          .then(response => response.json())
          .then(data => data.data.results[0])
      )
    ).then(setCharacters).catch(error => console.error(error));
  }, []);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const characterColors = characterIds.reduce((acc, id, index) => ({
    ...acc,
    [id]: colorPalette[index % colorPalette.length],
  }), {});

  useEffect(() => {
    const characterNodes = characters.map(character => ({
      id: character.id.toString(),
      type: 'character',
      data: { title: character.name , thumbnail: character.thumbnail , id: character.id},
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    }));
  
    let linkIndex = 0;
    const seriesNodes = [];
    const edges = [];
  
    for (let i = 0; i < characters.length; i++) {
      for (let j = i + 1; j < characters.length; j++) {
        const seriesI = characters[i].series.items;
        const seriesJ = characters[j].series.items; 
        const commonSeries = seriesI.filter(itemI => seriesJ.some(itemJ => itemJ.resourceURI === itemI.resourceURI));
        
        commonSeries.forEach((series) => {
          const seriesId = `series-${linkIndex}`;
          seriesNodes.push({
            id: seriesId,
            type: 'series',
            data: { title: series.name , uri: series.resourceURI },
            position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
          });
  
          edges.push({
            id: `edge-${linkIndex}`,
            source: characters[i].id.toString(),
            target: seriesId,
            style: { stroke: characterColors[characters[i].id], strokeWidth: 0.5 },
          });
          
          linkIndex++;

          edges.push({
            id: `edge-${linkIndex}`,
            source: characters[j].id.toString(),
            target: seriesId,
            style: { stroke: characterColors[characters[j].id], strokeWidth: 0.5 },
          });
  
          linkIndex++;
        });
      }
    }
  
    setNodes([...characterNodes, ...seriesNodes]);
    setEdges(edges);
  }, [characters]);


    return (
        <StyledDiv>
            <ReactFlow
              draggable={true}
              nodeTypes={nodeTypes}
              onNodeClick={(event, element) => {
                if (element.id.startsWith('series')) {
                  const seriesId = element.data.uri.split('/').pop();
                  window.location.href = '/newme/series/' + seriesId;
                } else  {
                  window.location.href = '/newme/characters/' + element.id;
                }
              }}
              nodes={nodes}
              edges={edges}
            />
           </StyledDiv>
    )
};

export default GraphPage;

