import React, { useEffect, useState } from "react";
import "../css/Home.css";
import NestedModal1 from "./NestedModal1";
import NestedModal2 from "./NestedModal2";
import NestedModal3 from "./NestedModal3";
import NestedModal4 from "./NestedModal4";
import NestedModal5 from "./NestedModal5";
import NestedModal6 from "./NestedModal6";
import NestedModal7 from "./NestedModal7";
import NestedModal8 from "./NestedModal8";
import NestedModal9 from "./NestedModal9";
import NestedModal10 from "./NestedModal10";


const Home = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        const fetchFromApi = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
                const data = await response.json();
                setContent(data);
            } catch (error) {
                console.error("Error while fetching data:", error);
            }
        };
        fetchFromApi();
    }, []);

    function displayContent(item) {
        if (item.show && item.show.image && item.show.image.medium) {
            if (item.show.id == "42181") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal1 />
                    </div>
                )

            } else if (item.show.id == "34653") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal2 />
                    </div>
                )

            } else if (item.show.id == "42312") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal3 />
                    </div>
                )
            } else if (item.show.id == "6305") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal4 />
                    </div>
                )
            } else if (item.show.id == "65759") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal5 />
                    </div>
                )
            } else if (item.show.id == "32110") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal6 />
                    </div>
                )
            } else if (item.show.id == "9526") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal7 />
                    </div>
                )
            } else if (item.show.id == "42181") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal8 />
                    </div>
                )
            } else if (item.show.id == "31428") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal9 />
                    </div>
                )
            } else if (item.show.id == "8600") {
                return (
                    <div style={{ display: 'inline-block', textAlign: 'center' }}>
                        <img src={item.show.image.medium} alt="image" className="eachItem" />
                        <NestedModal10 />
                    </div>
                )
            }
        } else {
            return (
                <div style={{ display: 'inline-block', textAlign: 'center' }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" alt="image" className="notFoundItem" />
                </div>
            )

        }

    };
    return (
        <>
            {content.length > 0 ? (
                <div className="outer">{content.map(displayContent)}</div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
};

export default Home;