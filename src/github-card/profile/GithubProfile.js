import React from 'react';
import './GithubProfile.css';

class GithubProfile extends React.Component {
    
    render() {
        const profile = this.props;
        return (
          <div className="github-profile">
            <img src={profile.avatar_url} alt="" />
            <div className="info">
                <div className="id">{profile.login}</div>
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
          </div>
      );
    }

}

export default GithubProfile; 