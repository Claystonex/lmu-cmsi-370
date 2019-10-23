import React, {useState, useEffect} from 'react';

const api = () => {
    const CLIENT_ID = "ZHZ5JR0HWM5RNTXEA2VUVF3VSB435V5KFQTW1ICLYAT501H2";
    const CLIENT_SECRET = "KHNYJEGBXM0FQVRSLOJBWJYKIIHDJNSUQKUMX4KMFR3OO5UN";

    const [venues, getVenues] = useState([]);
    const [trending, getTrending] = useState([]);
    const [like, postLike] = useState([]);
    useEffect(() => {
    searchVenues();
    searchTrending();
    postLike();
    }, []);

    const searchVenues = async () => {
    const response = await fetch (`https://api.foursquare.com/v2/venues/search?client_id=ZHZ5JR0HWM5RNTXEA2VUVF3VSB435V5KFQTW1ICLYAT501H2&client_secret=KHNYJEGBXM0FQVRSLOJBWJYKIIHDJNSUQKUMX4KMFR3OO5UN&v=20120609&ll=40.7099,-73.9622&name=peter luger steakhouse&intent=match`);
    const data = await response.json();
    getVenues(data.categories);

    };
    
    const searchTrending = async () => {
        const trendResponse = await feth (``);
        const trend = await response.json();
        getTrending(trend);
    }

    const liker = async () => {
        const likePlace = await fetch(``);
        const liked = await response.json(``);
        postLike(liked.);
    }

}