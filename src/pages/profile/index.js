import Navbar from '@/components/clients/ClientNav';
import Header from '@/components/ui/header';
import React, {useState} from 'react';
import Image from 'next/image';
import { Person, History, Star, Lock } from '@mui/icons-material';

const ProfilePage = ({username}) => {
    const [tab, setTab] = useState('profileSection'); // profileSection | pastEvents | achievements | lockedAchievements

    return (<>
        <Navbar />
        <WelcomeAndBadges username={username} />
        <div className='flex flex-row '>
            <ProfileTabs tab={tab} setTab={setTab} />
            {tab == 'profileSection' && (<ProfileSection />) }
        </div>
    </>);
};

const WelcomeAndBadges = ({username = 'Furgy'}) => {
    return (
    <div>
        <div className='pt-32 pb-16'>
            <div className=" text-4xl text-center pb-4">
                Welcome back, {username}!
            </div>
            <div className='text-center text-gray-400 pb-2'>
                Featured badges
            </div>
            <Image 
            src="/images/Badges.png"
            alt="My Image"
            width={600}
            height={400}
            style={{margin: '0 auto'}}
            />
        </div>
    </div>
    );
}

const ProfileTabs = ({tab, setTab}) => {
    return (
    <div>
        <div style={tab=='profileSection' ? {color: '#c22c21'} : {}} className='m-16 cursor-pointer' onClick={() => setTab('profileSection')}>
            <Person />
            <span className='ml-3'>Profile Section</span>
        </div>
        <div style={tab=='pastEvents' ? {color: '#c22c21'} : {}} className='m-16 cursor-pointer' onClick={() => setTab('pastEvents')}>
            <History />
            <span className='ml-3'>Past Events</span>
        </div>
        <div style={tab=='achievements' ? {color: '#c22c21'} : {}} className='m-16 cursor-pointer' onClick={() => setTab('achievements')}>
            <Star />
            <span className='ml-3'>Achievements</span>
        </div>
        <div style={tab=='lockedAchievements' ? {color: '#c22c21'} : {}} className='m-16 cursor-pointer' onClick={() => setTab('lockedAchievements')}>
            <Lock />
            <span className='ml-3'>Locked Achievements</span>
        </div>
    </div>);
};

const ProfileSection = () => {
    return (
    <div className='flex flex-col items-center flex-1'>
        <h3 className='text-xl font-bold p-8'>Profile Section</h3>
        <form className='flex flex-row flex-wrap justify-between w-3/5'>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>First Name</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='firstName' />
            </div>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>Last Name</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='lastName' />
            </div>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>Contact Number</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='contactNumber' />
            </div>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>Gender</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='gender' />
            </div>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>Email</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='email' />
            </div>
            <div style={{width: '45%'}} className='flex flex-col justify-center mb-8'>
                <h4>Ethinicity</h4>
                <input style={{border: '1px solid #aaa', borderRadius: '5px', fontSize: '16px', padding: '5px'}} name='ethinicity' />
            </div>
            <button type='submit' className='text-white bg-blue-500 p-2 rounded-xl mb-8'>Update information</button>
        </form>
    </div>);
};

export default ProfilePage;