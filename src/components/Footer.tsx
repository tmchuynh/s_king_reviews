import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Footer = () => {
  const router = useRouter();
  return (
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
  );
};

export default Footer;
