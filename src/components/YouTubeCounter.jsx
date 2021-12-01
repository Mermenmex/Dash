import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import config from "./config.js";
import numeral from "numeral";

/*const YoutubeCounter2 = () => {

    const [subscriberCount, setSubscriberCount] = useState();

    useEffect(() => {
        const { apiKey, channelId } = config;
        const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.subscriberCount).format('0,0');
                setSubscriberCount(count);
            });

    });

    return <Fragment>{subscriberCount}</Fragment>
};*/
const YoutubeCounter = () => {

    var [subscriberCount, setSubscriberCount] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {

                const count = data.items[0].snippet.thumbnails.default.url;
                setSubscriberCount(count);


            });

    });

    return <img src={subscriberCount}></img>
};

export default YoutubeCounter;