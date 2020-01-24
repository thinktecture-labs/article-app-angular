export interface Article {
  id: number;
  title: string;
  manufacturer: string;
  category: string;
  subcategory: string;
  price: number;
  previousId?: number;
  nextId?: number;
}
