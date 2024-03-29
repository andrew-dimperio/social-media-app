import React, { useState } from "react";

function CreatePostForm({ onPostSubmit }) {
    const [postTitle, setPostTitle] = useState("");
    const [aboutPost, setAboutPost] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onPostSubmit(postTitle, aboutPost);
        setPostTitle("");
        setAboutPost("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title of Post</label> {/* Changed "for" to "htmlFor" */}
            <input
                type="text"
                name="postTitle"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <br />
            <label htmlFor="aboutPost">What's this post about?</label> {/* Changed "for" to "htmlFor" */}
            <input
                type="text"
                name="aboutPost"
                value={aboutPost}
                onChange={(e) => setAboutPost(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" />
        </form>
    );
}

export default CreatePostForm;
