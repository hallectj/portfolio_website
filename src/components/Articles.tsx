import Image from 'next/image';
import Link from 'next/link';

const Articles = () => {
  const articles = [
    {
      title: 'Understanding Modern Web Development',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder.svg',
      date: '2024-01-15',
      slug: 'understanding-modern-web-development'
    },
    {
      title: 'The Future of JavaScript Frameworks',
      excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/placeholder.svg',
      date: '2024-01-10',
      slug: 'future-of-javascript-frameworks'
    },
    {
      title: 'Building Scalable Applications',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/placeholder.svg',
      date: '2024-01-05',
      slug: 'building-scalable-applications'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-400">{article.date}</time>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-8">
          <button className="px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
            1
          </button>
          <button className="px-4 py-2 border border-blue-500 text-sm font-medium rounded-md text-white bg-blue-600">
            2
          </button>
          <button className="px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
            3
          </button>
          <button className="px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;