import { Sidebar } from "../components/Sidebar";

const Help = () => {
    return ( 
        <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">Help Page</main>
              </div>
     );
}
 
export default Help;