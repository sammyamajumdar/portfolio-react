import AccentureLogo from './Photos/accenture-probono.png';
import universityLogo from './Photos/education_logo_1.png';
import PythonLogo from './Photos/Python.png'
import JavaLogo from './Photos/java-logo.png'
import tailwindLogo from './Photos/tailwind.png'
import reactLogo from './Photos/React_logo.png'
import tfLogo from './Photos/Tensorflow_logo.png'
import gitLogo from './Photos/Git.png'
import jsLogo from './Photos/javascript-logo.png'
import googleLogo from './Photos/google_cloud.png'
import awsLogo from './Photos/aws.png'


export default function Experience() {

    const gcpCred = "https://www.credential.net/9a216578-08ba-452d-a446-f0943cced277?key=af705ca13cbe91b546b57f5852f23e7c85db5dd24c629e9f1d5b0428f790f7d9#gs.n1h7f9"
    const awsCred = "https://www.credly.com/badges/87274c5e-f8cd-41af-b280-955290394c55/public_url"
    return (
        <div className='sm:px-[3%] md:px-[20%] lg:px-[20%] xl:px-[20%] px-[3%]'>

            <h1 className="font-bold py-0 -mt-[5%] text-3xl text-slate-800">EXPERIENCE</h1>
            
            <div className=' mb-10 shadow-lg p-10 rounded-xl '>
            <div >
                <div className='flex justify-center'>
                    <img src={AccentureLogo} alt="accenture" className="pt-4 h-26 w-20" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5 pl-1">Accenture UK</h2>
                    <h3 className='font-md italic'>April 2022 - Present</h3>
                    
                    </div>
                    
                
                </div>
            </div>
            <p>
            <p className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Current Role</p>
            
                <ul className='list-disc'>
                    <li><span className='font-bold text-slate-800'>
                        React Developer at GCP.AI: </span>
                    Working to develop the front-end interface of a process simulation web application
                    deployed on Google App Engine. DigiTwin harnesses machine learning to simulate business processes 
                    by representing processes as nodes, with associated relationships that represent decision making
                    within a business context.  
                    </li>
                </ul>
            </p>
           
            <p className='pb-10'>
            <p className="pb-5 mt-5 font-bold text-slate-900 text-2xl">Previous Roles</p>
                <ul className='list-disc -mt-2'>
                    <li><span className='font-bold text-slate-800'>Data Engineer at Accenture Data Studio (Accenture Internal Asset): </span> 
                    Developed back-end python scripts for custom document extractor framework, deployed on Google Cloud Function. This application automated 
                    the extraction, processing and storage of data from a variety of documents (ie driving license, passport, mortgage applications) to be used 
                    used by different teams across Accenture.
                    Created and still maintaining a comprehensive technical documentation of the asset to enable reusability.
                    </li>
                </ul>
            </p>
            <p>
                <ul className='list-disc -mt-4'>
                    <li><span className='font-bold text-slate-800'>Test / Automation Engineer at UK Royal Mail Account: </span>
                    Written and automated UI/UX test cases for employee attendance 
                    web application with Java, Selenium and Cucumber frameworks.
                    </li>
                </ul>
            </p>

            {/* Tools, skills and certifications */}
            <p className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Tools</p>
            <div className='flex justify-start flex-wrap'>
                <img src={reactLogo} alt="react" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' />
                <img src={tailwindLogo} alt="tailwind" className='hover:scale-110 transition ease-in-out delay-50 -ml-3 pr-3 max-h-16 rounded-full'/>
                <img src={PythonLogo} alt="python" className='hover:scale-110 transition ease-in-out delay-50 pr-4 max-h-16 rounded-full' />
                <img src={tfLogo} alt="tensorflow" className='hover:scale-110 transition ease-in-out delay-50 pb-2 max-h-16 rounded-full'/>
                <img src={JavaLogo} alt="java" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full'/> 
                <img src={jsLogo} alt="javascript" className='hover:scale-110 transition ease-in-out delay-50 -ml-4 max-h-16 rounded-full' />
                <img src={gitLogo} alt="git" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' />

            </div>

            <p className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Relevant Certifications</p>
            <div className='flex justify-start'>

                <a href={gcpCred}><img src={googleLogo} alt="gcp" className='mr-5 hover:scale-110 transition ease-in-out delay-50 max-h-16'/></a>
                <a href={awsCred}><img src={awsLogo} alt="aws" className='py-1 hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' /></a>
             </div>


            </div>

            {/*-------------------------------------------------------------------------- University of Liverpool --------------------------------------------------------------*/} 

            <div className=' mb-10 shadow-lg p-10 rounded-xl'>
            <div >
                <div className='flex justify-center'>
                    <img src={universityLogo} alt="accenture" className="h-20 w-15 mt-3" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5 pl-2">University of Liverpool</h2>
                    <h3 className='font-md italic pl-4'>February 2021 - March 2022</h3>
                    
                    </div>
                
                </div>
            </div>
            <p className='mt-10'>
                <ul className='list-disc'>
                    <li><span className='font-bold text-slate-800'>International Student Ambassador: </span> 
                    Advised incoming / current students on student life, 
                    UK visa regulations, student finance and academics. Conducted campus tours for incoming students, and created
                    digital content for the university's social media handles. 
                    </li>
                </ul>
            </p>

            </div>


            
            
        </div>
    )
}