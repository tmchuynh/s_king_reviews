import { stephenKingBookCollections } from "@/lib/constants";
import React from "react";

const BookCollectionPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Stephen King Book Collections
      </h1>
      <div>
        {stephenKingBookCollections.map((collection, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-primary">
              {collection.collection}
            </h2>
            <p className="text-lg mb-6">{collection.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {collection.books.sort().map((book, bookIndex) => (
                <div
                  key={bookIndex}
                  className="p-4 rounded-lg border-2 border-muted hover:border-border"
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {book.title}
                  </h3>
                  <ul className="list-disc pl-5">
                    {book.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-secondary">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BookCollectionPage;
