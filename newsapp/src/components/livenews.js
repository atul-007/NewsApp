import React, { useEffect, useState } from "react";

const LiveNews = () => {
    const [news, setnews] = useState();
    let index = 0;
    useEffect(async () => {
        const apiKey = "be9dc743000345c0b16bd68eba1e0fb4";
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=1&pageSize=20`;
        const data = await fetch(url);
        const prasedData = await data.json();
        setnews(prasedData.articles[0]);
        const id = setInterval(() => {
            setnews(prasedData.articles[index + 1]);
            index = index + 1;
            if (index === 20) {
                index = 0;
            }
        }, 7000);
        return () => {
            clearInterval(id);
        };
    }, []);
    if (!news) {
        return null;
    }
    return (
        <div className="container p-1 my-4">
            <div class="card mx-4 " style={{ height: "100px" }}>
                <div class="card-body flex">
                    <div className="text-danger">Live News:</div>
                    {news.title}
                </div>
            </div>
        </div>
    );
};

export default LiveNews;