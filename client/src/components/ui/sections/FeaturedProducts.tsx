import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "../products/ProductsCardSkeleton";
import ProductCard from "../products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/services/products";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

const FeaturedProducts = memo<FeaturedProductsProps>(() => {
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getFeaturedProducts,
  });

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
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} index={index} />
              ))
            : data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={product.id}
                />
              ))}
        </div>

        {/* View All Button */}
        {!isLoading && (
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
});

FeaturedProducts.displayName = "FeaturedProducts";

export default FeaturedProducts;
