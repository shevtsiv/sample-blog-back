# SampleBlog back-end side

This project is a NodeJS application that serves all the information for the front-end side of the application which can
be found following this link: github.com/shevtsiv/sample-blog

You can find general information about the project purposes in the front-end application description and here I would
tell a little about its technical sides, since the majority of the logic is implemented
on the server-side and front-end application does representing job only.

Since the main subject of the project is a blog, this application serves client with those blog posts.
Blog posts are stored in a file system just for the simplicity sake. 
There are 2 main endpoints that are responsible for serving blog post information:
1) /posts/
2) /posts/:id

The first one gives a list of the all blog posts available. However, at this point, client does not need all the posts
content, so the blog post unit is broken down into 2 parts:
1) Blog post content - It is stored as a .md file under public/posts/content location and contains post content only.
2) Blog post definition - It is stored as a .json file under public/posts location and contains blog post metadata only.
Post's metadata looks like:
```json
{
  "id": <unique id of the blog post>,
  "title": <blog post title>,
  "imageURL": <url to the blog post's image>
}
```
When the client enters the main pages it is served with post definitions only for the performance and network efficient
usage purposes. All the posts are sorted in descending order so that the new blog post would be always on top.
When user clicks on the specific blog post it is served with its content with its metadata shipped together.
At this moment, post content is being read from the .md file and cached, so that the further read would perform better.
This can occur when author is posting new article, and a lot of people try to acquire its content.
At the moment, new blog post is available to the clients after the server restart only, since all the definitions are
read at the startup stage for the performance purposes.
