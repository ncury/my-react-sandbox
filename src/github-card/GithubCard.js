import React from 'react';
import './GithubCard.css';
import GithubProfile from './profile/GithubProfile';
import GithubForm from './form/GithubForm'

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <GithubProfile key={profile.id} {...profile}/>)}
	</div>
);


class GithubApp extends React.Component {
    state = {
        profiles: [],
      };
      addNewProfile = (profileData) => {
          this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
      };
        render() {
          return (
            <div>
                <div className="header">{this.props.title}</div>
                <GithubForm onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
      }	
}

export default GithubApp;