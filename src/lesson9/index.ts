/* interfaces, or a way of defining certain structure 
that other data structures can adhere to, whether they 
are object literals, classes or even interfaces*/

//lets say we have a blog app, and here we have a list of authors
//that are represented by an object. They all need to adhere to a specific object structure
//they might need a name property string, and an avatar property which could also be str, (pointing to a url)

//we can impose that sort of structure using an interface

interface Author {
  name: string;
  avatar: string;
}
//by setting type: Author below, we constrain the object to follow the structure we have defined
const authorOne: Author = {
  name: "ryu",
  avatar: "/img/ryu.png",
  //age: 30 wouldnt be allowed
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  createdAt: Date;
  author: Author;
}

const post1: Post = {
  title: "my first post",
  body: "somethjing intersting",
  tags: ["gaming", "snacks", "hobbytime"],
  createdAt: new Date(),
  author: authorOne,
};

/* using interfaces as argument types */
//below we demand that the argument inserted is of type Post
//when we use post, because it knows what it is, we get code completion for it
function createPost(post: Post): void {
  //                                    it suggested name \/ and avatar below for author
  console.log(`created post ${post.title} by ${post.author.name}`);
}

//createPost({title:'a new post'}) wont work, because it needs a Post object.
createPost(post1);

/* using interfaces with arrays */

let posts: Post[] = [];

//posts.push('hello')
//posts.push({title: 'hi', body: 'sup'})
posts.push(post1);

/* important to know that if we removed : Post from line 30, we could still
pass it in to line 47 and 55, and because the object exactly conforms to the 
Post structure that createPost and posts requires, everything would still work */
