"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a button component available.
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <div className="py-4">
      {/* Header Section */}
      <header className="text-center mb-12 w-9/12 mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to the Stephen King Book Collection
        </h1>
        <p className="text-lg text-muted">
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
        <p className="text-lg text-muted mb-8">
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

      <section className="m-12 w-11/12 mx-auto text-center">
        <h3 className="text-2xl font-semibold text-primary mb-6">
          Featured Books
        </h3>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-9/12 md:w-10/12 mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Featured Book Section */}
      <section className="mb-12">
        <Card className="bg-card p-8 rounded-lg shadow-lg mx-auto w-11/12 md:w-3/4">
          <img
            src="/path/to/the-shining-cover.jpg"
            alt="The Shining"
            className="w-32 h-48 mx-auto mb-4"
          />
          <CardContent>
            <h4 className="text-xl font-bold text-primary mb-2">The Shining</h4>
            <p className="text-lg text-muted mb-4">
              Jack Torrance, a struggling writer, accepts a job as the winter
              caretaker of the Overlook Hotel, located in the remote mountains
              of Colorado. With his wife and young son, Danny, Jack hopes to
              turn his life around. But the hotel's dark past slowly begins to
              take control of his mind and soul...
            </p>
          </CardContent>
          <Button
            variant={"secondary"}
            onClick={() => router.push("/books/the-shining")}
          >
            Read More
          </Button>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="w-full text-center py-6 bg-secondary text-secondary-foreground">
        <p>© 2025 Stephen King Book Collection | All Rights Reserved</p>
        <p>
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/contact" className="underline">
            Contact
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
