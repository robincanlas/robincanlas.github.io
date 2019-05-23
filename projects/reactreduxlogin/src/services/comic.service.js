import fakeAPi from '../api/fakeApi'

const getAll = () => {
    return new Promise((resolve, reject) => {
        fakeAPi.getComics(data => {
            // return data
            if(true) resolve(data);
            reject()
        });        
    })
};

export const comicService = {
    getAll,
}