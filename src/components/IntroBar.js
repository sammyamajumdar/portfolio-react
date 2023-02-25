import { FaLocationArrow} from 'react-icons/fa'
import profilePhoto from './Photos/profilePhoto.JPG';
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

export default function IntroBar() {
    const LinkedInProfile = "https://www.linkedin.com/in/sammya-majumdar-8b9188112/"
    const FacebookProfile = "https://www.facebook.com"
    const InstagramProfile = "https://www.instagram.com"
    const GithubProfile = "https://www.github.com/sammyamajumdar"
    return (
        <div>
        <div className='flex flex-wrap justify-center'>
        <div className="">
            <img className="overflow-clip shadow rounded-full max-w-full h-40 align-middle border-none" src={profilePhoto} alt="logo"/>
        </div>
        </div>
        <div>
            <section className="bg-white">
            <h1 className="flex justify-center pb-2 text-3xl font-bold text-teal-700"> Sammya Majumdar </h1>
            <h2 className="flex justify-center pb-2 text-2xl font-bold text-teal-600"> Software Developer</h2>
            <div className='flex justify-center'>
            <FaLocationArrow className='mt-1 fill-teal-500'/> <span className="pl-2 pb-2 text-md font-bold text-teal-500"> London, United Kingdom</span>
        </div>
        <div className='flex justify-center'>
            <a href={LinkedInProfile}><AiFillLinkedin className ='mr-5 fill-teal-500 hover:fill-blue-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={FacebookProfile}><AiFillFacebook className ='mr-5 fill-teal-500 hover:fill-blue-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={InstagramProfile}><AiFillInstagram className = 'fill-teal-500 mr-5 hover:fill-pink-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={GithubProfile}><AiFillGithub className = 'fill-teal-500 hover:fill-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
        </div>
            
            </section>
        </div>

        <div className='flex justify-cente'>
            <p className='px-40 py-10 mb-5'>
                I am a Software Developer at <span className='text-blue-900 font-bold'>Accenture UK</span>. Prior to this, I graduated with distinction from the <span className='text-blue-900 font-bold'>University of Liverpool </span>
                with a masters in Electrical Engineering. I got my bachelors degree in India from <span className='text-blue-900 font-bold'>Maulana Abul Kalam University of 
                Technology</span>. Outside of work, I love to travel, or spend time trying to climb the Call of Duty 
                leaderboard. <span className='font-bold text-rose-600'>And I love Mewli Datta</span>
            </p>
        </div>
       
        </div>
    )
}