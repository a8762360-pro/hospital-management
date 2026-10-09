import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
// import useAuth from "../../hook/useAuth";
// import useAxiosSecure from "../../hook/UseAxiosSeceure";
// import U/seAuth from '../hook/useAuth';
import useAxiosSecure from '../hook/UseAxiosSeceure';
import UseAuth from '../hook/useAuth';

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I help you with MEDIN Hospital services today?' }
    ]);

    // Safe destructuring using optional chaining
    const auth = UseAuth?.() || {};
    const user = auth?.user;
    
    const axiosSecure = useAxiosSecure?.();

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = input.trim();
        setInput('');

        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setLoading(true);

        try {
            // axiosSecure না থাকলে ডিফল্ট fetch বা axios ব্যবহার করতে পারেন
            const res = await axiosSecure.post('/api/chat', {
                message: userMsg,
                userEmail: user?.email || 'Guest'
            });

            if (res.data?.reply) {
                setMessages(prev => [...prev, { sender: 'bot', text: res.data.reply }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [
                ...prev, 
                { sender: 'bot', text: 'Sorry, I am having trouble connecting right now.' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in">
                    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="font-semibold text-sm">MEDIN AI Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200 text-lg">
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-2xl max-w-[80%] ${
                                    msg.sender === 'user'
                                        ? 'bg-blue-600 text-white ml-auto rounded-br-none shadow-sm'
                                        : 'bg-white text-slate-800 border border-slate-200 mr-auto rounded-bl-none shadow-sm'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none max-w-[80%] mr-auto text-slate-400 italic">
                                MEDIN AI is thinking...
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
                        >
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-xl"
                >
                    <FaComments />
                </button>
            )}
        </div>
    );
};

export default ChatbotWidget;