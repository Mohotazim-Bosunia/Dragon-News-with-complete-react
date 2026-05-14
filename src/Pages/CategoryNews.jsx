import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [categoryNews,setCategoryNews]=useState([])
    
    // console.log(id,data)
    useEffect(()=>{
        if(id=='0'){
            setCategoryNews(data);
            return
        }
        else if(id=='1'){
            const filterNews=data.filter(news=>news.others.is_today_pick==true);
        console.log(filterNews)
        setCategoryNews(filterNews) 
        }
        else{
             const filterNews=data.filter(news=>news.category_id==id);
        console.log(filterNews)
        setCategoryNews(filterNews)
        }
    },[data,id])
   
    return (
        <div>
            <h1 className='font-bold'>Category News:Total {categoryNews.length} found</h1>
            {
                categoryNews.map(news=>
                  <NewsCard
                     key={news.id}
                     news={news}> 
                   </NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;