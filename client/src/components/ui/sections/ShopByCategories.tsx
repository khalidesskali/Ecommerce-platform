import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men's Clothing",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80", // Man in classic shirt and jacket
  },
  {
    name: "Women's Clothing",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // Woman in stylish dress
  },
  {
    name: "Kids & Baby",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80", // Children in playful clothes
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80", // Stylish shoes on feet
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Sunglasses, watch, wallet
  },
  {
    name: "Sale",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80", // SALE sign in store window
  },
];

const cardVariants = (i: number) => ({
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.2,
      duration: 0.8,
      delay: i * 0.15,
    },
  },
});

function toUrlSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const ShopByCategories: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-text mb-4">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Explore our curated categories and discover the latest in premium
            fashion for everyone.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants(i)}
              whileHover={{ scale: 1.045 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                to={`/shop/${toUrlSlug(cat.name)}`}
                className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-2xl"
                tabIndex={0}
                aria-label={`Shop ${cat.name}`}
              >
                <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl border border-muted/40 dark:border-muted/30 overflow-hidden min-h-[260px] cursor-pointer flex items-center justify-center transition-shadow duration-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"
                    aria-hidden="true"
                  />
                  {/* Category Name */}
                  <motion.span
                    className="relative z-10 flex items-center justify-center h-full w-full text-2xl md:text-3xl font-extrabold tracking-wide text-white drop-shadow-lg transition-all duration-500 group-hover:-translate-y-2"
                    initial={{ y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  >
                    {cat.name}
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
