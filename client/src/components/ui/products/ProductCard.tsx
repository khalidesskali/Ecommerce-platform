import { memo } from "react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = memo<ProductCardProps>(({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        rotateY: 2,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-card dark:bg-card border border-border 
      dark:border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Badge */}
        <div
          className="absolute top-3 right-3 px-2 py-1 capitalize rounded-full text-xs font-medium
         bg-background/80 dark:bg-background/80 text-text dark:text-text backdrop-blur-sm"
        >
          {product.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3
          className="font-bold text-lg text-text dark:text-text line-clamp-1
         group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200"
        >
          {product.title}
        </h3>

        <p className="text-sm text-muted-foreground dark:text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <StarRating rating={product.rating} />

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary dark:text-primary">
              ${product.price}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary text-primary-foreground dark:bg-primary 
            dark:text-primary-foreground rounded-lg font-medium hover:bg-primary/90
             dark:hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
