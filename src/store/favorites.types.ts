export interface FavoritesMap {
    [id: string]: {
       Title: string;
    };
}

export interface UseFavoritesStore {
    favorites: FavoritesMap;
    addFavorite:(id: number, Title: string) => void;
    removeFavorite: (id: number) => void;
}
