import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaRegEye, FaRegHeart, FaUser } from "react-icons/fa";
import { FiSearch } from 'react-icons/fi';
import { useLoaderData } from 'react-router';

const News = () => {
    const [allNews, setAllNews] = useState([]);
    console.log(allNews)
    const [categories, setCategories] = useState([]);
    console.log()
    useEffect(() => {
        axios.get("http://localhost:3000/news")
            .then((result) => {
                setAllNews(result.data);
            })
        axios.get("http://localhost:3000/categories")
            .then((result) => {
                setCategories(result.data);
            })
    }, []);
    return (
        <div className="max-w-7xl mx-auto px-5 py-2">
            <h1 className='text-4xl text-center font-bold text-secondary pb-3'>News</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                <div className="lg:col-span-3 max-w-3xl ">

                    {
                        allNews.map(news => <div className="bg-white rounded-lg m-5 overflow-hidden shadow hover:shadow-xl duration-300">

                            {/* Image */}
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-[340px] object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">

                                {/* Top Info */}
                                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">

                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-primary" />
                                        <span>{news.date}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-primary" />
                                        <span>{news.author}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaRegEye className="text-primary" />
                                        <span>{news.views}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaRegHeart className="text-pink-500" />
                                        <span>{news.likes}</span>
                                    </div>

                                </div>

                                {/* Title */}
                                <h2 className="mt-4 text-4xl font-bold text-secondary leading-tight">
                                    {news.title}
                                </h2>

                                {/* Description */}
                                <p className="mt-4 text-gray-600 leading-8">
                                    {news.description}
                                </p>

                                {/* Button */}
                                <button className="mt-8 px-8 py-3 rounded-full bg-btn1 text-secondary font-semibold hover:bg-primary hover:text-white duration-300">
                                    Read More →
                                </button>

                            </div>

                        </div>)
                    }
                </div>

                {/* Right */}
                <div className="space-y-8">
                    <div className="bg-btn2 rounded-md p-3 flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent w-full outline-none text-white placeholder:text-gray-300"
                        />

                        <FiSearch className="text-2xl text-white" />
                    </div>
                    {/* Recent Posts */}
                    <h2 className="text-4xl font-bold text-secondary mb-6">
                        Recent Posts
                    </h2>

                    <div className="space-y-5 border border-gray-300 rounded-md p-4">
                        {
                            allNews.map(post => (
                                <div
                                    key={post._id}
                                    className="flex gap-3"
                                >

                                    <img
                                        src={post.image}
                                        alt=""
                                        className="w-20 h-20 rounded object-cover"
                                    />

                                    <div>

                                        <p className="text-primary text-xs">
                                            {post.date}
                                        </p>

                                        <h3 className="text-lg leading-6 text-gray-700">
                                            {post.title}
                                        </h3>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    {/* Categories */}
                    <h2 className="text-4xl font-bold text-secondary mb-8">
                        Categories
                    </h2>

                    <div className="space-y-8 border border-gray-300 rounded-md p-4">

                        {
                            categories.map(category => (
                                <div
                                    key={category._id}
                                    className="flex justify-between items-center"
                                >

                                    <span className="tex text-secondary">
                                        {category.name}
                                    </span>

                                    <div className="w-7 h-7 rounded-full bg-primary text-white flex justify-center items-center font-semibold">
                                        {category.count}
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;