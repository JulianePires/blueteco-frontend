export interface AddItemToMenuRequest {
  name: string;
  price: number;
  category: string;
}

export interface UpdateMenuItemRequest {
  name?: string;
  price?: number;
  category?: string;
}
