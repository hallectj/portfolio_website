"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { articles } from '@/data/articles';

const Articles = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const getCurrentArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-300 ease-in-out">
          {getCurrentArticles().map((article, index) => (
            <article key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[32rem] flex flex-col">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <time className="text-sm text-gray-400">{article.date}</time>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-blue-400 hover:text-blue-300 font-medium mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border text-sm font-medium rounded-md ${currentPage === 1 ? 'border-gray-600 text-gray-500 cursor-not-allowed' : 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700'}`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 border text-sm font-medium rounded-md ${pageNumber === currentPage ? 'border-blue-500 text-white bg-blue-600' : 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700'}`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border text-sm font-medium rounded-md ${currentPage === totalPages ? 'border-gray-600 text-gray-500 cursor-not-allowed' : 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;