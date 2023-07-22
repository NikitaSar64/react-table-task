import { IPost } from "@interfaces/post.interface";

export const searchPosts = (posts: IPost[], text: string) => {
  const searchPosts = [];
  for (const post of posts) {
    if (
      post.id.toString().includes(text) ||
      post.title.includes(text) ||
      post.body.includes(text)
    ) {
      searchPosts.push(post);
    }
  }

  return searchPosts;
};
