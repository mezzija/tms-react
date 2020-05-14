export const serverGet=(url,useOptions)=> {

    return fetch(url).then(response => response.json());
};
