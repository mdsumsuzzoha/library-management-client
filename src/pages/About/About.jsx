
const About = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom left, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className='md:space-y-6 py-6'>
            <div className="grid md:grid-cols-2 md:gap-10 md:mx-20 " >
                <div
                    data-aos="zoom-in-right"
                    className=' grid content-center space-y-6 mt-6 mx-6 md:pr-6 '>
                    <h2 className='text-xl font-bold text-slate-200'>ABOUT ABC Library</h2>
                    <h2 className='text-5xl font-bold '>Welcome to ABC Library</h2>
                    <p>ABC Library fosters discovery with a vast collection of books, digital resources, and engaging programs. Its a community hub, nurturing lifelong learning, research, and imagination through inclusive services, events, and a welcoming environment for all ages and interests.</p>
                    <button className='btn btn-primary w-max'>Read More</button>
                </div>
                <img
                    data-aos="zoom-in-left"
                    className='w-11/12 mx-auto my-6 rounded-xl' src="https://i.ibb.co/1nx9nSg/Library-about.jpg" alt="" />

            </div>
            <div className="grid md:grid-cols-2 md:gap-10 mx-6 md:mx-20 md:pt-10">
                <div className='md:max-w-md space-y-3'>
                    <div>
                        <h4 className='text-2xl font-bold'>ABC Librarys Literary Cornucopia </h4>
                        <p>A repository of diverse genres, from classics to contemporary, fostering reading passions through curated collections and engaging author sessions.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Digital Oasis at ABC Library</h4>
                        <p>A tech-savvy haven offering online resources, e-books, and digital archives, empowering modern learning and exploration.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Community Hub & Lifelong Learning Center</h4>
                        <p>Beyond books, its a vibrant space nurturing curiosity, providing workshops, and hosting events, fostering an inclusive culture of knowledge sharing and growth.</p>
                    </div>
                </div>
                <div className='md:max-w-md pt-10 md:pt-0 md:ms-10 space-y-6'>

                </div>

            </div>




        </div>
    );
};

export default About;