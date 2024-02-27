import { posts } from "@/data/posts";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className=" max-w-4xl mx-auto py-8">
      <h1 className=" text-3xl font-bold mb-4 ">
        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
              className="glassBackgroundColor rounded-sm p-4"
            >
              <h2 className=" text-xl font-bold">{post.title}</h2>
              <p className=" text-base ">Written by: {post.username}</p>
            </Link>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default BlogsPage;
