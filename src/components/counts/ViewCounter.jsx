import React, { useState, useEffect, Fragment } from "react"
import config from "./config.js";
import numeral from "numeral";


const ViewCounter = () => {

    const [viewCount, setViewCount] = useState();

    useEffect(() => {
        const { api_key, channel_id } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&key=${api_key}`
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral
                    (data.items[0].statistics.viewCount).format('0,0');
                setViewCount(count);
            });

    }, []);

    return <Fragment>{viewCount}</Fragment>;

}

export default ViewCounter