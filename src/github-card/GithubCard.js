import React from 'react';
import './GithubCard.css';
import GithubProfile from './profile/GithubProfile';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class GithubCard extends React.Component {

    render() {

        return (
            <div>
                <div className="githubcard-header">GithubCard</div> 
                <GithubProfile {... testData[0]} />
                <GithubProfile {... testData[1]} />
                <GithubProfile {... testData[2]} />
            </div>
        );
    }
    

}

export default GithubCard;