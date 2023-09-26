import Link from 'next/link'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots } from 'react-icons/bs'

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
]

const Home = () => {
  return (
    <div className = "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation/header */}
        <LeftSidebar/>
        {/* <main>Home timeline</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  )
}

export default Home;