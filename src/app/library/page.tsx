"use client";

import React, { useState } from "react";
import { allStephenKingBooks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

// BookCard component to display each book
const BookCard = ({
  title,
  excerpt,
  imageUrl,
}: {
  title: string;
  excerpt: string;
  imageUrl: string;
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden p-5">
      <img src={imageUrl} alt={title} className="mx-auto h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="text-sm text-muted mt-2">{excerpt}</p>
      </div>
    </div>
  );
};

const BookCollection = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Handler for checkbox topic selection
  const handleTopicChange = (topic: string) => {
    setSelectedTopics(
      (prev) =>
        prev.includes(topic)
          ? prev.filter((item) => item !== topic) // Uncheck topic
          : [...prev, topic] // Check topic
    );
  };

  // Handler for sorting order (A-Z or Z-A)
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "asc" | "desc");
  };

  // Filter books by selected topics
  const filteredBooks = allStephenKingBooks.filter(
    (book) =>
      selectedTopics.length > 0
        ? book.topics.some((topic) => selectedTopics.includes(topic))
        : true // If no topic is selected, show all books
  );

  // Sort books alphabetically by title
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    }
    return b.title.localeCompare(a.title);
  });

  // Extract all unique topics from all books
  const allTopics = [
    ...new Set(
      allStephenKingBooks.flatMap((book) => book.topics) // Get all topics from each book
    ),
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">
        Stephen King Books
      </h1>

      {/* Filters */}
      <div className="mb-6">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full text-pretty"
        >
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-primary">
              Filter by Topic
            </h2>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Read Excerpt</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-2">
              {/* Dynamically create checkboxes for all topics */}
              {allTopics.sort().map((topic) => (
                <div key={topic} className="flex items-center">
                  <input
                    type="checkbox"
                    id={topic}
                    checked={selectedTopics.includes(topic)}
                    onChange={() => handleTopicChange(topic)}
                    className="mr-2"
                  />
                  <label htmlFor={topic} className="text-sm">
                    {topic}
                  </label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Sort by */}
      <div className="mb-6 flex items-center gap-5">
        <h2 className="text-xl font-semibold text-primary">Sort by Title</h2>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="mt-2 p-2 border rounded"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* Display Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedBooks.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            excerpt={book.excerpt}
            imageUrl={book.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BookCollection;
