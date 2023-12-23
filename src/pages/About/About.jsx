
const About = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom left, rgba(56, 57, 59, 0.7), rgba(237, 47, 95, 0.4))' }} className='md:space-y-6 py-6'>
            <div className="grid md:grid-cols-2 md:gap-10 md:mx-20 " >
                <div
                    data-aos="zoom-in-right"
                    className=' grid content-center space-y-6 mt-6 mx-6 md:pr-6 '>
                    <h2 className='text-xl font-bold text-slate-200'>ABOUT CAR SHOP</h2>
                    <h2 className='text-5xl font-bold '>Welcome to CAR SHOP</h2>
                    <p>Welcome to the [CarShopName] online platform—an all-inclusive destination for buying your next vehicle. Our car shop is designed to cater to the diverse needs and preferences of car enthusiasts and buyers looking for their ideal ride.</p>
                    <button className='btn btn-primary w-max'>Read More</button>
                </div>
                <img
                    data-aos="zoom-in-left"
                    className='w-11/12 mx-auto my-6 rounded-xl' src={"https://i.ibb.co/FwJnwV9/Toyota-GR-Supra.jpg"} alt="" />

            </div>
            <div className="grid md:grid-cols-2 md:gap-10 mx-6 md:mx-20 md:pt-10">
                <div className='md:max-w-md space-y-3'>
                    <div>
                        <h4 className='text-2xl font-bold'>Extensive Inventory: </h4>
                        <p>Explore a wide range of vehicles, from compact cars to spacious SUVs, showcasing top brands and models.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Comprehensive Information: </h4>
                        <p>Access detailed listings for each vehicle, featuring specifications, mileage, features, and high-quality images.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Secure Transactions: </h4>
                        <p>Enjoy a secure and streamlined checkout process to make your purchase with confidence</p>
                    </div>
                </div>
                <div className='md:max-w-md pt-10 md:pt-0 md:ms-10 space-y-6'>

                </div>

            </div>




        </div>
    );
};

export default About;