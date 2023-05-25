import React from "react";
import { articleURL } from "./Utilities";


class  Posts extends React.Component {
    state = {
        articles: null,
    }

    ComponentDidMount(){
        fetch(articleURL + '/?Limit=10')
            .then(res => {
                if(!res.ok){
                    throw  new Error(res.statusText); 
                }
            }
                )
            .then(data =>{
                this.setState({articles : data.articles });
            })
            .catch((err) => console.log('something went wrong'))
        }

    render() {
        const {articles} = this.state;
        if (!articles){
            return
        }

        return articles.map( (article) => <post key={article.slug} {...article}/>

        )
    }
}

export default Posts;