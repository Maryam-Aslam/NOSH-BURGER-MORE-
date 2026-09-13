import React from 'react';
import { MenuSection } from './MenuSection';
import type { MenuItem } from '../data/menuData';

interface MenuPreviewProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickView?: (item: MenuItem) => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({
  onAddToCart,
  onQuickView = () => {},
  favorites = [],
  onToggleFavorite = () => {},
}) => {
  return (
    <MenuSection
      onAddToCart={onAddToCart}
      onQuickView={onQuickView}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  );
};
