/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react'
const BlogForm=({
    Addblog,
    title,
    handleTitleChange,
    author,
    handleAuthorChange,
    url,
    handleUrlChange,
    likes,
    handleLikesChange}
) => {
    return(
<form onSubmit={Addblog}>
<div>
  Title:
    <input
    type="text"
    value={title}
    name="Title"
    onChange={handleTitleChange}
  />
</div>
<div>
  Author:
    <input
    type="text"
    value={author}
    name="Author"
    onChange={handleAuthorChange}
  />
</div>
<div>
  Url:
    <input
    type="text"
    value={url}
    name="Url"
    onChange={handleUrlChange}
  />
</div>
<div>
  Likes:
    <input
    type="text"
    value={likes}
    name="Likes"
    onChange={handleLikesChange}
  />
</div>
<button type="submit">Add</button>
</form>
    )}

    export default BlogForm