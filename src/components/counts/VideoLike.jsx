import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";

const VideoLike = () => {

    const [likeCount, setLikeCount] = useState();

    useEffect(() => {
        const { api_key, video_id } = config;

        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=${api_key}`
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.likeCount).format('0,0');
                setLikeCount(count);
            });

    }, []);

    return <Fragment>{likeCount}</Fragment>;
};
export default VideoLike