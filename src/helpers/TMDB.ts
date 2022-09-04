import axios from "axios";
import Image from "../models/Image";
import Movie from "../models/Movie";

const API_KEY = "c7e56d606e9e00077e3cfbdde20b77cc";

export default class TMDB {
  public static async getMovie(id: string | number, language: "en" | "uk") {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`);
    return response.data as Movie;
  }
  public static getImage(path: string) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  public static async getBackdrops(id: string | number) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`);
    return response.data.backdrops as Image[];
  }
  public static async getPosters(id: string | number, language: "en" | "uk") {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=${language}`);
    return response.data.posters as Image[];
  }
}