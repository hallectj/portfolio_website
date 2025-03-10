export interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export const articles: Article[] = [
  {
    title: 'Understanding Modern Web Development',
    excerpt: 'A comprehensive guide to modern web development practices and technologies.',
    image: '/placeholder.svg',
    date: '2024-01-15',
    slug: 'understanding-modern-web-development'
  },
  {
    title: 'The Future of JavaScript Frameworks',
    excerpt: 'Exploring upcoming trends and innovations in JavaScript framework development.',
    image: '/placeholder.svg',
    date: '2024-01-14',
    slug: 'future-of-javascript-frameworks'
  },
  {
    title: 'Building Scalable Applications',
    excerpt: 'Best practices for creating scalable and maintainable web applications.',
    image: '/placeholder.svg',
    date: '2024-01-13',
    slug: 'building-scalable-applications'
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'Deep dive into TypeScript features and advanced type system concepts.',
    image: '/placeholder.svg',
    date: '2024-01-12',
    slug: 'mastering-typescript'
  },
  {
    title: 'React Performance Optimization',
    excerpt: 'Tips and techniques for optimizing React applications for better performance.',
    image: '/placeholder.svg',
    date: '2024-01-11',
    slug: 'react-performance-optimization'
  },
  {
    title: 'Introduction to Web Assembly',
    excerpt: 'Understanding WebAssembly and its role in modern web development.',
    image: '/placeholder.svg',
    date: '2024-01-10',
    slug: 'introduction-to-web-assembly'
  },
  {
    title: 'CSS Architecture Patterns',
    excerpt: 'Exploring different CSS architecture patterns and methodologies.',
    image: '/placeholder.svg',
    date: '2024-01-09',
    slug: 'css-architecture-patterns'
  },
  {
    title: 'Serverless Computing',
    excerpt: 'Guide to building and deploying serverless applications.',
    image: '/placeholder.svg',
    date: '2024-01-08',
    slug: 'serverless-computing'
  },
  {
    title: 'GraphQL Best Practices',
    excerpt: 'Implementation patterns and best practices for GraphQL APIs.',
    image: '/placeholder.svg',
    date: '2024-01-07',
    slug: 'graphql-best-practices'
  },
  {
    title: 'Microservices Architecture',
    excerpt: 'Understanding microservices architecture and its implementation.',
    image: '/placeholder.svg',
    date: '2024-01-06',
    slug: 'microservices-architecture'
  },
  {
    title: 'Web Security Fundamentals',
    excerpt: 'Essential security concepts and practices for web applications.',
    image: '/placeholder.svg',
    date: '2024-01-05',
    slug: 'web-security-fundamentals'
  },
  {
    title: 'State Management in React',
    excerpt: 'Comparing different state management solutions in React applications.',
    image: '/placeholder.svg',
    date: '2024-01-04',
    slug: 'state-management-react'
  },
  {
    title: 'Progressive Web Apps',
    excerpt: 'Building modern Progressive Web Apps for better user experience.',
    image: '/placeholder.svg',
    date: '2024-01-03',
    slug: 'progressive-web-apps'
  },
  {
    title: 'Docker for Developers',
    excerpt: 'Practical guide to using Docker in development workflows.',
    image: '/placeholder.svg',
    date: '2024-01-02',
    slug: 'docker-for-developers'
  }
];

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articles.find(article => article.slug === slug);
}