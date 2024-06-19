// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";

const api_key = "179bbb8ce7a9a7019921c89fd76bf838";
const url = "https://api.themoviedb.org/3";
const images = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="" />;

const Row = ({ title, arr }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${images}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

function Home() {
  const [upcom, setUpcom] = useState([]);
  const [nowPlay, setNowPlay] = useState([]);
  const [pop, setPop] = useState([]);
  const [rated, setRated] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingResponse = await axios.get(
          `${url}/movie/upcoming?api_key=${api_key}`
        );
       
        setUpcom(upcomingResponse.data.results);
  
        const nowPlayingResponse = await axios.get(
          `${url}/movie/now_playing?api_key=${api_key}`
        );
        
        setNowPlay(nowPlayingResponse.data.results);
  
        const popularResponse = await axios.get(
          `${url}/movie/popular?api_key=${api_key}`
        );
        
        setPop(popularResponse.data.results);
  
        const topRatedResponse = await axios.get(
          `${url}/movie/top_rated?api_key=${api_key}`
        );
        
        setRated(topRatedResponse.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section className="Home">
      <div className="banner"></div>
      <Row title={"Upcoming movies"} arr={upcom} />
      <Row title={"Now Playing"} arr={nowPlay} />
      <Row title={"Popular"} arr={pop} />
      <Row title={"Top Rated"} arr={rated} />
    </section>
  );
}

export default Home;
