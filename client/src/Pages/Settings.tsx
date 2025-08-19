import { Sidebar } from "../components/Sidebar";

const Settings = () => {
    return ( 
        <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">Settings Page</main>
              </div>
     );
}
 
export default Settings;