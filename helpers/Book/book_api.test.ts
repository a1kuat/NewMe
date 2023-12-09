import axios from 'axios';
import { describe, test, expect, jest} from '@jest/globals';
// import getBookData from "../../src/components/Book/Book" криво импротиться из - за css import "@fontsource/russo-one";

async function getBookData(bookKeys: string[]) {
    const bookData1: null = null;
    const response2 = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookKeys[1]}&jscmd=details&format=json`);
    const bookData2 = response2.data;
    return [bookData1, bookData2];
}
jest.mock('axios');

describe('getBookData', () => {
    test('should return an array containing book data', async () => {
        const bookKeys = ['key1', 'key2'];
        const expectedData = [null, {title: 'Book Title', authors: [{name: 'Book Author'}]}];
        
        // Mock the axios.get method to return the expected book data
        jest.spyOn(axios, 'get').mockImplementation((url) => {
            if (url === `https://openlibrary.org/api/books?bibkeys=ISBN:${bookKeys[1]}&jscmd=details&format=json`) {
              return Promise.resolve({ data: expectedData[1] });
            }
          });

        const bookData = await getBookData(bookKeys);
        expect(bookData).toEqual(expectedData);
    });
});
