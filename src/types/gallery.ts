
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
        url: '/src/assets/images/gallery/bathrooms/100B88F2-0498-4E9A-8D89-A4B8C350BA51.jpg',
        title: 'Modern Bathroom Design',
        description: 'Contemporary bathroom with elegant fixtures'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/129A85C6-3F3E-4AF4-ABBB-AE5DF7154EFC.jpg',
        title: 'Luxury Master Bath',
        description: 'Spacious master bathroom with premium finishes'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/1714DC9B-E4BA-4736-84DC-45FBEE7E2796.jpg',
        title: 'Custom Shower Installation',
        description: 'Modern shower with custom glass enclosure'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/7043D828-0CA9-417F-9AEB-B46D250F6D4E.jpg',
        title: 'Traditional Bath Update',
        description: 'Updated bathroom with classic design elements'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/7B913945-6D4C-4C80-BAC1-1846C2BA6883.jpg',
        title: 'Guest Bathroom Remodel',
        description: 'Fully remodeled guest bathroom'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/A93C08E6-EB8D-4D85-A8FB-ADEF44E505D7.jpg',
        title: 'Modern Vanity Installation',
        description: 'Custom vanity with modern fixtures'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/ACB73AF4-DF60-4118-9A3C-5B26A5EA1D09.jpg',
        title: 'Spa-Like Master Bath',
        description: 'Luxurious master bathroom with spa features'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/AE644519-8E65-46FE-89B1-43D6799FCCB0.jpg',
        title: 'Contemporary Full Bath',
        description: 'Full bathroom renovation with contemporary style'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/E17C29C7-8C4E-46EF-8B4A-55EC2061A103.jpg',
        title: 'Elegant Bath Design',
        description: 'Elegant bathroom with custom tilework'
      },
      {
        url: '/src/assets/images/gallery/bathrooms/IMG_0063.jpg',
        title: 'Master Bath Renovation',
        description: 'Complete master bathroom transformation'
      }
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
