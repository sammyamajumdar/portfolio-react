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
        <div className='flex justify-center'>
        <div className="-mt-5">
            <img className="rounded-full max-h-40 w-40 object-cover shadow-md" src={profilePhoto} alt="logo"/>
        </div>
        </div>
        <div>
            <section className="bg-white">
            <h1 className="flex justify-center pb-2 pt-2 text-2xl font-bold text-slate-800 font-openSans"> Sammya Majumdar </h1>
            <h2 className="flex justify-center pb-2 text-xl font-bold text-slate-800 font-openSans"> Software Developer</h2>
            <div className='flex justify-center pr-3'>
            <FaLocationArrow className='-mt-0 fill-slate-800'/> <span className="pl-1 pb-2 text-sm font-bold text-slate-800 font-openSans"> London, United Kingdom</span>
        </div>
        <div className='flex justify-center'>
            <a href={LinkedInProfile}><AiFillLinkedin className ='mr-5 fill-slate-700 hover:fill-blue-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={FacebookProfile}><AiFillFacebook className ='mr-5 fill-slate-700 hover:fill-blue-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={InstagramProfile}><AiFillInstagram className = 'fill-slate-700 mr-5 hover:fill-pink-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
            <a href={GithubProfile}><AiFillGithub className = 'fill-slate-700 hover:fill-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110' size={40}/></a>
        </div>
            
            </section>
        </div>
        
        <div className='flex justify-center'>
            <p className='px-[20%] py-10 sm:mb-20 md:mb-25 xl:mb-30 mt-0 pt-0 font-openSans'>
                {/*I am a Software Developer at <span className='text-blue-900 font-bold'>Accenture UK</span>. Prior to this, I graduated with distinction from the <span className='text-blue-900 font-bold'>University of Liverpool </span>
                with a masters in Electrical Engineering. I got my bachelors degree in India from <span className='text-blue-900 font-bold'>Maulana Abul Kalam University of 
                Technology</span>. Outside of work, I love to travel, or spend time trying to climb the Call of Duty 
                leaderboard. {/*<span className='font-bold text-rose-600'>And I love Mewli Datta</span>*/}
                
                <h1 className='font-bold text-xl mt-8'>Hi, I am <span className='font-openSans text-3xl text-slate-800'>Sammya</span></h1>    
                <h2 className='font-semibold text-md pb-2'>Welcome to my corner of the internet.</h2>
                <p className='font-md'>Currently, I am an analyst at <a href="https://www.accenture.com" className='font-bold hover:text-blue-800 text-blue-900'>Accenture UK</a>, based in London. My current role involves
                developing front-end interfaces for internal GCP assets mostly using React.
                My education spans 2 countries: got my bachelors in Electrical Engineering from India, followed by a 
                masters in Energy and Power Systems from the <a href="https://www.liverpool.ac.uk/" className='font-bold hover:text-blue-800 text-blue-900'>University of Liverpool</a> in the UK. During my time at Liverpool, I served as an International
                Student Ambassador for a year. Despite having two degrees in engineering, I pursued a career
                a career in software development, having learnt a bunch of stuff online. 
                </p>
                
                <p className='pt-2'>Outside of work, I love to travel, read novels and rank up on call of duty leaderboards.</p>
            </p>
        </div>
       
        </div>
    )
}