import { Sidebar } from "../components/Sidebar";
import { Search, MapPin, Plus, X, LocateIcon } from "lucide-react";
// import { useAuth } from "@/components/auth-context"
import { useState } from "react";

type PostProp = {
  postContent: string;
  postType: string;
  date: string;
  itemName: string;
  location: string;
  imageUrl: string;
};

export default function Dashboard() {
  // const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postType, setPostType] = useState("");
  const [date, setDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [location, setLocation] = useState("");
  // const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState<File | null>(null);
  const [posts, setPosts] = useState<PostProp[]>([]);

  const handleCreatePost = () => {
    // Here you would typically send the post data to your backend
    console.log("Creating post:", {
      postContent,
      postType,
      itemName,
      location,
    });
    setPosts([
      ...posts,
      {
        postType,
        itemName,
        location,
        imageUrl: URL.createObjectURL(image!),
        date,
        postContent,
      },
    ]);
    setIsModalOpen(false);
    setPostContent("");
    setItemName("");
    setLocation("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-5 bg-white border-b border-gray-200 p-6 z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="font-sans font-bold text-3xl">
                  Welcome back, John!
                </h1>
                <p className="font-serif">
                  Here's what's happening in your lost and found community
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#4299e1] text-white rounded-md hover:bg-blue-600 transition-colors font-serif flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Report Lost Item
                </button>
                <button className="px-4 py-2 border border-[#4299e1] rounded-md text-[#4299e1] transition-colors font-serif flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Found Items
                </button>
              </div>
            </div>

            {/* quick search */}
            <div className="bg-[#2f3c4d] flex items-center justify-between rounded-lg border border-[#4a5568] shadow-lg p-5">
              <div className="w-2/3 flex flex-col gap-5">
                <p className="font-serif text-gray-300">
                  Search for lost or found items in your area
                </p>
                <input
                  placeholder="Search for items (e.g., wallet, keys, phone...)"
                  className="flex-1 px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                />
              </div>
              <div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-[#4299e1] text-white rounded-md hover:bg-blue-600 transition-colors font-serif flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Post
                </button>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-[#2f3c4d] rounded-lg border border-[#4a5568] shadow-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-[#4a5568]">
                  <h2 className="font-sans font-bold text-xl text-white">
                    Create New Post
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-200 hover:text-white hover:cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Post Type
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPostType("lost")}
                        className={`px-3 py-2 rounded-md font-serif text-sm ${
                          postType === "lost"
                            ? "bg-red-900 text-white"
                            : "bg-[#4a5568] text-[#e2e8f0] hover:bg-red-700 hover:text-white"
                        }`}
                      >
                        Lost Item
                      </button>
                      <button
                        onClick={() => setPostType("found")}
                        className={`px-3 py-2 rounded-md font-serif text-sm ${
                          postType === "found"
                            ? "bg-green-600 text-white"
                            : "bg-[#4a5568] text-[#e2e8f0] hover:bg-green-600 hover:text-white"
                        }`}
                      >
                        Found Item
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Date Found/Lost
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="e.g., iPhone, wallet, keys..."
                      className="w-full px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Item Name
                    </label>
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g., iPhone, wallet, keys..."
                      className="w-full px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Item Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      // value={imageUrl}
                      onChange={(e) => setImage(e.target.files?.[0] || null)}
                      // placeholder="e.g., iPhone, wallet, keys..."
                      className="w-full px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Where was it lost/found?"
                      className="w-full px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 font-sans">
                      Description
                    </label>
                    <textarea
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="Describe the item in detail..."
                      rows={4}
                      className="w-full px-3 py-2 bg-[#3d4a5c] text-gray-200 border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleCreatePost}
                      className="flex-1 px-4 py-2 bg-[#4299e1] text-white rounded-md hover:bg-blue-600 transition-colors font-serif"
                    >
                      Create Post
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-[#4a5568] text-white rounded-md hover:bg-gray-300 transition-colors font-serif"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="p-6 pt-2 space-y-4 flex flex-col items-center justify-center">
            {/* Sample Feed Posts */}

            <div className="w-[500px] flex flex-col gap-5 bg-[#2f3c4d] border border-gray-200 rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-md font-sans text-gray-700">JD</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-white">John Doe</p>
                    <p className="text-md text-gray-100 font-serif">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="text-md bg-red-300 text-red-700 px-2 py-2 rounded font-serif">
                  Lost
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-gray-300">
                  <span className="font-bold text-white">Item: </span>Black
                  Leather Wallet
                </p>
                <p className="text-md text-gray-300 font-serif mt-1">
                  <span className="font-bold text-white">Description:</span>{" "}
                  <br />
                  Lost my wallet near the downtown area. Contains ID and credit
                  cards. Please contact if found!
                </p>
                <div className="flex items-center text-md text-gray-300 mt-2 font-serif">
                  <LocateIcon className="text-white w-5 h-5 mr-1" />
                  <p>
                    <span className="font-bold text-white">Location: </span>
                    Downtown Area
                  </p>
                </div>
                <p className="text-md text-gray-300 font-serif mt-1">
                  <span className="font-bold text-white">Date: </span>
                  24th Januaray, 2025
                </p>
                <div className="mt-3">
                  <img
                    src="/placeholder-mud62.png"
                    alt="Black leather wallet"
                    className="w-full h-60 object-cover rounded-md border border-gray-200"
                  />
                </div>
              </div>
            </div>
            {/* Dynamic post */}
            {posts &&
              posts.map((post) => (
                <div className="w-[500px] flex flex-col gap-5 bg-[#2f3c4d] border border-gray-200 rounded-xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-md font-sans text-gray-700">
                          JD
                        </span>
                      </div>
                      <div>
                        <p className="font-sans font-medium text-white">
                          John Doe
                        </p>
                        <p className="text-md text-gray-100 font-serif">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div
                      className={`text-md ${
                        post.postType === "lost"
                          ? "bg-red-300 text-red-700"
                          : "bg-green-400 text-green-900"
                      }  px-2 py-2 rounded font-serif`}
                    >
                      {post.postType}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-serif text-gray-300">
                      <span className="font-bold text-white">Item: </span>
                      {post.itemName}
                    </p>
                    <p className="text-md text-gray-300 font-serif mt-1">
                      <span className="font-bold text-white">Description:</span>{" "}
                      <br />
                      {post.postContent}
                    </p>
                    <div className="flex items-center text-md text-gray-300 mt-2 font-serif">
                      <LocateIcon className="text-white w-5 h-5 mr-1" />
                      <p>
                        <span className="font-bold text-white">Location: </span>
                        {post.location}
                      </p>
                    </div>
                    <p className="text-md text-gray-300 font-serif mt-1">
                      <span className="font-bold text-white">Date: </span>
                      {post.date}
                    </p>
                    <div className="mt-3">
                      <img
                        src={post.imageUrl}
                        alt={post.itemName}
                        className="w-full h-60 object-cover rounded-md border border-gray-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}
