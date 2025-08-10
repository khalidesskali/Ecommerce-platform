import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "../products/ProductsCardSkeleton";
import ProductCard from "../products/ProductCard";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  tag: string;
  category: string;
}

interface FeaturedProductsProps {
  products?: Product[];
}

// Sample clothing product data
const sampleProducts: Product[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
    name: "Premium Cotton T-Shirt",
    description:
      "Ultra-soft organic cotton with a modern fit. Perfect for everyday wear with exceptional comfort and style.",
    price: 49.99,
    rating: 4.8,
    tag: "New",
    category: "T-Shirts",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    name: "Classic Denim Jeans",
    description:
      "High-quality denim with perfect stretch and comfort. Classic fit that never goes out of style.",
    price: 89.99,
    rating: 4.9,
    tag: "Sale",
    category: "Jeans",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    name: "Casual Hoodie",
    description:
      "Cozy fleece hoodie perfect for cool weather. Features a comfortable fit and stylish design.",
    price: 69.99,
    rating: 4.7,
    tag: "Featured",
    category: "Hoodies",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    name: "Formal Dress Shirt",
    description:
      "Elegant cotton dress shirt with wrinkle-resistant fabric. Perfect for professional settings.",
    price: 79.99,
    rating: 4.6,
    tag: "Hot",
    category: "Shirts",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop",
    name: "Formal Suit Jacket",
    description:
      "Elegant wool blend suit jacket with tailored fit. Perfect for professional occasions and formal events.",
    price: 299.99,
    rating: 4.9,
    tag: "Premium",
    category: "Suits",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    name: "Athletic Shorts",
    description:
      "Performance shorts with moisture-wicking technology. Ideal for workouts and active lifestyle.",
    price: 39.99,
    rating: 4.5,
    tag: "Trending",
    category: "Activewear",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    name: "Winter Jacket",
    description:
      "Insulated jacket with water-resistant exterior. Keeps you warm and dry in cold weather conditions.",
    price: 199.99,
    rating: 4.8,
    tag: "Organic",
    category: "Outerwear",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop",
    name: "Polo Shirt",
    description:
      "Classic polo shirt with breathable pique fabric. Versatile design suitable for casual and semi-formal occasions.",
    price: 59.99,
    rating: 4.7,
    tag: "Limited",
    category: "Polo Shirts",
  },
];

const FeaturedProducts = memo<FeaturedProductsProps>(
  ({ products: propProducts }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          setError(null);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          if (propProducts) {
            setProducts(propProducts);
          } else {
            setProducts(sampleProducts);
          }
        } catch (err) {
          setError("Failed to load featured products. Please try again later.");
          console.error("Error fetching products:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, [propProducts]);

    if (error) {
      return (
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background 
        via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-danger/10 dark:bg-danger/10 border border-danger/20 dark:border-danger/20 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold text-danger dark:text-danger mb-2">
                Oops! Something went wrong
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                {error}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-primary text-primary-foreground dark:bg-primary 
                dark:text-primary-foreground rounded-lg font-medium hover:bg-primary/90 
                dark:hover:bg-primary/90 transition-colors duration-200"
              >
                Try Again
              </motion.button>
            </motion.div>
          </div>
        </section>
      );
    }

    return (
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background 
      via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text mb-4">
              Featured Products
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary 
            dark:from-primary dark:to-secondary mx-auto rounded-full"
            />
            <p className="mt-6 text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked collection of premium clothing, carefully
              selected for quality and style.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} index={index} />
                ))
              : products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
          </div>

          {/* View All Button */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-secondary text-secondary-foreground dark:bg-secondary 
                  dark:text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 
                  dark:hover:bg-secondary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View All Products
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);

FeaturedProducts.displayName = "FeaturedProducts";

export default FeaturedProducts;
