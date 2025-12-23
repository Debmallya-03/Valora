

import Image from "next/image";
import { TrendingDown, Shield, Bell, Rabbit } from "lucide-react";
import AddProductForm from "@/components/AddProductForm";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { getProducts } from "./actions";
import ProductCard from "@/components/ProductCard";


export default async function Home() {

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const products = user ? await getProducts() : [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen text-white p-4 md:p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/BG.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
      <header >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/valora1.png"   
              alt="Deal Drop Logo"
              width={600}
              height={200}
              className="h-10 w-auto"
            />
          </div>
          <AuthButton user={user} />
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="
  text-5xl
  font-bold
  mb-6
  tracking-tight
  bg-gradient-to-r
  from-white
  via-gray-200
  to-gray-400
  bg-clip-text
  text-transparent
  drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]
">
  Real-Time Price Drops
</h2>

          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Track prices across any e-commerce site. Get instant alerts when prices drop. Save money the smart way.
          </p>

          <AddProductForm user={user} />

          {products.length === 0 && (
  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
    {FEATURES.map(({ icon: Icon, title, description }) => (
      <div
        key={title}
        className="
          bg-[#050C18]/80
          backdrop-blur-xl
          p-6
          rounded-2xl
          border border-white/10
          text-center
          transition-all duration-300
          hover:translate-y-[-4px]
          hover:border-orange-500/40
          hover:shadow-lg hover:shadow-orange-500/10
        "
      >
        <div className="
          w-12 h-12
          bg-orange-500/10
          rounded-xl
          flex items-center justify-center
          mb-4 mx-auto
        ">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>

        <h3 className="font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-400">
          {description}
        </p>
      </div>
    ))}
  </div>
)}

        </div>

      </section>

      {/* Products Grid */}
      {user && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              Your Tracked Products
            </h3>
            <span className="text-sm text-white">
              {products.length} {products.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

        {/* Empty State */}
      {user && products.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
            <TrendingDown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products yet
            </h3>
            <p className="text-gray-600">
              Add your first product above to start tracking prices!
            </p>
          </div>
        </section>
      )}
      <div className="max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2  text-orange-700 px-6 py-2  text-sm font-medium mb-6">
            Made with ❤️ by Debmallya
          </div>
          </div>
    </main>
  );
}
