import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { PredictionSection } from "./components/PredictionSection";
import { PlantsSection } from "./components/PlantsSection";
import { ArticlesSection } from "./components/ArticlesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { AllArticlesPage } from "./components/AllArticlesPage";
import { ArticleDetailPage } from "./components/ArticleDetailPage";
import { Button } from "./components/ui/button";
import { ChevronUp } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'articles' | 'article-detail'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  // Show scroll to top button when user scrolls down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (currentPage === 'articles') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={(page) => setCurrentPage(page as 'home' | 'articles' | 'article-detail')} />
        <AllArticlesPage 
          onBack={() => setCurrentPage('home')} 
          onReadMore={(articleId) => {
            setSelectedArticleId(articleId);
            setCurrentPage('article-detail');
          }}
        />
        <Footer />
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    );
  }

  if (currentPage === 'article-detail' && selectedArticleId) {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={(page) => setCurrentPage(page as 'home' | 'articles' | 'article-detail')} />
        <ArticleDetailPage 
          articleId={selectedArticleId}
          onBack={() => setCurrentPage('articles')}
          onNavigateToArticle={(articleId) => {
            setSelectedArticleId(articleId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <Footer />
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onNavigate={(page) => setCurrentPage(page as 'home' | 'articles' | 'article-detail')} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* About Platform Section */}
        <AboutSection />

        {/* Prediction Section */}
        <PredictionSection />

        {/* Plants Section */}
        <PlantsSection />

        {/* Articles/Documentation Section */}
        <ArticlesSection 
          onViewAll={() => setCurrentPage('articles')} 
          onReadMore={(articleId) => {
            setSelectedArticleId(articleId);
            setCurrentPage('article-detail');
          }}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-[#2E7D32] hover:bg-[#1B5E20] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          size="sm"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}

      {/* Loading Animation for Better UX */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar for modern look */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #2E7D32;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #1B5E20;
        }

        /* Smooth transitions for all elements */
        * {
          transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Focus styles for accessibility */
        button:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid #2E7D32;
          outline-offset: 2px;
        }

        /* Animation for cards */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Hover effects for interactive elements */
        .hover-lift:hover {
          transform: translateY(-4px);
        }

        /* Custom gradient backgrounds */
        .bg-gradient-green {
          background: linear-gradient(135deg, #2E7D32 0%, #388E3C 100%);
        }

        .bg-gradient-earth {
          background: linear-gradient(135deg, #A1887F 0%, #8D6E63 100%);
        }
      `}</style>
    </div>
  );
}