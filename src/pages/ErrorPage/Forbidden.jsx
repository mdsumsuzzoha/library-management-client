
const Forbidden = () => {
    return (
        <div className=" mx-auto min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl font-bold mb-4">403 Forbidden</h1>
                <p className="text-lg mb-4">Sorry, you dont have permission to access this page.</p>
                {/*  add more content,  or styles as needed */}
            </div>
        </div>
    );
};

export default Forbidden;