import React from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  descriptor: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    descriptor: "Verified Buyer",
    review:
      "The quality of these clothes exceeded my expectations. The fit is perfect and the fabric feels luxurious. I've already recommended this store to all my friends!",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    descriptor: "Fashion Enthusiast",
    review:
      "As someone who's very particular about style, I'm impressed by the attention to detail. The designs are modern yet timeless, and the customer service is exceptional.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    descriptor: "Style Blogger",
    review:
      "I've been shopping here for months and every piece has been a winner. The collections are curated perfectly and the prices are reasonable for the quality you get.",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-secondary fill-current" : "text-muted/30"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonial: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from fashion lovers who trust our quality and
            style.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card border border-muted/40 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Customer Photo and Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name} - ${testimonial.descriptor}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-muted/30"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-text text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.descriptor}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Review Text */}
              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.review}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
