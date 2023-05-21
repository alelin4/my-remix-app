type Post = {
    slug: string;
    title: string;
  };
  
  export async function getPosts(): Promise<Array<Post>> {
    return [
      {
        slug: "first post",
        title: "My First Post",
      },
      {
        slug: "this is my first post",
        title: "post nr:2",
      },
    ];
    
  }