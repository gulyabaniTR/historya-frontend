import { Category } from "./category.model";

export class Article {
  id: number;
  title: string;
  contentMain: string;
  contentSummary: string;
  publishDate: Date;
  picture: string;
  viewCount: number;
  commentCount: number;
  category: Category;
}
