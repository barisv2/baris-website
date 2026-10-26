import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: 'Barış Gürbüzler',
		description: 'Essays and notes on building, marketing, and life.',
		site: context.site,
		items: posts
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/writing/${post.id.replace('.md', '')}/`,
			})),
	});
}
