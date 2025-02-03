"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a button component available.
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredBooks } from "@/lib/constants";
import { bookURLFormat } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

const WelcomePage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4">
      {/* Header Section */}
      <header className="text-center mb-12 w-9/12 mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to the Stephen King Book Collection
        </h1>
        <p className="text-lg">
          Explore the haunting worlds created by the master of horror. Browse
          through Stephen King's extensive library of novels, short stories, and
          more.
        </p>
      </header>

      {/* Hero Image */}
      <div
        className="relative w-full h-72 bg-cover bg-center mb-12"
        style={{ backgroundImage: "url(/path/to/stephen-king-image.jpg)" }}
      >
        <div className="absolute inset-0 opacity-40"></div>
      </div>

      {/* Call to Action Section */}
      <section className="text-center mb-12 w-11/12 mx-auto">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Dive Into Stephen King's World
        </h2>
        <p className="text-lg mb-8">
          Whether you're a long-time fan or new to his work, there's something
          for everyone. Find your next read today!
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => router.push("/collection")}>
            Browse the Collection
          </Button>
          <Button variant={"secondary"} onClick={() => router.push("/about")}>
            Learn More About Stephen King
          </Button>
        </div>
      </section>

      <section className="m-12 w-11/12 mx-auto">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
          Featured Books
        </h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-9/12 md:w-10/12 mx-auto my-4"
        >
          <CarouselContent>
            {featuredBooks.map((book, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card p-4 rounded-lg mx-auto border-2 border-muted hover:border-border h-full flex flex-col justify-between">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-32 h-48 aspect-auto object-contain object-center mx-auto mb-4"
                  />
                  <CardContent>
                    <Collapsible
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      className="w-full text-pretty"
                    >
                      <div className="flex items-center">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Read Excerpt</span>
                          </Button>
                        </CollapsibleTrigger>
                        <h4 className="text-xl font-bold">{book.title}</h4>
                      </div>
                      <CollapsibleContent className="space-y-2">
                        <p className="text-muted">{book.excerpt}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={"secondary"}
                      onClick={() => router.push(bookURLFormat(book.title))}
                      className="mx-auto py-6"
                    >
                      Read More About
                      <br /> {book.title}
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-center py-6 bg-secondary text-secondary-foreground">
        <p>© 2025 Stephen King Book Collection | All Rights Reserved</p>
        <Button variant={"link"} onClick={() => router.push("/about")}>
          About
        </Button>
        <Button variant={"link"} onClick={() => router.push("/collections")}>
          Collections
        </Button>
        <Button variant={"link"} onClick={() => router.push("/library")}>
          Library
        </Button>
        <Button variant={"link"} onClick={() => router.push("/favorites")}>
          Favorites
        </Button>
        <Button variant={"link"} onClick={() => router.push("/faq")}>
          FAQs
        </Button>
        <Button variant={"link"} onClick={() => router.push("/donate")}>
          Donate
        </Button>
        <Button variant={"link"} onClick={() => router.push("/contact-us")}>
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default WelcomePage;
