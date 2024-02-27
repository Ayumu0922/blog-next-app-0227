import Comments from "@/components/Comments";
import FormComments from "@/components/FormComments";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className=" max-w-4xl mx-auto py-8 glassBackgroundColor p-6 mt-8">
      <h1 className=" text-3xl font-bold ">Post one</h1>
      <p>Written by :ayumu </p>
      <div className=" mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        veritatis iusto dicta suscipit cumque non, obcaecati labore tenetur vero
        recusandae error vitae ipsum placeat perspiciatis repudiandae
        necessitatibus? Nostrum, velit rerum.
      </div>

      <Comments />
      <FormComments />
    </div>
  );
};

export default BlogDetailPage;
