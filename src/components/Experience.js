import AccentureLogo from './Photos/accenture.jpg';
import universityLogo from './Photos/education_logo_1.png'

export default function Experience() {
    return (
        <div className='px-40 relative'>

            <h1 className="font-bold py-0 text-3xl text-teal-700">EXPERIENCE</h1>
            
            <div className=' mb-10 shadow-lg p-10 rounded-xl '>
            <div >
                <div className='flex justify-center'>
                    <img src={AccentureLogo} alt="accenture" className="h-20 w-20" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5">Accenture UK</h2>
                    <h3 className='font-light italic'>April 2022 - Present</h3>
                    
                    </div>
                    
                
                </div>
            </div>
            <p>
            <p className="pb-5 mt-10 font-bold text-teal-700 text-2xl">Current Role</p>
            
                <ul className='list-disc'>
                    <li><span className='font-bold text-teal-600'>Front End Web Developer at GCP.AI  (Accenture Internal Asset): </span> Working on the front-end 
                    development of a GCP hosted webite using React, NodeJS, Express 
                    and Firestore, aimed to help financial institutions to identify bottlenecks
                    in mortgage/credit-card applications.
                    </li>
                </ul>
            </p>
           
            <p className='pb-10'>
            <p className="pb-5 mt-10 font-bold text-teal-700 text-2xl">Previous Roles</p>
                <ul className='list-disc'>
                    <li><span className='font-bold text-teal-600'>Data Engineer at Accenture Data Studio (Accenture Internal Asset): </span> 
                    Developed back-end python scripts for custom document extractor framework, deployed on Google Cloud Function aimed at automating 
                    the extraction, processing and storage of data from a variety of documents (ie driving license, passport, mortgage applications).
                    Created comprehensive technical documentation of the asset to enable reusability across teams.
                    </li>
                </ul>
            </p>
            <p>
                <ul className='list-disc'>
                    <li><span className='font-bold text-teal-600'>Test / Automation Engineer at UK Royal Mail Account: </span>
                    Written and automated UI/UX test cases for employee attendance 
                    web application with Java, Selenium and Cucumber frameworks.
                    </li>
                </ul>
            </p>
            </div>

            {/*-------------------------------------------------------------------------- University of Liverpool --------------------------------------------------------------*/} 

            <div className=' mb-10 shadow-lg p-10 rounded-xl'>
            <div >
                <div className='flex justify-center'>
                    <img src={universityLogo} alt="accenture" className="h-20 w-15 mt-3" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5 pl-2">University of Liverpool</h2>
                    <h3 className='font-light italic pl-5'>February 2021 - March 2022</h3>
                    
                    </div>
                
                </div>
            </div>
            <p className='mt-10'>
                <ul className='list-disc'>
                    <li><span className='font-bold text-teal-600'>International Student Ambassador: </span> 
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