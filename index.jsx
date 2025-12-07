import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const movies = [
    { title: "The Dark Knight", year: 2008, img: "https://picsum.photos/300/450?1" },
    { title: "Inception", year: 2010, img: "https://picsum.photos/300/450?2" },
    { title: "Interstellar", year: 2014, img: "https://picsum.photos/300/450?3" },
    { title: "Avengers: Endgame", year: 2019, img: "https://picsum.photos/300/450?4" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold tracking-wide">MovieBox</h1>
        <input
          type="text"
          placeholder="Search movies..."
          className="w-64 px-4 py-2 rounded-xl bg-neutral-800 focus:outline-none"
        />
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center rounded-2xl mx-6 shadow-2xl" style={{ backgroundImage: `url('https://picsum.photos/1200/600')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
        <div className="absolute bottom-10 left-10">
          <h2 className="text-4xl font-bold mb-3">Featured Movie</h2>
          <p className="max-w-xl mb-4 text-lg text-gray-300">Watch the latest blockbuster hit trending worldwide now.</p>
          <Button className="text-lg px-6 py-3 rounded-2xl flex items-center gap-2">
            <Play size={20}/> Watch Now
          </Button>
        </div>
      </section>

      {/* Movie Grid */}
      <section className="mt-12 px-6">
        <h3 className="text-2xl font-semibold mb-6">Trending Movies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
                <img src={m.img} alt={m.title} className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold">{m.title}</h4>
                  <p className="text-sm text-gray-400">{m.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © 2025 MovieBox. All rights reserved.
      </footer>
    </div>
  );
}
