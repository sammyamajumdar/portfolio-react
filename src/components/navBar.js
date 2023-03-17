import react from 'react'
import { HandleMailSendModal } from './Modals/SendMailModal';

export default function navBar () {

    function handleOnClick() {
      
      setOpen(true)
    }
    const [open, setOpen] = react.useState(false)


    return (
      <div className="shadow-md pb-2 mb-10 pt-4 border-b border-gray-200 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20">
        <nav className="">
          <div className="mx-10 px-0">
            <div className="flex items-center justify-between h-16">
              <span className="text-2xl text-slate-800 font-semibold">Sammya Majumdar</span>
              <div className="flex space-x-4 text-gray-900">
              

                <a href="Projects" className="font-semibold text-lg hover:text-cyan-700 transition ease-in-out delay-50 hover:scale-105 hover:-translate-y-1">Resume</a>
                <p onClick={handleOnClick} className="font-semibold text-lg hover:text-cyan-700 transition ease-in-out delay-50 hover:scale-105 hover:-translate-y-1 cursor-pointer">Contact</p>
                <HandleMailSendModal props={
                  {open:open, 
                  setOpen:setOpen}
            } />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}