
export interface CardProps<T> {
  item: T;
  onSelectItem: (itemId: string) => void;
}
