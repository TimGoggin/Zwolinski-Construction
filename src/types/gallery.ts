
export interface GalleryImage {
  url: string;
  title: string;
  description?: string;
}

export interface GallerySection {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
}

export const galleryData: GallerySection[] = [
  {
    id: 'bathrooms',
    title: 'Bathrooms',
    description: 'Custom bathroom renovations and remodels',
    images: [
      {
        url: '/src/assets/images/projects/bathrooms/bathroom1.jpg',
        title: 'Modern Master Bath',
        description: 'Complete master bathroom renovation with custom tile work'
      },
      // Add more bathroom images here
    ]
  },
  {
    id: 'kitchens',
    title: 'Kitchens',
    description: 'Kitchen remodeling and renovations',
    images: [
      {
        url: '/src/assets/images/projects/kitchens/kitchen1.jpg',
        title: 'Contemporary Kitchen',
        description: 'Modern kitchen with custom cabinets and island'
      },
      // Add more kitchen images here
    ]
  },
  {
    id: 'basements',
    title: 'Basements',
    description: 'Basement finishing and remodeling',
    images: []
  },
  {
    id: 'homes',
    title: 'Homes',
    description: 'Custom home building and whole-house renovations',
    images: []
  },
  {
    id: 'wood-flooring',
    title: 'Wood Flooring',
    description: 'Hardwood floor installation and refinishing',
    images: []
  },
  {
    id: 'porches',
    title: 'Porches',
    description: 'Custom porch design and construction',
    images: []
  },
  {
    id: 'decks',
    title: 'Decks',
    description: 'Custom deck building and renovation',
    images: []
  },
  {
    id: 'additions',
    title: 'Additions',
    description: 'Home additions and expansions',
    images: []
  },
  {
    id: 'garages',
    title: 'Garages',
    description: 'Garage construction and renovation',
    images: []
  }
];
