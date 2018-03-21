export type Author = {
    id: number;
    firstName: String;
    lastName: String;
    posts: [Post]; 
}

export  type Post = {
    id: number;
    title: String;
    author: Author;
    votes: number;
  }

  
export  type Query = {
    posts: [Post];
    author(id: number): Author;
  }


export  type Mutation ={
    upvotePost (
      postId: number
    ): Post;
  }