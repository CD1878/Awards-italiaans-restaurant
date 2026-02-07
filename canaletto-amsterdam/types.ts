import React from 'react';

export interface MenuItem {
  id: number;
  title: string;
  date?: string;
  image: string;
  category: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}