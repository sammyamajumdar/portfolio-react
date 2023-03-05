import { useState } from 'react'
import universityLogo from './Photos/education_logo_1.png'
import makautLogo from './Photos/makaut.png'
import matlabLogo from './Photos/simulink.jpeg'
import cppLogo from './Photos/cpp.png'
import nptelLogo from './Photos/nptel.png'
import coursera from './Photos/Deep-Learning-Ai-logo.png'
import masterDegree from './Files/masterDegree.pdf'
import bachelorDegree from './Files/bachelorDegree.pdf'
import transcriptReport from './Files/HEARreport.pdf'
import masterThesis from './Files/thesis.pdf'
import bachelorTranscript from './Files/bachelorTranscript.pdf'




export default function Education() {

    const deepLearningCred = "https://coursera.org/share/bb1776981ac32919292a895971f16901"

    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("Long description");


    const handleClick = () => {
        setShow(!show);
        if (!show === true) {
        setButtonText("Short description")
        }
        else{
            setButtonText("Long description")
        }
    }

    return (
        <div className='px-[20%]'>
        <h1 className="font-bold py-0 text-3xl text-slate-900">EDUCATION</h1>
        <div className=' mb-10 shadow-lg p-10 rounded-xl'>
            <div >
                <div className='flex justify-center'>
                    <img src={universityLogo} alt="accenture" className="h-20 w-15 mt-3" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5 pl-2">University of Liverpool</h2>
                    <h3 className='font-md italic pl-2'>October 2020 - December 2021</h3>
                    
                    </div>
                
                </div>
            </div>
            <p className='mt-10'>
            
                    <span className='font-bold text-slate-800 align-middle flex justify-center'>Master of Science, M.Sc - Energy and Power Systems</span>
                    <span className='font-bold text-slate-700 align-middle flex justify-center'>Department of Electronics and Electrical Engineering</span>
                    <span className='font-bold text-slate-600 align-middle flex justify-center italic'>Grade: First Class (Disctinction)</span>     
            </p>

            <p className='mt-10'>
            
                <div className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Modules:</div>
                <span className='text-xl font-semibold text-slate-800'>Semester 1</span>
                <ul className="list-disc">
                    <li>Electric Drives</li>
                    <li>Plasma System Engineering</li>
                    <li>Power Systems: Analysis and Dynamics</li>
                    <li>Engineering Programming</li>
                    <li>Measurement, Monitoring and Sensors</li>
                </ul>

                <div className='mt-5 text-slate-800 text-xl font-semibold'>Semester 2</div>
                <ul className='list-disc'>
                    <li>Electromagnetic Compatibility</li>
                    <li>High Voltage Engineering</li>
                    <li>Advanced Power Electronics</li>
                    <li>Renewable Energy and Smart Grid</li>
                </ul>

                <div className='mt-5 text-slate-800 text-xl font-semibold'>Semester 3</div>
                <ul className='list-disc'><li>Masters Thesis</li></ul>
                <div className='font-bold mt-5 flex justify-start'>
                    Optimisation and prediction of a 
                    catalytic process for low carbon fuel synthesis using machine learning. 
                    
                
                </div>
                <div className='my-3'>
                    <button onClick={handleClick} className='border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-500'>
                    {buttonText}
                    </button>
                    <a href={masterThesis}><button className='ml-5 border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-700'>Download PDF</button></a>
                </div>
                {
                show?<div className="transition ease-in-out delay-100">
                Dry Reformation of Methane (DRM) has been the topic of significant research because of its property of converting two of the most significant 
                greenhouse gases present in earth’s atmosphere, carbon dioxide (CO) and methane (CH<sub>4</sub>) to produce syngas, a mixture of carbon monoxide (CO) and hydrogen (H2). 
                Syngas is useful to manufacture straight chain hydrocarbons by the Fischer Tropsch process and allows the extraction of hydrogen for hydrogen power cells. 
                However, this highly endothermic reaction has led
                to difficulties in the choice of catalysts as high reaction temperatures cause catalyst deactivation due to coke formation on the catalyst surface and thermal sintering. 
                Nickel (Ni) and Cobalt (Co) over Al2O3 support are the two most researched catalysts in this reaction because of their high availability and low cost. 
                This work aims to develop an Artificial Neural Network (ANN) approach to advance the understanding of the effect various reaction and operational parameters have on the methane conversion rate. 
                Because of the large number of experimental descriptors, data mining tools such as ANNs can spot statistical patterns and correlations within the data which is not possible by manual inspection. 
                The data was collected from the relevant literature on DRM reactions and the model developed in this thesis was tested against unseen data and ANN models previously developed in the literature.
                Dry Reformation of Methane (DRM) has been the topic of significant research because of its property of converting two of the most significant greenhouse gases present in earth’s atmosphere, carbon dioxide (CO) and methane (CH4) to produce syngas, a mixture of carbon monoxide (CO) and hydrogen (H2). 
                Syngas is useful to manufacture straight chain hydrocarbons by the Fischer Tropsch process and allows the extraction of hydrogen for hydrogen power cells.
                However, this highly endothermic reaction has led to difficulties in the choice of catalysts as high reaction temperatures cause catalyst deactivation due to coke formation on the catalyst surface and thermal sintering. Nickel (Ni) and Cobalt (Co) over Al2O3 support are the two most researched catalysts in this reaction because of their high availability and low cost. 
                This work developed an Artificial Neural Network approach to advance the understanding of the effect various reaction and operational parameters have on the methane conversion rate. Because of the large number of experimental descriptors, data mining tools such as ANNs can spot statistical patterns and correlations within the data which is not possible by manual inspection. 
                The data was collected from the relevant literature on DRM reactions and the model developed in this thesis was tested against unseen data and ANN models previously developed in the literature.
                
                </div>:<div>
                Developed a deep learning approach to predict catalytic activity in synthesis gas 
                (syngas) production from methane 
                in the dry reforming of methane under the supervision of Prof. Xin Tu.
                </div>
                }        

            </p>

            
            <div className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Tools</div>
            <div className='flex justify-start'>
                <img src={matlabLogo} alt="matlab" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' />
                <img src={cppLogo} alt="matlab" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' />
            </div>
            <div className='flex justify-center mt-10'>
            <a href={masterDegree}><button className='mr-10 border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-700'>View degree</button></a>
            <a href={transcriptReport}><button className='border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-700'>View transcript</button></a>
            </div>

            </div>


        


            {/*-------------------------------------------------------------------------- MAKAUT --------------------------------------------------------------*/} 





            <div className=' mb-10 shadow-lg p-10 rounded-xl'>
            <div >
                <div className='flex justify-center px-[10%]'>
                    <img src={makautLogo} alt="accenture" className="h-20 w-15" />
                    <div className=''>
                    <h2 className="font-bold text-xl pt-5 pl-2">Maulana Abul Kalam Azad University of Technology</h2>
                    <h3 className='font-md italic flex justify-center'>August 2016 - June 2020</h3>
                    
                    </div>
                
                </div>
            </div>
            <p className='mt-10'>
            
                    <span className='font-bold text-slate-800 align-middle flex justify-center'>Bachelor of Technology, B.Tech - Electrical Engineering</span>
                    <span className='font-bold text-slate-700 align-middle flex justify-center'>Department of Electrical Engineering</span>
                    <span className='font-medium text-slate-600 align-middle flex justify-center italic'>Grade: 7.84 / 10 </span>     
            </p>

            <p className='mt-10'>
            
            <div className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Selected Modules</div>
            <ul className="list-disc">
                <li>Power Systems</li>
                <li>Power Electronics</li>
                <li>Control Systems</li>
                <li>High Voltage Engineering</li>
                <li>Digital Signal Processing</li>
                <li>Engineering Mathematics</li>
            </ul>

            </p>
            <div className="pb-5 mt-10 font-bold text-slate-900 text-2xl">Relevant Certifications</div>
                <div className='flex justify-start'>
                    <a href="https://drive.google.com/file/d/1bMZA58KMbqZM0wnKl4GwHsxDpDHDNHws/view"><img src={nptelLogo} alt="nptel" className='hover:scale-110 transition ease-in-out delay-50 max-h-16 rounded-full' /></a>
                    <a href={deepLearningCred}><img src={coursera} alt="nptel" className='hover:scale-110 transition ease-in-out delay-50 max-h-20 rounded-full pl-5' /></a>
                </div>
            <div className='flex justify-center mt-10'>
                <a href={bachelorDegree}><button className='mr-10 border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-700'>View degree</button></a>
                <a href={bachelorTranscript}><button className='border py-2 px-4 hover:shadow-md transition ease-in-out delay-75 hover:scale-105 bg-slate-700 text-white rounded-lg hover:bg-gradient-to-r from-slate-600 t0-slate-700'>View transcript</button></a>
            </div>
            </div>
            
            


        
        </div>
    )
}


