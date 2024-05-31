import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FavoritesMap, UseFavoritesStore } from './favorites.types';

const favorites: FavoritesMap = {};

export const useFavoritesStore = create<
  UseFavoritesStore,
  [['zustand/persist', UseFavoritesStore]]
>(
  persist(
    (set) => ({
      favorites,
      addFavorite: (id: number, Title: string) => set((state) => ({
        favorites: { ...state.favorites, [id]: { Title } },
      })),
      removeFavorite: (id: number) => set((state) => {
        const newFavorites = { ...state.favorites };
        delete newFavorites[id];
        return { favorites: newFavorites };
      }),
    }),
    {
      name: 'favorites',
    },
  ),
);
