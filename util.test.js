//jest.mock('./http');
jest.mock('axios');

const { loadTitle } = require('./util');

test('it should print title in upercase', () =>{
    loadTitle().then( title => {
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
});