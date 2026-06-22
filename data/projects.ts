export type AlbumPhoto = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  category: string;
  countLabel: string;
  image: string;
  description: string;
  photos: AlbumPhoto[];
};

export const projects: Project[] = [
  {
    title: "Voyage",
    category: "Paysages & itinerance",
    countLabel: "15 photos",
    image: "/media/Travel/DSC02462.jpg",
    description:
      "Lumiere, routes, horizons et paysages puissants captures comme des fragments de voyage.",
    photos: [
      { src: "/media/Travel/DSC02159.jpg", alt: "Scene de voyage photographique" },
      { src: "/media/Travel/DSC02259.jpg", alt: "Instant de voyage" },
      { src: "/media/Travel/DSC02462.jpg", alt: "Paysage de voyage" },
      { src: "/media/Travel/DSC02529.jpg", alt: "Lumiere d'ailleurs" },
      { src: "/media/Travel/DSC02966.jpg", alt: "Route et paysage" },
      { src: "/media/Travel/DSC03151.jpg", alt: "Fragment d'aventure" },
      { src: "/media/Travel/DSC06438.jpg", alt: "Paysage cinematographique" },
      { src: "/media/Travel/DSC07655.jpg", alt: "Souvenir de voyage" },
      { src: "/media/Travel/DSC07754.jpg", alt: "Horizon de voyage" },
      { src: "/media/Travel/DSC07793.jpg", alt: "Ambiance de route" },
      { src: "/media/Travel/DSC08208.jpg", alt: "Paysage naturel" },
      { src: "/media/Travel/DSC08263.jpg", alt: "Texture de voyage" },
      { src: "/media/Travel/DSC08427.jpg", alt: "Lumiere de paysage" },
      { src: "/media/Travel/DSC08507.jpg", alt: "Vue sur la Statue de la Liberte" },
      { src: "/media/Travel/DSC08591.jpg", alt: "Instant suspendu en voyage" },
    ],
  },
  {
    title: "Portraits",
    category: "Emotions brutes",
    countLabel: "8 photos",
    image: "/media/Portraits/DSC04402.jpg",
    description:
      "Des regards, des presences et des instants humains travailles avec douceur et intensite.",
    photos: [
      { src: "/media/Portraits/DSC02736.jpg", alt: "Portrait naturel" },
      { src: "/media/Portraits/DSC02749.jpg", alt: "Portrait en lumiere naturelle" },
      { src: "/media/Portraits/DSC02899.jpg", alt: "Portrait en bord de mer" },
      { src: "/media/Portraits/DSC04402.jpg", alt: "Portrait avec fleur" },
      { src: "/media/Portraits/DSC04413.jpg", alt: "Portrait dans la vegetation" },
      { src: "/media/Portraits/DSC04419.jpg", alt: "Portrait tropical" },
      { src: "/media/Portraits/DSC04493.jpg", alt: "Portrait lifestyle" },
      { src: "/media/Portraits/DSC04565.jpg", alt: "Portrait cinematographique" },
    ],
  },
  {
    title: "Sport",
    category: "Action & mouvement",
    countLabel: "24 photos",
    image: "/media/sport/DSC05549.jpg",
    description:
      "Le mouvement, l'effort et l'energie d'une scene captes dans une approche vive et immersive.",
    photos: [
      { src: "/media/sport/DSC00390.jpg", alt: "Photographie sportive" },
      { src: "/media/sport/DSC00777.jpg", alt: "Action sportive" },
      { src: "/media/sport/DSC00894.jpg", alt: "Moment de sport" },
      { src: "/media/sport/DSC01113.jpg", alt: "Scene sportive" },
      { src: "/media/sport/DSC01213.jpg", alt: "Mouvement sportif" },
      { src: "/media/sport/DSC01405.jpg", alt: "Instant d'action" },
      { src: "/media/sport/DSC01514.jpg", alt: "Photographie d'action" },
      { src: "/media/sport/DSC01518.jpg", alt: "Sport en mouvement" },
      { src: "/media/sport/DSC01535.jpg", alt: "Effort sportif" },
      { src: "/media/sport/DSC01603.jpg", alt: "Scene d'aventure sportive" },
      { src: "/media/sport/DSC01803.jpg", alt: "Action en exterieur" },
      { src: "/media/sport/DSC01882.jpg", alt: "Instant sportif brut" },
      { src: "/media/sport/DSC02007.jpg", alt: "Sport et emotion" },
      { src: "/media/sport/DSC03235.jpg", alt: "Mouvement capture" },
      { src: "/media/sport/DSC03243.jpg", alt: "Scene de sport" },
      { src: "/media/sport/DSC03253.jpg", alt: "Detail sportif" },
      { src: "/media/sport/DSC03271.jpg", alt: "Action intense" },
      { src: "/media/sport/DSC04618.jpg", alt: "Photographie de sport" },
      { src: "/media/sport/DSC04803.jpg", alt: "Sport et atmosphere" },
      { src: "/media/sport/DSC05549.jpg", alt: "Sport mecanique en paysage d'automne" },
      { src: "/media/sport/DSC05574.jpg", alt: "Mouvement automobile" },
      { src: "/media/sport/DSC05728.jpg", alt: "Action sportive cinematographique" },
      { src: "/media/sport/DSC06387.jpg", alt: "Scene sportive exterieure" },
      { src: "/media/sport/DSC08987.jpg", alt: "Instant sportif" },
    ],
  },
  {
    title: "Sport mecanique",
    category: "Vitesse & caractere",
    countLabel: "10 photos",
    image: "/media/Sport%20mecanique%20/DSC06854.jpg",
    description:
      "Carrosseries, routes et tension visuelle autour de la vitesse et de la matiere.",
    photos: [
      { src: "/media/Sport%20mecanique%20/DSC00012.jpg", alt: "Sport mecanique" },
      { src: "/media/Sport%20mecanique%20/DSC00027.jpg", alt: "Detail automobile" },
      { src: "/media/Sport%20mecanique%20/DSC00059.jpg", alt: "Voiture en contexte" },
      { src: "/media/Sport%20mecanique%20/DSC00065.jpg", alt: "Ambiance mecanique" },
      { src: "/media/Sport%20mecanique%20/DSC06854.jpg", alt: "Automobile sportive" },
      { src: "/media/Sport%20mecanique%20/DSC06860.jpg", alt: "Scene automobile" },
      { src: "/media/Sport%20mecanique%20/DSC06861.jpg", alt: "Photographie automobile" },
      { src: "/media/Sport%20mecanique%20/DSC06867.jpg", alt: "Sport mecanique cinematographique" },
      { src: "/media/Sport%20mecanique%20/DSC07249.jpg", alt: "Voiture et paysage" },
      { src: "/media/Sport%20mecanique%20/DSC08058.jpg", alt: "Detail de vitesse" },
    ],
  },
  {
    title: "Animaux",
    category: "Instinct & vivant",
    countLabel: "4 photos",
    image: "/media/animaux/DSC06784.jpg",
    description:
      "Des rencontres avec le vivant, entre observation, patience et emotion discrete.",
    photos: [
      { src: "/media/animaux/DSC02259.jpg", alt: "Animal en milieu naturel" },
      { src: "/media/animaux/DSC06642.jpg", alt: "Rencontre animale" },
      { src: "/media/animaux/DSC06784.jpg", alt: "Photographie animaliere" },
      { src: "/media/animaux/DSC07877.jpg", alt: "Instant animalier" },
    ],
  },
  {
    title: "Cinematique",
    category: "Atmospheres",
    countLabel: "Selection",
    image: "/media/Travel/DSC02462.jpg",
    description:
      "Une selection transversale pensee comme un mini-film : paysages, mouvement et sensations.",
    photos: [
      { src: "/media/Travel/DSC02462.jpg", alt: "Atmosphere de voyage" },
      { src: "/media/Portraits/DSC02899.jpg", alt: "Portrait en bord de mer" },
      { src: "/media/sport/DSC05549.jpg", alt: "Voiture en paysage d'automne" },
      { src: "/media/Travel/DSC08208.jpg", alt: "Paysage d'aventure" },
      { src: "/media/Portraits/DSC04413.jpg", alt: "Portrait tropical" },
    ],
  },
];
