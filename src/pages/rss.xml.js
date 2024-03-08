import rss from '@astrojs/rss';
// eslint-disable-next-line import/no-unresolved
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('greetings');

  return rss({
    title: 'AstroBuild.tips',
    description: 'My First Page in Astro.build',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  });
}
