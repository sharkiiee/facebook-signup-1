export function Navbar()
{
    return <div className="container flex mt-36 mx-auto w-4/5 items center justify-center">
        <div className="left  mx-14">
            <img src="./images/logo.png" alt="logo" className="h-28  mx-5"/>
            <p className="text-3xl mx-2">Facebook helps you connect and share with the people in your life.</p>
        </div>

        <div className="right flex flex-col bg-white p-8 rounded-xl relative">
            <input type="text" placeholder="Email address or phone number" className="px-8 h-12 my-2 text-lg outline-blue-500 focus:shadow-md  focus:shadow-blue-300 rounded-md w-80 border border-1"/>
            <input type="password" placeholder="Password" className="px-8 h-12 my-2 text-lg outline-blue-500 focus:shadow-md  focus:shadow-blue-300 rounded-md w-80 border border-1"/>
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-80 p-3 my-2 font-bold text-xl rounded-md">Log in</button>
            <a href="" className="text-blue-500 my-2 text-center hover:underline">Forgotten password?</a>
            <hr/>
            <button className="bg-lime-500 hover:bg-lime-600 text-white w-fit p-3 mx-auto my-2 font-bold rounded-md">Create new account</button>

            <span className="absolute -bottom-8 text-sm"><span className=" font-bold hover:underline cursor-pointer">Create a page</span> for a celebrity, brand or businesses</span>
        </div>
    </div>
}