import React from 'react';
import './stylesheets/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header.js';
import Footer from './components/Footer';
import LoginPage from './components/LoginForm';
import MeetOurTrainersPage from './components/OurTrainers';
import TrainerSingle from './components/TrainerSinglePage';
import SubscriptionFormPage from './components/SubscriptionForm';
import TrainerAlbumPage from  './components/TrainerAlbumPage';
import SignUpPage from './components/SignUpForm';
import OnDemandMain from './components/OnDemandPage';
import OurPrograms from './components/OurProgramsPage';
import LiveSchedule from './components/LiveSchedulePage';
import LeaderBoard from './components/LeaderboardPage';
import Dashboard from './components/UserProfile/UserDashboard';
import CreateProfile from './components/UserProfile/CreateProfilePage';
import AlbumPage from './components/UserProfile/MyAlbumPage';
import UserBadges from './components/UserProfile/UserBadgesPage';
import UserFriendList from './components/UserProfile/UserFriendsPage';
import UserAlbumPage from './components/UserProfile/UserPhotosPage';
import ProfilePage from './components/UserProfile/UserProfilePage';

import ActivityHistory from './components/ActivityHistoryPage';
import CommunityPage from './components/CommunityPage';
import EditProfile from './components/EditProfilePage';
import TrainerFriendRequest from './components/FriendRequestPage';
import TrainerFriendList from './components/FriendsPage';
import GoLive from './components/LiveNow';
import TrainerBadgesList from './components/TrainerBadgesPage';


import {BrowserRouter as Router, Route , Switch}  from 'react-router-dom';

function App() {
  return (
    <Router>
       <div className="App">
       <Header/>
        <Switch>
            {/* <Route path = '' component = {}/> */}
            <Route exact path = '/' component = {HomePage}/>
            <Route path = '/sign-in' component = {LoginPage}/>
            <Route path = '/our-trainers' component = {MeetOurTrainersPage}/>
            <Route path = '/trainer' component = {TrainerSingle}/>
            <Route path = '/trainer-album' component = {TrainerAlbumPage}/>
            <Route path = '/sign-up' component = {SignUpPage}/>
            <Route path = '/subscription-plan' component = {SubscriptionFormPage}/>
            <Route path = '/on-demand' component = {OnDemandMain}/>
            <Route path = '/our-programs' component = {OurPrograms}/>
            <Route path = '/live-schedule' component = {LiveSchedule}/>
            <Route path = '/leaderboard' component = {LeaderBoard}/>
            <Route path = '/dashboard' component = {Dashboard}/>
            <Route path = '/create-profile' component = {CreateProfile}/>
            <Route path = '/my-album' component = {AlbumPage}/>
            <Route path = '/badges' component = {UserBadges}/>
            <Route path = '/friend-list' component = {UserFriendList}/>
            <Route path = '/photos' component = {UserAlbumPage}/>
            <Route path = '/user-profile' component = {ProfilePage}/>
            <Route path = '/activity-history' component = {ActivityHistory}/>
            <Route path = '/community' component = {CommunityPage}/>
            <Route path = '/edit-profile' component = {EditProfile}/>
            <Route path = '/friend-request' component = {TrainerFriendRequest}/>
            <Route path = '/friend-list' component = {TrainerFriendList}/>
            <Route path = '/live' component = {GoLive}/>
            <Route path = '/trainer-badges-list' component = {TrainerBadgesList}/>
        </Switch>
        <Footer/>
        </div>
    </Router>
    
  );
}

export default App;
