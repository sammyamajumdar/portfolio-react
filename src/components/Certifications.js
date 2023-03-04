import googleLogo from './Photos/google_cloud.png'
import awsLogo from './Photos/aws.png'
import nptelLogo from './Photos/nptel.png'



export default function Certifications () {
    return (
        

        <div>
        <h1 className="font-bold px-40 py-0 text-3xl text-teal-700">CERTIFICATIONS</h1>

        {/* ------------------------ GCP ----------------------------*/}

        <div className=' mb-10 shadow-lg p-10 rounded-xl ml-40 mr-40'>
        <div >
            <div className='flex justify-center pr-10 mr-8'>
                <img src={googleLogo} alt="accenture" className="h-20 w-15 mt-3" />
                <div className=''>
                <h2 className="font-semibold text-xl pt-5 pl-3">Cloud Digital Leader</h2>
                <h3 className='font-light italic pl-2'>January 2023 - January 2026</h3>
                
                </div>
            
            </div>
        </div>
        <div className='flex justify-center'>
        <button className='py-2 px-3 mt-5 border hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-teal-500 text-white rounded-lg hover:bg-gradient-to-r from-cyan-500 t0-teal-500'>
        
        View Credential
        
        </button>
        </div>
        </div>

        {/* ------------------------ AWS ----------------------------*/}

        


        <div className='mb-10 shadow-lg p-10 rounded-xl ml-40 mr-40'>
        <div >
            <div className='flex justify-center pr-5'>
                <img src={awsLogo} alt="accenture" className="h-20 w-15 mt-3" />
                <div className=''>
                <h2 className="font-semibold text-xl pt-5 pl-3">Certified Cloud Practitioner</h2>
                <h3 className='font-light italic pl-12'>August 2022 - August 2025</h3>
                
                </div>
            
            </div>
        </div>

        <div className='flex justify-center'>
        <button className='py-2 px-3 mt-5 border hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-teal-500 text-white rounded-lg hover:bg-gradient-to-r from-cyan-500 t0-teal-500'>
        
        View Credential
        
        </button>
        </div>
        </div>

        {/* ------------------------ NPTEL ----------------------------*/}
        
        <div className=' flex justify-center mb-10 shadow-lg p-10 rounded-xl ml-40 mr-40'>
        <div >
            <div className='flex justify-center'>
                <img src={nptelLogo} alt="accenture" className="h-20 w-15 mt-3" />
                <div className=''>
                <h2 className="font-semibold text-xl pt-5 pl-6">Fundamentals of Electric Drives</h2>
                <h2 className="font-semibold text-lg pt-0 pl-3">Indian Institute of Technology, Kanpur</h2>
                <h3 className='font-light italic pl-20 ml-0 mr-2 pr-2'>October 2019</h3>
                
                </div>
            
            </div>
            <div className='flex justify-center'>
            <button className='py-2 px-3 mt-5 border hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-teal-500 text-white rounded-lg hover:bg-gradient-to-r from-cyan-500 t0-teal-500'>
            
            View Credential
            
            </button>
            </div>
            
        </div>


        </div>

        

        


        </div>
    )
}