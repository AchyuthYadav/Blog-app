import React from "react";
import FeedNav from "./FeedNav";
import SideBar from "./SideBar";
import Pagination from "./Pagination";   
import Banner from "./Banner";
import Post from "./Posts"


function Home(){
    return (
        <main>
            <Banner />
                <div className="padding">
                    <div className= "container col-xs-4 item-start">
                        <section className="span-xs-3">                    
                            <FeedNav />
                            <Post />
                            <Pagination /> 
                        </section>
                        <SideBar /> 
                    </div>
                </div>
        </main>
    );
}

export default Home;