import profilePic from './assets/profile.jpg';

function Profile() {

    return (
        <div className="profile">
            <img className="profile-image" src={profilePic} alt="profile picture" />
            <h2 className="profile-name">Winston Gultiano</h2>
            <p className="profile-bio">I am currently studying Bachelor of Science in Information Systems at La Verdad Christian College.</p>
        </div>
    )

}

export default Profile