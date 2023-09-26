import Link from 'next/link'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots } from 'react-icons/bs'
import LeftSidebar from '@/components/LeftSidebar';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title:'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
];

const Home = () => {
  return (
    <div className = "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar />
        <main className='ml-[275px] p-6 mx-2 flex w-[600px] h-full min-h-scren flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold'>Home</h1>
          <div className='border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative'>
            <div className='w-10 h-10 bg-slate-400 rounded-full'></div>
            <div className='flex flex-col'>
              <div className='border-b-[0.5px] border-gray-600'>
                <input 
                  type='text' 
                  className='w-full h-full bg-transparent outline-none border-none' 
                  placeholder="What's happening?" 
                />
              </div>
              <div className='w-full justify-between items-center flex'>
                <div></div>
                <div>
                  <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
                    Tweet 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default Home;