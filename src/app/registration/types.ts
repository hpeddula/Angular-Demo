export type Author = {
    id: number;
    firstName: string;
    lastName: string;
  }
export type Query={
    authors: Author[];
posts: Post[];
}
export type mutation = { 
    createAuthor:Author
}
export type Post = {
    id: number;
    title: string;
    votes: number;
}

  
  export type Mutation = {
    upvotePost: Post;
  }
   