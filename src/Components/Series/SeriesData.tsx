export interface SeriesData {
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