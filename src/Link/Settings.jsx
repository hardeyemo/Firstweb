import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Settings = () => {
    const { user, dispatch } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:8800/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = { userId: user._id, username, email, password };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("http://localhost:8800/app/upload", data);
            } catch (err) {
                console.error("Failed to upload image:", err);
            }
        }
        try {
            const res = await axios.put(
                "http://localhost:8800/app/users/" + user._id,
                updatedUser
            );
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

    return (
        <div className="flex flex-col items-center mt-[55px] p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Account Settings</h1>

            <div className="w-full md:w-3/5 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">
                            Profile Picture
                        </label>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <img
                                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <label
                                htmlFor="fileInput"
                                className="bg-gray-700 text-white text-lg shadow-md px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800"
                            >
                                Change Picture
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={user.username}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={user.email}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-700 text-white text-lg px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-all"
                    >
                        Update
                    </button>

                    {success && (
                        <p className="text-green-500 mt-4 text-center">
                            Profile has been updated
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Settings;
