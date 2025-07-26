import type { CollectionEntry } from "astro:content";

const getPublishedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts.filter((_post) => !_post.data.draft);
};

export default getPublishedPosts;
