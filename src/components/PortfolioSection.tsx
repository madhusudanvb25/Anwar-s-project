import React, { useState } from 'react';
import { Folder, FolderOpen, Play, Image, ArrowLeft, Maximize, Calendar, MapPin, Clock } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import ImageViewer from './ImageViewer';

interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  duration?: string;
}

interface PortfolioFolder {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: number;
  items: MediaItem[];
}

const PortfolioSection: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const portfolioFolders: PortfolioFolder[] = [
    {
      id: 'weddings',
      name: 'Wedding Documents',
      description: 'This folder holds full-length wedding documentary films—crafted to tell real, emotional, and immersive stories. Each film goes beyond just the rituals, capturing the laughter, the tears, the unspoken moments, and the beautiful chaos of the wedding journey. From pre-wedding emotions to the final vows, these documentaries offer a timeless reflection of love, family, and celebration.',
      count: 15,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'w1',
          type: 'video',
          src: 'https://pub-961c95f591224066973079e771269d48.r2.dev/Ranjana_Priya_Wedding_OPTIMIZED.mp4',
          poster: 'https://pub-961c95f591224066973079e771269d48.r2.dev/Ranjana%20Priya_Wedding%20Document-001_Thumbnail.png',
          title: 'The wedding story of Abhijit & RanjanaPriya',
          description: 'A beautiful outdoor ceremony capturing pure joy and love',
          date: 'June 2024',
          location: 'Tuscany, Italy',
          duration: '6:17'
        },
        {
          id: 'w2',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          poster: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Emma & James Wedding',
          description: 'Intimate garden ceremony with cinematic storytelling',
          date: 'May 2024',
          location: 'Napa Valley, CA',
          duration: '4:12'
        },
        {
          id: 'w3',
          type: 'image',
          src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Bridal Portrait Session',
          description: 'Elegant bridal photography in natural light',
          date: 'April 2024',
          location: 'Central Park, NYC'
        },
        {
          id: 'w4',
          type: 'image',
          src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Wedding Reception Moments',
          description: 'Candid moments from the celebration',
          date: 'March 2024',
          location: 'Beverly Hills, CA'
        },
        {
          id: 'w5',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          poster: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Michael & Lisa Beach Wedding',
          description: 'Sunset ceremony by the ocean',
          date: 'February 2024',
          location: 'Malibu, CA',
          duration: '5:20'
        },
        {
          id: 'w6',
          type: 'image',
          src: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Beach Wedding Photography',
          description: 'Golden hour wedding portraits',
          date: 'January 2024',
          location: 'Santa Monica, CA'
        },
        {
          id: 'w7',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          poster: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Traditional Indian Wedding',
          description: 'Colorful celebration with rich traditions',
          date: 'December 2023',
          location: 'Mumbai, India',
          duration: '6:15'
        },
        {
          id: 'w8',
          type: 'image',
          src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Engagement Session',
          description: 'Romantic couple photography',
          date: 'November 2023',
          location: 'Paris, France'
        },
        {
          id: 'w9',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          poster: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Destination Wedding Highlights',
          description: 'Three-day celebration in paradise',
          date: 'October 2023',
          location: 'Bali, Indonesia',
          duration: '4:45'
        },
        {
          id: 'w10',
          type: 'image',
          src: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Wedding Details',
          description: 'Artistic shots of wedding elements',
          date: 'September 2023',
          location: 'Lake Como, Italy'
        }
      ]
    },
    {
      id: 'commercial',
      name: 'Wedding Highlights',
      description: 'This folder contains beautifully edited highlight videos that showcase the most memorable moments from each wedding celebration. Capturing the key rituals, joyful emotions, and candid smiles, these videos offer a concise and heartfelt glimpse into the essence of the day—perfect for reliving and sharing those special memories.',
      count: 12,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'c1',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          poster: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Tech Startup Campaign',
          description: 'Innovation meets human connection',
          date: 'August 2024',
          location: 'Silicon Valley, CA',
          duration: '2:30'
        },
        {
          id: 'c2',
          type: 'image',
          src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Corporate Headshots',
          description: 'Professional executive portraits',
          date: 'July 2024',
          location: 'Manhattan, NYC'
        },
        {
          id: 'c3',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Product Launch Video',
          description: 'Dynamic showcase of innovation',
          date: 'June 2024',
          location: 'Los Angeles, CA',
          duration: '1:45'
        },
        {
          id: 'c4',
          type: 'image',
          src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Office Culture Photography',
          description: 'Behind-the-scenes workplace moments',
          date: 'May 2024',
          location: 'Austin, TX'
        },
        {
          id: 'c5',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          poster: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Brand Documentary',
          description: 'The story behind the company',
          date: 'April 2024',
          location: 'Seattle, WA',
          duration: '8:20'
        },
        {
          id: 'c6',
          type: 'image',
          src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Conference Photography',
          description: 'Capturing industry events',
          date: 'March 2024',
          location: 'Las Vegas, NV'
        },
        {
          id: 'c7',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
          poster: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Customer Testimonials',
          description: 'Real stories from satisfied clients',
          date: 'February 2024',
          location: 'Chicago, IL',
          duration: '3:15'
        },
        {
          id: 'c8',
          type: 'image',
          src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Industrial Photography',
          description: 'Manufacturing and production visuals',
          date: 'January 2024',
          location: 'Detroit, MI'
        },
        {
          id: 'c9',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Social Impact Campaign',
          description: 'Stories that make a difference',
          date: 'December 2023',
          location: 'Denver, CO',
          duration: '4:30'
        },
        {
          id: 'c10',
          type: 'image',
          src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Annual Report Visuals',
          description: 'Corporate milestone photography',
          date: 'November 2023',
          location: 'Boston, MA'
        }
      ]
    },
    {
      id: 'Essence Cuts',
      name: 'Essence Cuts',
      description: 'A collection of short, story-driven teaser videos that capture the heart and soul of each wedding celebration. These concise edits highlight the emotions, key moments, and unique stories of the couples—offering a quick yet impactful glimpse into their special day.',
      count: 10,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'm1',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          poster: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Indie Rock Anthem',
          description: 'High-energy performance with creative visuals',
          date: 'July 2024',
          location: 'Nashville, TN',
          duration: '3:42'
        },
        {
          id: 'm2',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
          poster: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Acoustic Sessions',
          description: 'Intimate performance in natural setting',
          date: 'June 2024',
          location: 'Topanga Canyon, CA',
          duration: '4:15'
        },
        {
          id: 'm3',
          type: 'image',
          src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Concert Photography',
          description: 'Live performance energy captured',
          date: 'May 2024',
          location: 'Madison Square Garden, NYC'
        },
        {
          id: 'm4',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          poster: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Hip-Hop Visual Story',
          description: 'Urban narrative with dynamic cinematography',
          date: 'April 2024',
          location: 'Atlanta, GA',
          duration: '3:28'
        },
        {
          id: 'm5',
          type: 'image',
          src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Studio Session Photos',
          description: 'Behind-the-scenes recording moments',
          date: 'March 2024',
          location: 'Abbey Road Studios, London'
        },
        {
          id: 'm6',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          poster: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Electronic Dance Visual',
          description: 'Synchronized lights and movement',
          date: 'February 2024',
          location: 'Ibiza, Spain',
          duration: '5:12'
        },
        {
          id: 'm7',
          type: 'image',
          src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Artist Portrait Series',
          description: 'Creative portraits of musicians',
          date: 'January 2024',
          location: 'Brooklyn, NYC'
        },
        {
          id: 'm8',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          poster: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Folk Music Documentary',
          description: 'Traditional music meets modern visuals',
          date: 'December 2023',
          location: 'Austin, TX',
          duration: '6:45'
        },
        {
          id: 'm9',
          type: 'image',
          src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Festival Coverage',
          description: 'Multi-day music festival documentation',
          date: 'November 2023',
          location: 'Coachella, CA'
        },
        {
          id: 'm10',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          poster: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Classical Crossover',
          description: 'Orchestra meets contemporary visuals',
          date: 'October 2023',
          location: 'Vienna, Austria',
          duration: '4:33'
        }
      ]
    },
    {
      id: 'Reels & Shorts',
      name: 'Reels & Shorts',
      description: 'A vibrant collection of short, dynamic reels capturing fun, candid, and colorful moments from the weddings. Perfect for quick shares and social media, these videos showcase joyful rituals, lively celebrations, and unforgettable smiles in a bite-sized format.',
      count: 8,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'd1',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Environmental Impact',
          description: 'Climate change through human stories',
          date: 'September 2024',
          location: 'Amazon Rainforest, Brazil',
          duration: '25:30'
        },
        {
          id: 'd2',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Portrait of Resilience',
          description: 'Community leaders making change',
          date: 'August 2024',
          location: 'Detroit, MI'
        },
        {
          id: 'd3',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Urban Transformation',
          description: 'City renewal through community eyes',
          date: 'July 2024',
          location: 'Philadelphia, PA',
          duration: '18:45'
        },
        {
          id: 'd4',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Cultural Heritage',
          description: 'Preserving traditions for future generations',
          date: 'June 2024',
          location: 'Santa Fe, NM'
        },
        {
          id: 'd5',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          poster: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Education Revolution',
          description: 'Innovative teaching in underserved communities',
          date: 'May 2024',
          location: 'Rural Mississippi',
          duration: '22:15'
        },
        {
          id: 'd6',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Artisan Crafts',
          description: 'Traditional skills in modern world',
          date: 'April 2024',
          location: 'Kyoto, Japan'
        },
        {
          id: 'd7',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Ocean Conservation',
          description: 'Marine life protection efforts',
          date: 'March 2024',
          location: 'Great Barrier Reef, Australia',
          duration: '30:20'
        },
        {
          id: 'd8',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Human Migration',
          description: 'Stories of displacement and hope',
          date: 'February 2024',
          location: 'US-Mexico Border'
        }
      ]
    },
    {
      id: 'Pre-Wedding Films',
      name: 'Pre-Wedding',
      description: 'A curated collection of intimate moments, cinematic visuals, and heartfelt storytelling. Each film reflects the couple’s unique bond, captured with a balance of emotion, aesthetics, and rhythm. From natural light portraits to stylized narratives, these edits showcase my visual style and ability to translate love into timeless frames.',
      count: 14,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'f1',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          poster: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Haute Couture Campaign',
          description: 'Luxury fashion in motion',
          date: 'August 2024',
          location: 'Paris Fashion Week',
          duration: '2:45'
        },
        {
          id: 'f2',
          type: 'image',
          src: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Editorial Fashion Shoot',
          description: 'High-fashion photography for magazine',
          date: 'July 2024',
          location: 'Milan, Italy'
        },
        {
          id: 'f3',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          poster: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Street Style Documentary',
          description: 'Urban fashion culture exploration',
          date: 'June 2024',
          location: 'Tokyo, Japan',
          duration: '4:20'
        },
        {
          id: 'f4',
          type: 'image',
          src: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Beauty Campaign',
          description: 'Cosmetics brand visual storytelling',
          date: 'May 2024',
          location: 'Los Angeles, CA'
        },
        {
          id: 'f5',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
          poster: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Sustainable Fashion',
          description: 'Eco-conscious brand showcase',
          date: 'April 2024',
          location: 'Copenhagen, Denmark',
          duration: '3:15'
        },
        {
          id: 'f6',
          type: 'image',
          src: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Lifestyle Photography',
          description: 'Everyday luxury moments',
          date: 'March 2024',
          location: 'Hamptons, NY'
        },
        {
          id: 'f7',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          poster: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Designer Profile',
          description: 'Behind-the-scenes with fashion creator',
          date: 'February 2024',
          location: 'New York Fashion Week',
          duration: '6:30'
        },
        {
          id: 'f8',
          type: 'image',
          src: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Accessories Collection',
          description: 'Luxury accessories photography',
          date: 'January 2024',
          location: 'Beverly Hills, CA'
        },
        {
          id: 'f9',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          poster: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Runway Show Coverage',
          description: 'Fashion week highlights',
          date: 'December 2023',
          location: 'London Fashion Week',
          duration: '5:45'
        },
        {
          id: 'f10',
          type: 'image',
          src: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Portrait Series',
          description: 'Fashion industry personalities',
          date: 'November 2023',
          location: 'Studio City, CA'
        }
      ]
    },
   
/*    {
      id: 'personal',
      name: 'Personal Projects',
      description: 'Passion-driven creative explorations',
      count: 11,
      icon: <Folder className="w-8 h-8" />,
      items: [
        {
          id: 'p1',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Short Film: "Echoes"',
          description: 'Experimental narrative about memory',
          date: 'October 2024',
          location: 'Various Locations',
          duration: '12:30'
        },
        {
          id: 'p2',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Nature Photography Series',
          description: 'Landscapes that inspire the soul',
          date: 'September 2024',
          location: 'Yosemite National Park'
        },
        {
          id: 'p3',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Time-lapse Collection',
          description: 'City life in accelerated motion',
          date: 'August 2024',
          location: 'New York City',
          duration: '3:20'
        },
        {
          id: 'p4',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Street Photography',
          description: 'Human moments in urban spaces',
          date: 'July 2024',
          location: 'San Francisco, CA'
        },
        {
          id: 'p5',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          poster: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Experimental Visuals',
          description: 'Abstract cinematography exploration',
          date: 'June 2024',
          location: 'Studio',
          duration: '4:15'
        },
        {
          id: 'p6',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Architectural Photography',
          description: 'Modern structures and light',
          date: 'May 2024',
          location: 'Chicago, IL'
        },
        {
          id: 'p7',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Travel Documentary',
          description: 'Cultural immersion journey',
          date: 'April 2024',
          location: 'Southeast Asia',
          duration: '15:45'
        },
        {
          id: 'p8',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Portrait Studies',
          description: 'Character and emotion exploration',
          date: 'March 2024',
          location: 'Various'
        },
        {
          id: 'p9',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          poster: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Drone Cinematography',
          description: 'Aerial perspectives and movement',
          date: 'February 2024',
          location: 'Pacific Coast',
          duration: '6:20'
        },
        {
          id: 'p10',
          type: 'image',
          src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Black & White Series',
          description: 'Timeless monochrome photography',
          date: 'January 2024',
          location: 'Various'
        },
        {
          id: 'p11',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          poster: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'Creative Process',
          description: 'Behind-the-scenes of artistic creation',
          date: 'December 2023',
          location: 'Home Studio',
          duration: '8:10'
        }
      ]
    } */
  ];

  const handleFolderClick = (folderId: string) => {
    setSelectedFolder(folderId);
  };

  const handleBackToFolders = () => {
    setSelectedFolder(null);
  };

  const handleVideoPlay = (item: MediaItem) => {
    setSelectedVideo(item);
  };

  const handleImageView = (item: MediaItem) => {
    setSelectedImage(item);
  };

  const selectedFolderData = portfolioFolders.find(folder => folder.id === selectedFolder);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-800/20"></div>
        <img 
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Nature background" 
          className="w-full h-full object-cover transform scale-110 animate-pulse"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-emerald-100/30 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 transform hover:scale-105 transition-transform duration-300">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my work organized by category. Each project tells a unique story through visual storytelling and creative vision.
          </p>
        </div>

        {!selectedFolder ? (
          // Enhanced Folder View with Better Animations
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioFolders.map((folder, index) => (
              <div
                key={folder.id}
                onClick={() => handleFolderClick(folder.id)}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 cursor-pointer border border-emerald-100/50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-emerald-600 group-hover:text-emerald-700 transform group-hover:scale-110 transition-all duration-300">
                      {folder.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                        {folder.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{folder.count} items</p>
                    </div>
                  </div>
                  <div className="text-emerald-600 group-hover:text-emerald-700 transform group-hover:rotate-12 transition-all duration-300">
                    <FolderOpen className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {folder.description}
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                  {folder.items.slice(0, 3).map((item, itemIndex) => (
                    <div 
                      key={item.id} 
                      className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${itemIndex * 0.1}s` }}
                    >
                      <img
                        src={item.poster || item.src}
                        alt={item.title}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-emerald-600 font-medium">View Collection</span>
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <ArrowLeft className="w-4 h-4 text-emerald-600 transform rotate-180" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Enhanced Folder Contents View
          <div className="animate-fadeIn">
            <div className="flex items-center mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <button
                onClick={handleBackToFolders}
                className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mr-6 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Folders
              </button>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedFolderData?.name}
                </h3>
                <p className="text-gray-600 mt-1">{selectedFolderData?.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedFolderData?.items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: 'fadeInUp 0.4s ease-out forwards'
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.poster || item.src}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        {item.date && (
                          <div className="flex items-center text-white text-xs mb-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.date}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center text-white text-xs mb-2">
                            <MapPin className="w-3 h-3 mr-1" />
                            {item.location}
                          </div>
                        )}
                        {item.duration && (
                          <div className="flex items-center text-white text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.duration}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Play/View Button */}
                    {item.type === 'video' && (
                      <button
                        onClick={() => handleVideoPlay(item)}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors group"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </button>
                    )}
                    
                    {item.type === 'image' && (
                      <button
                        onClick={() => handleImageView(item)}
                        className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform duration-300">
                          <Maximize className="w-6 h-6 text-white" />
                        </div>
                      </button>
                    )}
                    
                    {/* Type Indicator */}
                    <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full backdrop-blur-sm">
                      {item.type === 'video' ? <Play className="w-4 h-4" /> : <Image className="w-4 h-4" />}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-emerald-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedVideo && (
        <VideoPlayer
          src={selectedVideo.src}
          poster={selectedVideo.poster}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      {selectedImage && (
        <ImageViewer
          src={selectedImage.src}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default PortfolioSection;