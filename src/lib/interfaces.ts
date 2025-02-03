export interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export interface BookInformation {
  title: string;
  excerpt: string;
  imageUrl: string;
  topics: string[];
}