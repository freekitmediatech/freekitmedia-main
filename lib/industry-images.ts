const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

/* Har industry ki apni image, slug se map hai */
export const industryImages: Record<string, string> = {
  healthcare: unsplash("photo-1576091160399-112ba8d25d1d"),
  jewellery: unsplash("photo-1515562141207-7a88fb7ce338"),
  automobile: unsplash("photo-1494976388531-d1058494cdd8"),
  "real-estate": unsplash("photo-1560518883-ce09059eeffa"),
  fashion: unsplash("photo-1445205170230-053b83016050"),
  retail: unsplash("photo-1441986300917-64674bd600d8"),
  hotel: unsplash("photo-1566073771259-6a8506099945"),
  education: unsplash("photo-1523050854058-8df90110c9f1"),
  "personal-branding": unsplash("photo-1573496359142-b8d87734a5a2"),
};

const fallbackImage = unsplash("photo-1497366754035-f200968a6e72");

export const getIndustryImage = (slug: string) =>
  industryImages[slug] ?? fallbackImage;