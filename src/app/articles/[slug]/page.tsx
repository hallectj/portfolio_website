import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Article, getArticleBySlug } from '@/data/articles';

const isGithubImplementationComplete = false;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  // Await the params to get the slug
  const { slug } = await params;
  
  const placeholderContent = `
    <article>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
      ratione voluptatem sequi nesciunt.
    </div>
    </article>
  `;

  // No need for params?.slug check since we already destructured slug
  if (!slug) {
    return notFound();
  }
  
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <article className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <div className="text-gray-300 leading-relaxed">
              {placeholderContent}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.title || 'Article Image'}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-sans)' }}>{article.title}</h1>
          <time className="text-sm text-gray-400 mb-2 block" style={{ fontFamily: '"Space Mono", monospace' }}>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          <div className="text-gray-300 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-sans)' }}
            dangerouslySetInnerHTML={{ __html: isGithubImplementationComplete ? 'GitHub content will be displayed here' : placeholderContent }}
          />
        </div>
      </div>
    </article>
  );
}