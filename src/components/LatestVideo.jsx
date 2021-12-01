import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import config from "./config.js";
import numeral from "numeral";
import { ThumbUpIcon } from '@mui/icons-material/ThumbUp';

const LatestVideoView = () => {

    const [viewCount, setViewCount] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.viewCount).format('0,0');
                setViewCount(count);
            });

    });

    return <Fragment>{viewCount}</Fragment>
};

const LatestVideoLike = () => {

    const [likeCount, setLikeCount] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.likeCount).format('0,0');
                setLikeCount(count);
            });

    });

    return <Fragment>{likeCount}</Fragment>
};

const LatestVideoDislike = () => {

    const [dislikeCount, setDislikeCount] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.dislikeCount).format('0,0');
                setDislikeCount(count);
            });

    });

    return <Fragment>{dislikeCount}</Fragment>
};

const LatestVideoComment = () => {

    const [commentCount, setCommentCount] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                const count = numeral(data.items[0].statistics.commentCount).format('0,0');
                setCommentCount(count);
            });

    });

    return <Fragment>{commentCount}</Fragment>
};

const LatestVideoTitle = () => {

    var [titleV, setTitleV] = useState();

    useEffect(() => {
        const { apiKey, videoId } = config;
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        fetch(apiCall)
            .then(result => result.json())
            .then(data => {
                var count = data.items[0].snippet.localized.title;
                setTitleV(count);
            });

    });

    return <Fragment>{titleV}</Fragment>
};

export default function latestVideo() {
    return (
        <div className="Latest">
            <div className="LatestItem">
                <span className="LatestTitle">Latest Video</span>
                <div className="LatestTitleContainer">
                    <div className="LatestTitle">Titre : <LatestVideoTitle /> </div>
                </div>
                <div className="LatestViewContainer">
                    <div className="LatestView">View count : <LatestVideoView /></div>
                </div>
                <div className="LatestCommentContainer">
                    <div className="LatestComment">Comment count : <LatestVideoComment /></div>
                </div>
                <div className="LatestLikeContainer">
                    <div className="LatestLike">Like count : <ThumbUpIcon /> <LatestVideoLike /></div>
                </div>
                <div className="LatestDislikeContainer">
                    <div className="LatestDislike">Dislike count : <LatestVideoDislike /></div>
                </div>
            </div>
        </div>

    )
};