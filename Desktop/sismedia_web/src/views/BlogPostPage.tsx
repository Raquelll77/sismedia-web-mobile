import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-2xl">
        Entrada de blog no encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6 md:px-32">
      <Link
        to="/blog"
        className="inline-block mb-8 text-blue-800 font-semibold hover:underline"
      >
        ← Volver al blog
      </Link>

      <img
        src={post.image}
        alt={post.title}
        className="w-full max-h-[400px] object-cover rounded-xl mb-8"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 mb-10">{post.date}</p>

      <div className="text-gray-700 text-lg leading-relaxed">
        {post.content}
      </div>
    </div>
  );
}
