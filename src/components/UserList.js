import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Header from './Header';
import Card from './Card';

const UserList = () => {
    const[listData, setListData]= useState([]);
    useEffect(()=>{
        let movieId=window.localStorage.movies ? window.localStorage.movies.split(","):[];
        for(let i=0 ;i<movieId.length;i++){
            
            axios.get(`https://api.themoviedb.org/3/movie/${movieId[i]}?api_key=64a3c4fa2d161970d39914dad797cddf&language=fr-FR`).then((res)=>setListData((listData)=>[...listData,res.data]));
            
        }
        },[]);
    return (
        <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
    )
};

export default UserList;