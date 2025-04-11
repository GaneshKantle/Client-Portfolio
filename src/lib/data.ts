import { Link, ProjectInfo } from "./types";
import * as Icons from "@/lib/icons";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  // Ad campaign edit section
  {
    title: "NewsPaper Ad",
    videoUrl: "https://drive.google.com/file/d/1F_EMQLO-6W06NmRhO9FXPe0D04TDKSzz/preview",
    thumbnailUrl: "https://i.postimg.cc/Z5x7myWw/Screenshot-2025-04-11-215514.png",
    category: "Marketing",
  },
  {
    title: "AI Voice over edit",
    videoUrl: "https://drive.google.com/file/d/1OcqCAQMCUegtPRrB1oBz1Q7ol5QMQO91/preview",
    thumbnailUrl: "https://i.postimg.cc/YqpLVGwr/Screenshot-2025-04-10-222958.png",
    category: "Marketing",
  },
  {
    title: "Creative Social Marketing",
    videoUrl: "https://drive.google.com/file/d/1KHLll5Lv1LHy-9jdRNICkJmn73xOcEPN/preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1676276375773-add2cbdd1cc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JlYXRpdmUlMjBzb2NpYWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    category: "Marketing",
  },

    // Marriage Invitation edits
    {
      title: "Tradtional invitation",
      videoUrl: "https://drive.google.com/file/d/1Foq95ZvzGLJwZSq41yj-i6C7FyJkcoPg/preview",
      thumbnailUrl: "https://images.unsplash.com/photo-1740511365551-3c8130ef2a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZGl0aW9uYWwlMjBpbnZpdGF0aW9ufGVufDB8fDB8fHww",
      category: "Wedding",
    },
    {
      title: "Floral Wedding invitation",
      videoUrl: "https://drive.google.com/file/d/1SbWNYeVn1oQVEvsPAtPsrcqd4Dqgd_8h/preview",
      thumbnailUrl: "https://plus.unsplash.com/premium_vector-1743779537043-d775258c7d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxvcmFsJTIwd2VkZGluZyUyMGludml0YXRpb258ZW58MHx8MHx8fDA%3D",
      category: "Wedding",
    },
    {
      title: "16:9 Wedding invitation",
      videoUrl: "https://drive.google.com/file/d/1lOZ1ys9w38x1FKfwzt56zqEIQfwgy--Q/preview",
      thumbnailUrl: "https://images.unsplash.com/photo-1599366279015-524df1ed5d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDE2JTNBOSUyMHdlZGRpbmclMjBpbnZpdGF0aW9ufGVufDB8fDB8fHww",
      category: "Wedding",
    },

  // Trendy edits
  {
    title: "Sports League",
    videoUrl: "https://drive.google.com/file/d/1qvkCcqhDjIUSTsC0PHTrrpttLf3G34Nd/preview",
    thumbnailUrl: "https://i.postimg.cc/Bn9cXZrR/Screenshot-2025-04-11-223749.png",
    category: "Trending",
  },
  {
    title: "Podcast with RK",
    videoUrl: "https://drive.google.com/file/d/1bzTpi_-d02Fi4sjDBoXR8qmYSKTpmczm/preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    category: "Trending",
  },
  {
    title: "Informative Reel",
    videoUrl: "https://drive.google.com/file/d/1rOjKLnNhIZgdmmP-B6kqVZ84S8e3_ppC/preview",
    thumbnailUrl: "https://plus.unsplash.com/premium_vector-1737734893372-061b053531ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5mb3JtYXRpdmV8ZW58MHx8MHx8fDA%3D",
    category: "Trending",
  },

  // Best motion graphics
 {
  title: "Carousel Animation",
  videoUrl: "https://drive.google.com/file/d/1SIdqgJE3SY5-l6A22UPga4_EWM_D4ar0/preview",
  thumbnailUrl: "https://i.postimg.cc/PJdnXktD/download.png",
  category: "Motion Graphics",
},
  {
    title: "Cinematic Trailer Title",
    videoUrl: "https://drive.google.com/file/d/10piD0DW8qpmtfZTY3irXiiHiLQNvDVoJ/preview",
    thumbnailUrl: "data:image/jpeg;base64,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",
    category: "Motion Graphics",
  },
  {
    title: "Motion Graphics",
    videoUrl: "https://drive.google.com/file/d/1FPNbvvWWVp6P8nm68FoDVneVLOwykeIM/preview",
    thumbnailUrl: "https://i.pinimg.com/originals/db/37/c0/db37c0a79ea54f0ab4c9bdd08e12bb63.gif",
    category: "Motion Graphics",
  },

];




export const skillsData = [
  {
    name: "Adobe Premiere Pro",
    icon: Icons.AdobePremiereProIcon
  },
  {
    name: "Adobe After Effects",
    icon: Icons.AdobeAfterEffectsIcon
  },
  {
    name: "Motion Graphics",
    icon: Icons.MotionGraphicsIcon
  },
  {
    name: "Canva",
    icon: Icons.CanvaIcon
  },
  {
    name: "CapCut",
    icon: Icons.CapCutIcon
  },
  {
    name:"Blender",
    icon: Icons.BlenderIcon
  },
  {
    name: "Filmora",
    icon: Icons.FilmoraIcon
  },
  {
    name:"DaVinci Resolve",
    icon: Icons.DaVinciResolveIcon
  },

];
