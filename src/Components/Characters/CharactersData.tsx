export interface CharactersData {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    urls: Array<{type: string, url: string}>;
    thumbnail: {path: string, extension: string};
    comics: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    series: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    stories: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string, type: string}>, returned: number};
    events: {available: number, collectionURI: string, items: Array<{resourceURI: string, name: string}>, returned: number};
    modified: Date;
 }
 