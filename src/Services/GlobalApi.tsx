import axios from "axios";

const baseurl="https://api.themoviedb.org/3";
const api_key= "2ec0d66f5bdf1dd12eefa0723f1479cf";
// 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const baseGeneres_url ='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingvideos=axios.get(`${baseurl}/trending/movie/day?api_key=${api_key}`)
const getGenersid=({id}:any)=> axios.get(`${baseGeneres_url}&with_genres=${id}`)


export default {
    getTrendingvideos,
    getGenersid
};