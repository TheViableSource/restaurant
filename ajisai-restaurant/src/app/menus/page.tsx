import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationCallout from '@/components/ReservationCallout';

export const metadata: Metadata = {
  title: 'Menu | Sushi, Sashimi, Ramen & More',
  description:
    'Explore the full menu at Ajisai Sushi & Steak in Portland. From exquisite sashimi and artisan rolls to warming ramen and bento boxes, discover our authentic Japanese cuisine.',
  keywords: [
    'Ajisai Menu Portland',
    'Sushi Menu Portland',
    'Japanese Restaurant Menu',
    'Sashimi Portland',
    'Ramen Portland',
    'Bento Box Portland',
    'Omakase Portland',
  ],
  openGraph: {
    title: 'Menu | Ajisai Sushi & Steak Portland',
    description:
      'From exquisite sashimi to warming ramen, explore our authentic Japanese menu.',
    url: 'https://ajisaisushisteak.com/menus',
    images: [
      {
        url: '/images/menu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajisai Restaurant Menu - Sushi and Japanese Cuisine',
      },
    ],
  },
};

export default function MenusPage() {
  // Menu data based on the uploaded images
  const sakeMenu = [
    { name: 'Junmai Daiginjo', description: 'Premium sake with fruity notes', price: '$18' },
    { name: 'Junmai Ginjo', description: 'Smooth and aromatic', price: '$14' },
    { name: 'Nigori', description: 'Unfiltered, creamy sake', price: '$12' },
    { name: 'Hot Sake', description: 'Traditional warmed sake', price: '$8' },
  ];

  const cocktailMenu = [
    { name: 'Lychee Martini', description: 'Vodka, lychee liqueur, fresh lychee', price: '$14' },
    { name: 'Tokyo Sunset', description: 'Sake, yuzu, elderflower', price: '$15' },
    { name: 'Ginger Fizz', description: 'Shochu, ginger, lime, soda', price: '$13' },
    { name: 'Matcha Highball', description: 'Whiskey, matcha, honey', price: '$14' },
  ];

  const softDrinks = [
    { name: 'Japanese Soda (Ramune)', price: '$4' },
    { name: 'Iced Green Tea', price: '$3' },
    { name: 'Hot Green Tea', price: '$3' },
    { name: 'Calpico', price: '$4' },
  ];

  const appetizers = [
    { name: 'Edamame', description: 'Steamed soybeans with sea salt', price: '$6' },
    { name: 'Gyoza (6 pcs)', description: 'Pan-fried pork dumplings', price: '$9' },
    { name: 'Chicken Karaage', description: 'Japanese fried chicken, spicy mayo', price: '$12' },
    { name: 'Agedashi Tofu', description: 'Crispy tofu in dashi broth', price: '$10' },
    { name: 'Takoyaki (6 pcs)', description: 'Octopus balls with bonito flakes', price: '$11' },
    { name: 'Shrimp Tempura (5 pcs)', description: 'Light and crispy battered shrimp', price: '$14' },
    { name: 'Beef Tataki', description: 'Seared beef, ponzu, green onion', price: '$16' },
    { name: 'Yellowtail Jalapeño', description: 'Fresh yellowtail, jalapeño, ponzu', price: '$18' },
  ];

  const soups = [
    { name: 'Miso Soup', description: 'Traditional tofu and wakame', price: '$4' },
    { name: 'Clear Soup', description: 'Light dashi broth with mushrooms', price: '$5' },
    { name: 'Seafood Miso', description: 'Miso with clams, shrimp, fish', price: '$8' },
  ];

  const salads = [
    { name: 'House Salad', description: 'Mixed greens, ginger dressing', price: '$6' },
    { name: 'Seaweed Salad', description: 'Marinated wakame with sesame', price: '$8' },
    { name: 'Salmon Skin Salad', description: 'Crispy salmon skin, mixed greens', price: '$12' },
    { name: 'Sashimi Salad', description: 'Chef\'s selection over greens', price: '$18' },
  ];

  const sashimi = [
    { name: 'Salmon (3 pcs)', description: 'Fresh Atlantic salmon', price: '$12' },
    { name: 'Tuna (3 pcs)', description: 'Premium bluefin tuna', price: '$14' },
    { name: 'Yellowtail (3 pcs)', description: 'Hamachi from Japan', price: '$13' },
    { name: 'Octopus (3 pcs)', description: 'Tender boiled tako', price: '$11' },
    { name: 'Sweet Shrimp (3 pcs)', description: 'Amaebi with heads', price: '$12' },
    { name: 'Sashimi Deluxe', description: 'Chef\'s selection, 15 pieces', price: '$42', isSpecial: true },
    { name: '*Chirashi', description: 'Assorted sashimi over sushi rice', price: '$42', isSpecial: true },
  ];

  const nigiri = [
    { name: 'Salmon', price: '$6' },
    { name: 'Tuna', price: '$7' },
    { name: 'Yellowtail', price: '$7' },
    { name: 'Shrimp', price: '$5' },
    { name: 'Eel (Unagi)', price: '$8' },
    { name: 'Octopus', price: '$6' },
    { name: 'Scallop', price: '$8' },
    { name: 'Tamago', price: '$4' },
  ];

  const classicRolls = [
    { name: 'California Roll', description: 'Crab, avocado, cucumber', price: '$9' },
    { name: 'Spicy Tuna Roll', description: 'Spicy tuna, cucumber', price: '$11' },
    { name: 'Salmon Roll', description: 'Fresh salmon, cucumber', price: '$10' },
    { name: 'Philadelphia Roll', description: 'Salmon, cream cheese, cucumber', price: '$11' },
    { name: 'Shrimp Tempura Roll', description: 'Crispy shrimp, avocado, eel sauce', price: '$13' },
    { name: 'Rainbow Roll', description: 'California roll topped with assorted fish', price: '$18' },
    { name: 'Dragon Roll', description: 'Eel, cucumber topped with avocado', price: '$17' },
    { name: 'Spider Roll', description: 'Soft shell crab, cucumber, spicy mayo', price: '$16' },
  ];

  const signatureRolls = [
    { name: 'Ajisai Roll', description: 'Lobster, asparagus, topped with tuna, salmon, avocado, special sauce', price: '$24', isSpecial: true },
    { name: 'Portland Roll', description: 'Dungeness crab, shrimp tempura, cream cheese, topped with salmon', price: '$22', isSpecial: true },
    { name: 'Volcano Roll', description: 'California roll baked with spicy crab, eel sauce, masago', price: '$19' },
    { name: 'Lion King Roll', description: 'Salmon, cream cheese, baked with spicy mayo, crispy onion', price: '$20' },
    { name: 'Black Dragon Roll', description: 'Shrimp tempura, cucumber, topped with eel and avocado', price: '$21' },
    { name: 'Sunset Roll', description: 'Spicy tuna inside, topped with fresh salmon and lemon', price: '$19' },
  ];

  const ramenUdon = [
    { name: 'Tonkotsu Ramen', description: 'Bamboo shoots, roasted pork, green onion, boiled egg', price: '$20' },
    { name: 'Kakuni Ramen', description: 'Tonkotsu broth, braised "Kurobuta" pork belly, bamboo shoots, green onion, boiled egg', price: '$24', isSpecial: true },
    { name: 'Spicy Miso Ramen', description: 'Bamboo shoots, roasted pork, green onion, boiled egg, corn', price: '$20' },
    { name: 'Shoyu Ramen', description: 'Bamboo shoots, roasted pork, green onion, boiled egg, crunch onion', price: '$20' },
    { name: 'Veggie Ramen', description: 'Bamboo shoots, green onion, corn, crunch onion, tofu', price: '$18' },
    { name: 'Tempura Udon', description: 'Tempura shrimp, tempura sweet potato, onion, fish cake, scallions', price: '$19' },
    { name: 'Kitsune Udon', description: 'Inari, fish cake, scallions', price: '$13' },
  ];

  const riceBowls = [
    { name: 'Spicy Orange Chicken', description: 'Tender, crispy, citrusy, sweet, a little spice, and white rice', price: '$27' },
    { name: 'Tofu Don', description: 'Grill tofu and vegetable with teriyaki sauce served over rice', price: '$22' },
    { name: 'Ten Don', description: 'Tempura shrimp and vegetable served over rice', price: '$24' },
    { name: 'Unagi Don', description: 'Grilled eel & vegetable over sushi rice with eel sauce', price: '$30' },
    { name: '*Chirashi', description: 'Assorted sashimi & vegetable over sushi rice', price: '$42', isSpecial: true },
    { name: 'Tekka Don', description: 'Blue-fin tuna sashimi & vegetable over sushi rice', price: '$52', isSpecial: true },
    { name: 'Sake Don', description: 'Salmon sashimi, salmon egg & vegetable over sushi rice', price: '$38' },
    { name: 'Hamachi Don', description: 'Yellow tail sashimi & vegetable over sushi rice', price: '$35' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Menu"
        subtitle="Discover the artistry of Japanese cuisine through our carefully curated selection"
        showCTA={false}
        imageUrl="/images/menu-hero.jpg"
        height="medium"
      />

      {/* Menu Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-widest uppercase">Culinary Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-2 mb-6">
            A Symphony of Flavors
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each dish on our menu represents a commitment to quality, tradition, and innovation. 
            Our ingredients are sourced from the finest purveyors, our techniques refined over 
            generations, and our presentations designed to delight all the senses.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <nav className="sticky top-16 z-40 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-6 pb-2 scrollbar-hide">
            {['Appetizers', 'Sashimi', 'Nigiri', 'Rolls', 'Ramen', 'Rice Bowls', 'Bento', 'Drinks'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-gray-600 hover:text-burgundy whitespace-nowrap transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Appetizers */}
          <div id="appetizers" className="scroll-mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <MenuSection title="Appetizers" items={appetizers} columns={1} />
                <MenuSection title="Soups" items={soups} columns={1} />
                <MenuSection title="Salads" items={salads} columns={1} />
              </div>
              <div className="sticky top-40">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/appetizers.jpg"
                    alt="Fresh appetizers at Ajisai - gyoza, edamame, and tempura"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sashimi & Nigiri */}
          <div id="sashimi" className="scroll-mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <MenuSection title="Sashimi" items={sashimi} columns={1} />
              </div>
              <div className="lg:order-1 sticky top-40">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/sashimi-platter.jpg"
                    alt="Premium sashimi platter at Ajisai featuring tuna, salmon, and yellowtail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="nigiri" className="scroll-mt-32 mb-16">
            <MenuSection title="Nigiri Sushi (2 pieces)" items={nigiri} columns={2} />
            <p className="text-sm text-gray-500 mt-4">* All nigiri served in pairs. Premium selections available upon request.</p>
          </div>

          {/* Rolls */}
          <div id="rolls" className="scroll-mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <MenuSection title="Classic Rolls" items={classicRolls} columns={1} />
              </div>
              <div>
                <MenuSection title="Signature Rolls" items={signatureRolls} columns={1} />
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/roll-1.jpg"
                  alt="Ajisai signature roll with fresh fish and avocado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/roll-2.jpg"
                  alt="Dragon roll topped with eel and avocado"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/roll-3.jpg"
                  alt="Rainbow roll with assorted fresh fish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ramen & Udon */}
          <div id="ramen" className="scroll-mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="sticky top-40">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/tonkotsu-ramen.jpg"
                      alt="Tonkotsu ramen with rich pork broth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/kakuni-ramen.jpg"
                      alt="Kakuni ramen with braised pork belly"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/spicy-miso-ramen.jpg"
                      alt="Spicy miso ramen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/tempura-udon.jpg"
                      alt="Tempura udon noodle soup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <MenuSection title="Ajisai Ramen & Udon" items={ramenUdon} columns={1} />
                <p className="text-sm text-gray-500 mt-4">* Ramen served with rich, house-made broth simmered for 12+ hours.</p>
              </div>
            </div>
          </div>

          {/* Rice Bowls */}
          <div id="rice-bowls" className="scroll-mt-32 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <MenuSection title="Ajisai Rice Bowls" items={riceBowls} columns={1} />
                <p className="text-sm text-gray-500 mt-4">* Served with miso soup or house salad.</p>
              </div>
              <div className="sticky top-40">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/chirashi-don.jpg"
                      alt="Chirashi don with assorted sashimi over rice"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/unagi-don.jpg"
                      alt="Unagi don with grilled eel"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Box */}
          <div id="bento" className="scroll-mt-32 mb-16">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-serif text-burgundy mb-4">Ajisai Dinner Bento</h3>
                  <p className="text-3xl font-serif text-burgundy mb-4">$40</p>
                  <p className="text-gray-600 mb-6">
                    A complete dining experience featuring California roll, chicken gyoza, rice, 
                    miso soup, and house salad.
                  </p>
                  <div className="mb-6">
                    <p className="font-medium text-burgundy mb-2">Choose any two items:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      {[
                        'Assorted Tempura',
                        'Chicken Teriyaki',
                        'Steak Teriyaki',
                        'Salmon Teriyaki',
                        'Chicken Karaage',
                        'Chicken Katsu',
                        'Chicken Yakitori',
                        'Grill Shrimp',
                        'Sashimi (5 pcs)',
                        'Nigiri (4 pcs)',
                        'Spicy Tuna Crispy Rice',
                        'Fried Squid Tentacle',
                      ].map((item) => (
                        <span key={item} className="flex items-center">
                          <svg className="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/dinner-bento.jpg"
                    alt="Ajisai Dinner Bento Box with assorted Japanese delicacies"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div id="drinks" className="scroll-mt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <MenuSection title="Sake Selection" items={sakeMenu} columns={1} />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <MenuSection title="Signature Cocktails" items={cocktailMenu} columns={1} />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <MenuSection title="Non-Alcoholic" items={softDrinks} columns={1} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Menu Note */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase 
            your risk of foodborne illness. Please inform your server of any allergies or dietary restrictions.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Prices subject to change. Additional 20% gratuity may be added for parties of 6 or more.
          </p>
        </div>
      </section>

      {/* Reservation CTA */}
      <ReservationCallout />
    </>
  );
}
