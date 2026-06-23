import { publicPath } from "@/lib/paths";

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
    title: "Aventure et Voyage",
    category: "Paysages & itinérance",
    countLabel: "16 photos",
    image: publicPath("/media/Aventure et voyage/couverture Aventure.jpg"),
    description:
      "Routes, horizons et paysages puissants capturés comme des fragments d'aventure et de voyage.",
    photos: [
      { src: publicPath("/media/Aventure et voyage/DSC02159.jpg"), alt: "Scene d'aventure et de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC02259.jpg"), alt: "Instant de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC02462.jpg"), alt: "Paysage de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC02529.jpg"), alt: "Lumiere d'ailleurs" },
      { src: publicPath("/media/Aventure et voyage/DSC02966.jpg"), alt: "Route et paysage" },
      { src: publicPath("/media/Aventure et voyage/DSC03151.jpg"), alt: "Fragment d'aventure" },
      { src: publicPath("/media/Aventure et voyage/DSC06438.jpg"), alt: "Paysage cinématique" },
      { src: publicPath("/media/Aventure et voyage/DSC07509.jpg"), alt: "Horizon d'aventure" },
      { src: publicPath("/media/Aventure et voyage/DSC07655.jpg"), alt: "Souvenir de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC07754.jpg"), alt: "Horizon de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC07793.jpg"), alt: "Ambiance de route" },
      { src: publicPath("/media/Aventure et voyage/DSC08208.jpg"), alt: "Paysage naturel" },
      { src: publicPath("/media/Aventure et voyage/DSC08263.jpg"), alt: "Texture de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC08427.jpg"), alt: "Lumiere de paysage" },
      { src: publicPath("/media/Aventure et voyage/DSC08507.jpg"), alt: "Vue de voyage" },
      { src: publicPath("/media/Aventure et voyage/DSC08591.jpg"), alt: "Instant suspendu en voyage" },
    ],
  },
  {
    title: "Portraits",
    category: "Émotions brutes",
    countLabel: "14 photos",
    image: publicPath("/media/Portraits/Couverture portrait.jpg"),
    description:
      "Des regards, des présences et des instants humains travaillés avec douceur et intensité.",
    photos: [
      { src: publicPath("/media/Portraits/DSC00390.jpg"), alt: "Portrait naturel" },
      { src: publicPath("/media/Portraits/DSC01113.jpg"), alt: "Portrait en lumiere naturelle" },
      { src: publicPath("/media/Portraits/DSC01213.jpg"), alt: "Presence humaine" },
      { src: publicPath("/media/Portraits/DSC01405.jpg"), alt: "Portrait lifestyle" },
      { src: publicPath("/media/Portraits/DSC01803.jpg"), alt: "Instant humain" },
      { src: publicPath("/media/Portraits/DSC02007.jpg"), alt: "Portrait en mouvement" },
      { src: publicPath("/media/Portraits/DSC02736.jpg"), alt: "Portrait doux" },
      { src: publicPath("/media/Portraits/DSC02749.jpg"), alt: "Portrait expressif" },
      { src: publicPath("/media/Portraits/DSC02899.jpg"), alt: "Portrait en bord de mer" },
      { src: publicPath("/media/Portraits/DSC04402.jpg"), alt: "Portrait avec fleur" },
      { src: publicPath("/media/Portraits/DSC04413 copie.jpg"), alt: "Portrait dans la vegetation" },
      { src: publicPath("/media/Portraits/DSC04419.jpg"), alt: "Portrait tropical" },
      { src: publicPath("/media/Portraits/DSC04493.jpg"), alt: "Portrait cinématique" },
      { src: publicPath("/media/Portraits/DSC04565.jpg"), alt: "Portrait intense" },
    ],
  },
  {
    title: "Sport",
    category: "Action & mouvement",
    countLabel: "18 photos",
    image: publicPath("/media/sport/Couverture sport.jpg"),
    description:
      "Le mouvement, l'effort et l'énergie d'une scène captés dans une approche vive et immersive.",
    photos: [
      { src: publicPath("/media/sport/1.jpg"), alt: "Photographie sportive" },
      { src: publicPath("/media/sport/2.jpg"), alt: "Action sportive" },
      { src: publicPath("/media/sport/3.jpg"), alt: "Moment de sport" },
      { src: publicPath("/media/sport/4.jpg"), alt: "Scene sportive" },
      { src: publicPath("/media/sport/5.jpg"), alt: "Mouvement sportif" },
      { src: publicPath("/media/sport/6.jpg"), alt: "Instant d'action" },
      { src: publicPath("/media/sport/7.jpg"), alt: "Photographie d'action" },
      { src: publicPath("/media/sport/8.jpg"), alt: "Sport en mouvement" },
      { src: publicPath("/media/sport/9.jpg"), alt: "Effort sportif" },
      { src: publicPath("/media/sport/10.jpg"), alt: "Scene d'aventure sportive" },
      { src: publicPath("/media/sport/11.jpg"), alt: "Action en exterieur" },
      { src: publicPath("/media/sport/12.jpg"), alt: "Instant sportif brut" },
      { src: publicPath("/media/sport/13.jpg"), alt: "Sport et emotion" },
      { src: publicPath("/media/sport/14.jpg"), alt: "Mouvement capture" },
      { src: publicPath("/media/sport/15.jpg"), alt: "Scene de sport" },
      { src: publicPath("/media/sport/16.jpg"), alt: "Detail sportif" },
      { src: publicPath("/media/sport/17.jpg"), alt: "Action intense" },
      { src: publicPath("/media/sport/18.jpg"), alt: "Photographie de sport" },
    ],
  },
  {
    title: "Sport mécanique",
    category: "Vitesse & caractère",
    countLabel: "11 photos",
    image: publicPath("/media/Sport mecanique /Couverture sport mecanique.jpg"),
    description:
      "Carrosseries, routes et tension visuelle autour de la vitesse et de la matière.",
    photos: [
      { src: publicPath("/media/Sport mecanique /DSC00012.jpg"), alt: "Sport mécanique" },
      { src: publicPath("/media/Sport mecanique /DSC00027.jpg"), alt: "Detail automobile" },
      { src: publicPath("/media/Sport mecanique /DSC00059.jpg"), alt: "Voiture en contexte" },
      { src: publicPath("/media/Sport mecanique /DSC00065.jpg"), alt: "Ambiance mécanique" },
      { src: publicPath("/media/Sport mecanique /DSC05936.jpg"), alt: "Automobile en mouvement" },
      { src: publicPath("/media/Sport mecanique /DSC06854.jpg"), alt: "Automobile sportive" },
      { src: publicPath("/media/Sport mecanique /DSC06860.jpg"), alt: "Scene automobile" },
      { src: publicPath("/media/Sport mecanique /DSC06861.jpg"), alt: "Photographie automobile" },
      { src: publicPath("/media/Sport mecanique /DSC06867.jpg"), alt: "Sport mécanique cinématique" },
      { src: publicPath("/media/Sport mecanique /DSC07249.jpg"), alt: "Voiture et paysage" },
      { src: publicPath("/media/Sport mecanique /DSC08058.jpg"), alt: "Detail de vitesse" },
    ],
  },
];
