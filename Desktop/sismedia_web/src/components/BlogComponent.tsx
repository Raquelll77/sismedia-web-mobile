// BlogComponent.tsx
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export default function BlogComponent() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 md:mb-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-10 text-center">
          Blog Médico Digital
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 text-base mb-4">{post.summary}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-800 font-semibold hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
