import { FaLocationArrow} from 'react-icons/fa'
import profilePhoto from './Photos/profilePhoto.JPG';
import quotes from './Photos/quotes.png'
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

export default function IntroBar() {
    const LinkedInProfile = "https://www.linkedin.com/in/sammya-majumdar-8b9188112/"
    const FacebookProfile = "https://www.facebook.com"
    const InstagramProfile = "https://www.instagram.com"
    const GithubProfile = "https://www.github.com/sammyamajumdar"
    return (
        <div>
        <div className='flex justify-center'>
        <div className="">
            <img className="rounded-full max-h-40 w-40 object-cover shadow-md" src={profilePhoto} alt="logo"/>
        </div>
        </div>
        <div>
            <section className="bg-white">
            <h1 className="flex justify-center pb-2 pt-2 text-3xl font-bold text-slate-800 font-openSans"> Sammya Majumdar </h1>
            <h2 className="flex justify-center pb-2 text-2xl font-bold text-slate-800 font-openSans"> Software Developer</h2>
            <div className='flex justify-center'>
            <FaLocationArrow className='mt-1 fill-slate-800'/> <span className="pl-2 pb-2 text-md font-bold text-slate-800 font-openSans"> London, United Kingdom</span>
        </div>
        <div className='flex justify-center'>
            <a href={LinkedInProfile}><AiFillLinkedin className ='mr-5 fill-slate-700 hover:fill-blue-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={FacebookProfile}><AiFillFacebook className ='mr-5 fill-slate-700 hover:fill-blue-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={InstagramProfile}><AiFillInstagram className = 'fill-slate-700 mr-5 hover:fill-pink-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={GithubProfile}><AiFillGithub className = 'fill-slate-700 hover:fill-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
        </div>
            
            </section>
        </div>
        
        
        <div className='flex justify-center -pb-5'>
        <img src={quotes} alt="bio" className="max-h-40 w-30 mt-5 -mb-5" />
        </div>
        <div className='flex justify-center'>
            <p className='px-40 py-10 sm:mb-20 md:mb-25 xl:mb-36 mt-0 pt-0 font-openSans'>
                {/*I am a Software Developer at <span className='text-blue-900 font-bold'>Accenture UK</span>. Prior to this, I graduated with distinction from the <span className='text-blue-900 font-bold'>University of Liverpool </span>
                with a masters in Electrical Engineering. I got my bachelors degree in India from <span className='text-blue-900 font-bold'>Maulana Abul Kalam University of 
                Technology</span>. Outside of work, I love to travel, or spend time trying to climb the Call of Duty 
                leaderboard. {/*<span className='font-bold text-rose-600'>And I love Mewli Datta</span>*/}
                
                <h1 className='font-bold text-2xl mt-10'>Hi, I am <span className='font-openSans text-3xl text-slate-800'>Sammya</span></h1>    
                <h2 className='font-semibold text-xl'>Welcome to my corner of the internet.</h2>
                <h3 className='font-regular '>Currently, I am an analyst at <a href="https://www.accenture.com" className='font-bold hover:text-blue-800 text-blue-900'>Accenture UK</a>, based in London. My current role involves
                developing front-end interfaces for internal GCP assets mostly using React.
                My education spans 2 countries: got my bachelors in Electrical Engineering from India, followed by a 
                masters in Energy and Power Systems from the <a href="https://www.liverpool.ac.uk/" className='font-bold hover:text-blue-800 text-blue-900'>University of Liverpool</a> in the UK. During my time at Liverpool, I served as an International
                Student Ambassador for a year. Despite having two degrees in engineering, I pursued a career
                a career in software development, having learnt a bunch of stuff online. 
                </h3>
                
                <p className='pt-2'>Outside of work, I love to travel, read novels and rank up on call of duty leaderboards.</p>
            </p>
        </div>
       
        </div>
    )
}