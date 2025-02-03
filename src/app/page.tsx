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
import Footer from "@/components/Footer";

const WelcomePage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="mb-12 w-9/12 md:w-10/12 mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Welcome to the Stephen King Book Collection
        </h1>
        <p>
          Dive into the dark and captivating worlds of Stephen King, a literary
          giant whose stories have shaped the horror genre for decades. Whether
          you're a lifelong fan or new to his work, this collection offers an
          immersive journey through the chilling narratives, memorable
          characters, and haunting settings that only King can craft.
        </p>
        <p>
          Explore a vast library of Stephen King’s novels, short stories,
          novellas, and nonfiction. From spine-tingling horrors like It and
          Carrie to thought-provoking narratives in The Shawshank Redemption and
          11/22/63, each book is a window into the creative genius that has
          captured the imagination of millions.
        </p>
        <p>
          Whether you’re here to experience the supernatural thrill of The
          Shining, the psychological terror of Misery, or the social commentary
          of The Stand, you’ll find something to satisfy your craving for
          gripping stories. King’s influence extends beyond horror, exploring
          themes of good versus evil, the human psyche, and the complexities of
          life’s struggles.
        </p>
        <p>
          So grab your favorite book, settle in, and prepare to be transported
          to another world. Welcome to the legacy of Stephen King—where
          nightmares become reality, and every turn of the page brings you
          closer to the extraordinary.
        </p>
      </header>

      <div className="w-full bg-cover bg-center mb-12 h-56">
        <img
          src="/images/ezgif-1422bd05a91f8.jpg"
          alt="Stephen King"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-16 w-10/12 mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Dive Into Stephen King's World
        </h2>
        <p>
          Step into the vivid, often eerie worlds crafted by the master
          storyteller, Stephen King. Whether you're revisiting his chilling
          classics or discovering his latest work, there’s something captivating
          for everyone. King’s unique blend of horror, suspense, and deep human
          insight ensures that each book offers an unforgettable experience.
        </p>
        <p>
          From the terrifying creatures of *It* to the emotional depth of *The
          Shawshank Redemption*, his stories have made a lasting impact on
          readers worldwide. Immerse yourself in a collection that spans decades
          of literary brilliance, full of diverse genres and unforgettable
          characters.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            onClick={() => router.push("/collection")}
            className="px-6 py-3"
          >
            Browse the Collection
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => router.push("/library")}
            className="px-6 py-3"
          >
            Look Through All The Books
          </Button>
        </div>
      </section>

      <div className="w-full bg-cover bg-center mb-12 h-56">
        <img
          src="/images/xegsd-152d9s85ds.jpg"
          alt="Stephen King"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="m-12 w-10/12 mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          About Stephen King
        </h1>
        <div className="flex justify-center gap-4 my-8">
          <Button variant={"secondary"} onClick={() => router.push("/about")}>
            Learn More About Stephen King
          </Button>
        </div>
        <section className="space-y-6">
          <p>
            Stephen Edwin King, born in 1947 in Portland, Maine, is one of the
            most prolific and celebrated authors of modern horror, suspense, and
            fantasy fiction. Raised by his mother after his parents separated,
            Stephen spent his childhood in various places including Fort Wayne,
            Indiana, and Stratford, Connecticut. His family eventually returned
            to Durham, Maine, where Stephen's mother cared for his aging
            grandparents. After their passing, she worked in the kitchens of a
            residential facility for the mentally challenged.
          </p>
          <p>
            Stephen graduated from Lisbon Falls High School in 1966 and went on
            to study at the University of Maine at Orono. During his college
            years, Stephen was active in student politics and wrote a weekly
            column for the student newspaper. He graduated in 1970 with a
            Bachelor of Arts in English. Despite being deemed unfit for the
            military due to various health issues, Stephen initially struggled
            to find steady work in his field, working labor jobs to support his
            young family.
          </p>
          <p>
            In January of 1971, Stephen married Tabitha Spruce, whom he met at
            the university. As they navigated the early years of their marriage,
            Stephen continued to write short stories, many of which were later
            collected in Night Shift. His breakthrough came in 1973, when his
            novel Carrie was accepted for publication by Doubleday & Co. This
            success allowed Stephen to leave his teaching job and devote himself
            to writing full time.
          </p>
          <p>
            Throughout his career, Stephen has written over 60 novels and
            hundreds of short stories, many of which have been adapted into
            films, TV series, and miniseries. Some of his most famous works
            include The Shining, It, The Stand, Pet Sematary, and Carrie. His
            stories often explore themes of fear, power, and survival, with a
            strong focus on the human condition in extreme circumstances.
          </p>
          <p>
            In addition to his novels, Stephen has penned a memoir on writing
            titled On Writing: A Memoir of the Craft, which is widely regarded
            as an essential resource for aspiring writers. Stephen has also
            ventured into film and television, writing the screenplay and
            directing the film Maximum Overdrive in 1985. He made cameo
            appearances in many of the adaptations of his work, becoming a
            fixture in the world of cinema and pop culture.
          </p>
          <p>
            Stephen and his wife, Tabitha, are committed to giving back to their
            community. They support a range of charities, including scholarships
            for local high school students. Stephen's generosity has been
            recognized through multiple awards, including the National Book
            Foundation Medal for Distinguished Contribution to American Letters
            and the National Medal of Arts. Stephen and Tabitha currently divide
            their time between their homes in Bangor, Maine, and Center Lovell,
            Maine, while spending winters in Florida. They have three
            children—Naomi Rachel, Joe Hill (a successful author in his own
            right), and Owen Phillip—along with four grandchildren.
          </p>
        </section>
      </section>

      <section className="m-12 w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Featured Books
        </h1>
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
                        <p className="indent-6">{book.excerpt}</p>
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

      <div className="w-full bg-cover bg-center h-56">
        <img
          src="/images/d3xsfd-5ds8543ds.jpg"
          alt="Stephen King"
          className="w-full h-full object-cover"
        />
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;
