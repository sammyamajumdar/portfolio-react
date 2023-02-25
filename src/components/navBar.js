export default function navBar () {
    return (
        <div className=" bg-slate-200/50">
        <section>
            <nav className="py-10 mb-12 pl-10 pr-5 flex justify-between">
                <h1 className='text-4xl font-bold text-cyan-700'>Sammya Majumdar</h1>
                <ul className='flex items-center'>
                    <li className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 '>
                        <a href="resume">
                            Resume
                        </a>
                    </li>
                    <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105'> 
                        <a href="contact" className="">
                            Contact
                        </a>
                    </li>
                </ul>
                </nav>
        </section>
        </div>
    )
}