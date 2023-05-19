const key = "fa3b541007757962bd1a544230464536";
const imgPath ="https://image.tmdb.org/t/p/w500/";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export {key, imgPath, fetcher};