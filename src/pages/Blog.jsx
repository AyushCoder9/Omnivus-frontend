import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingAnimation from "../components/LoadingAnimation";
import { Calendar, User, Eye, MessageCircle, Search } from "lucide-react";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
      title: "Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    },
    {
      title: "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    },
    {
      title: "Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    },
    {
      title: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    },
    {
      title: "Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    },
    {
      title: "Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      author: "Hetmayar",
      date: "24th March 2019",
      category: "Business",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      views: "232 Views",
      comments: "35 Comments"
    }
  ];

  const popularFeeds = [
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=80&fit=crop"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=80&fit=crop"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=80&fit=crop"
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "24th March 2019",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=80&fit=crop"
    }
  ];

  const categories = [
    { name: "Business", count: 26 },
    { name: "Consultant", count: 30 },
    { name: "Creative", count: 71 },
    { name: "UI/UX", count: 56 },
    { name: "Technology", count: 60 }
  ];

  const twitterFeeds = [
    {
      text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    },
    {
      text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    },
    {
      text: "Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1",
      date: "November 25, 2018"
    }
  ];

  const popularTags = ["Popular", "design", "ux", "usability", "develop", "icon", "business", "consult", "kit", "keyboard", "mouse", "tech"];

  // Instagram feed images
  const instagramImages = [
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&h=150&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <LoadingAnimation isVisible={!isLoaded} />
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-8 bg-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <nav className="text-sm text-gray-600 mb-4 animate-fade-in">
              Home &gt; News
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-scale-in">News Standard</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-16 bg-white transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Blog Content - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article 
                    key={index} 
                    className={`bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {post.image && (
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium animate-pulse">
                            blog
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="mb-4">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-blue-100 transition-colors">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer transform hover:scale-105 transition-transform duration-300">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                          <MessageCircle size={16} />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">by {post.author}</span>
                        </div>
                        <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors transform hover:translate-x-2 duration-300">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">01</button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transform hover:scale-105 transition-all duration-300">02</button>
                  <span className="px-4 py-2">...</span>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transform hover:scale-105 transition-all duration-300">10</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="space-y-8">
              
              {/* About Me */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-bold mb-4">About Me</h3>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face" 
                    alt="Rosalina D. Willaimson"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <h4 className="font-semibold">Rosalina D. Willaimson</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
              
              {/* Search Objects */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '500ms' }}>
                <h3 className="text-xl font-bold mb-4">Search Objects</h3>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search your keyword..."
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                  <Search className="absolute right-3 top-3 text-gray-400 hover:text-blue-600 transition-colors" size={20} />
                </div>
              </div>
              
              {/* Popular Feeds */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '600ms' }}>
                <h3 className="text-xl font-bold mb-4">Popular Feeds</h3>
                <div className="space-y-4">
                  {popularFeeds.map((feed, index) => (
                    <div key={index} className="flex space-x-3 hover:bg-gray-50 p-2 rounded transition-colors duration-300">
                      <img 
                        src={feed.image} 
                        alt="Feed"
                        className="w-16 h-12 object-cover rounded hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                          {feed.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{feed.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '700ms' }}>
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-blue-600 cursor-pointer hover:bg-gray-50 px-2 rounded transition-all duration-300">
                      <span>{category.name}</span>
                      <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded-full text-xs">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '800ms' }}>
                <h3 className="text-xl font-bold mb-4">Never Miss News</h3>
                <div className="space-y-3">
                  <input 
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                  />
                  <button className="w-full bg-white text-blue-600 p-3 rounded font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Twitter Feeds */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '900ms' }}>
                <h3 className="text-xl font-bold mb-4">Twitter Feeds</h3>
                <div className="space-y-4">
                  {twitterFeeds.map((tweet, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 hover:bg-gray-50 p-2 rounded transition-colors duration-300">
                      <p className="text-sm text-gray-700 mb-2">{tweet.text}</p>
                      <p className="text-xs text-gray-500">{tweet.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Instagram Feeds */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '1000ms' }}>
                <h3 className="text-xl font-bold mb-4">Instagram Feeds</h3>
                <div className="grid grid-cols-3 gap-2">
                  {instagramImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded">
                      <img 
                        src={image}
                        alt={`Instagram ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className={`bg-white p-6 shadow-lg rounded-lg transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '1100ms' }}>
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Ad Banner */}
              <div className={`bg-gradient-to-br from-purple-500 to-blue-600 p-6 rounded-lg text-center text-white transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`} style={{ animationDelay: '1200ms' }}>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=350&h=600&fit=crop"
                    alt="Advertisement"
                    className="w-full h-48 object-cover rounded mb-4 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded mb-4"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Your Ad Here</span>
                  </div>
                </div>
                <p className="text-sm opacity-90">Premium Advertisement Space</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with background image */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm">
                {["Home", "Services", "About", "Career", "Refund", "Terms", "Details", "Contact", "Business", "Affiliate"].map((item) => (
                  <li key={item} className="hover:text-blue-200 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
              <div className="text-sm space-y-1">
                <p>Monday - Friday: 7:00 - 17:00</p>
                <p>Saturday: 7:00 - 12:00</p>
                <p>Sunday and holidays: 8:00 - 10:00</p>
              </div>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm mb-4">
                For more than 30 years, IT Service has been a reliable partner in the field of logistics and cargo forwarding.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Discover More
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-sm">Copyright By@ WebTend - 2021</p>
            <p className="text-sm">info@webmail.com | 786 875 864 75 7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
