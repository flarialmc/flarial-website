export type BlogPost = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
