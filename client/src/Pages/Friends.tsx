import { Sidebar } from "../components/Sidebar";


const Friends = () => {
    return ( 
        <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">Friends</main>
              </div>
     );
}
 
export default Friends;