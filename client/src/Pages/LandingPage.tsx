import Navbar from "../components/Navbar";

const LandingPage = () => {
    return ( 
        <div className="flex flex-col w-full">
<Navbar />
<div className="w-full flex flex-col items-center justify-center h-full">
    <div className="w-full flex items-center justify-center p-10">
<p className="text-5xl font-bold w-180 text-center leading-15">Lost something? Found something? Join in, let's help each other</p>
    </div>

</div>
        </div>
     );
}
 
export default LandingPage;