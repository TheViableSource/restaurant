'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationCallout from '@/components/ReservationCallout';
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn } from '@/components/MotionWrapper';

// Real Unsplash images for menu items
const MENU_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2070&auto=format&fit=crop',
  appetizers: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1974&auto=format&fit=crop',
  sashimi: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=2069&auto=format&fit=crop',
  roll1: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop',
  roll2: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974&auto=format&fit=crop',
  roll3: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2070&auto=format&fit=crop',
  tonkotsu: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop',
  kakuni: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=2070&auto=format&fit=crop',
  misoRamen: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?q=80&w=2067&auto=format&fit=crop',
  tempuraUdon: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?q=80&w=1974&auto=format&fit=crop',
  chirashi: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974&auto=format&fit=crop',
  unagi: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2070&auto=format&fit=crop',
  bento: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=1964&auto=format&fit=crop',
  orangeChicken: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1974&auto=format&fit=crop',
};

export default function MenusPage() {
  // Sake menu with rich descriptions
  const sakeMenu = [
    { name: 'Junmai Daiginjo', description: 'Ultra-premium sake with delicate fruity notes, silky texture, and a clean finish', price: '$18' },
    { name: 'Junmai Ginjo', description: 'Smooth and aromatic with hints of melon and white flowers', price: '$14' },
    { name: 'Nigori', description: 'Unfiltered, creamy sake with a sweet, rich character', price: '$12' },
    { name: 'Hot Sake', description: 'Traditional warmed sake, perfect for cold evenings', price: '$8' },
  ];

  const cocktailMenu = [
    { name: 'Lychee Martini', description: 'Premium vodka, lychee liqueur, fresh lychee garnish', price: '$14' },
    { name: 'Tokyo Sunset', description: 'Sake, fresh yuzu citrus, elderflower, champagne float', price: '$15' },
    { name: 'Ginger Fizz', description: 'House-infused ginger shochu, lime, sparkling soda', price: '$13' },
    { name: 'Matcha Highball', description: 'Japanese whiskey, ceremonial grade matcha, honey', price: '$14' },
  ];

  const softDrinks = [
    { name: 'Japanese Ramune Soda', price: '$4' },
    { name: 'Iced Green Tea', price: '$3' },
    { name: 'Hot Green Tea', price: '$3' },
    { name: 'Calpico', price: '$4' },
  ];

  // Appetizers with enhanced descriptions
  const appetizers = [
    { name: 'Edamame', description: 'Steamed young soybeans with premium sea salt', price: '$6' },
    { name: 'Gyoza (6 pcs)', description: 'Pan-fried pork dumplings with house-made ponzu dipping sauce', price: '$9' },
    { name: 'Chicken Karaage', description: 'Japanese-style fried chicken marinated in sake and ginger, served with spicy mayo', price: '$12' },
    { name: 'Agedashi Tofu', description: 'Silken tofu in light tempura, served in warm dashi broth', price: '$10' },
    { name: 'Takoyaki (6 pcs)', description: 'Crispy octopus balls topped with bonito flakes and tangy sauce', price: '$11' },
    { name: 'Shrimp Tempura (5 pcs)', description: 'Light, crispy battered tiger shrimp with tentsuyu dipping sauce', price: '$14' },
    { name: 'Beef Tataki', description: 'Seared wagyu beef, ponzu reduction, micro greens', price: '$16', isSpecial: true },
    { name: 'Yellowtail Jalapeño', description: 'Fresh hamachi, thin-sliced jalapeño, citrus ponzu, cilantro', price: '$18', isSpecial: true },
  ];

  const soups = [
    { name: 'Miso Soup', description: 'Traditional red miso with silken tofu, wakame seaweed, green onion', price: '$4' },
    { name: 'Clear Soup', description: 'Delicate dashi broth with shiitake mushrooms and seasonal vegetables', price: '$5' },
    { name: 'Seafood Miso', description: 'Rich miso soup with littleneck clams, shrimp, and white fish', price: '$8' },
  ];

  const salads = [
    { name: 'House Salad', description: 'Crisp mixed greens with our signature ginger-carrot dressing', price: '$6' },
    { name: 'Seaweed Salad', description: 'Marinated wakame with sesame seeds and rice vinegar dressing', price: '$8' },
    { name: 'Salmon Skin Salad', description: 'Crispy salmon skin over mixed greens with ponzu vinaigrette', price: '$12' },
    { name: 'Sashimi Salad', description: 'Chef\'s selection of premium fish over organic greens', price: '$18', isSpecial: true },
  ];

  // Sashimi with enhanced descriptions
  const sashimi = [
    { name: 'Salmon (3 pcs)', description: 'Fresh Atlantic salmon, buttery and rich', price: '$12' },
    { name: 'Tuna (3 pcs)', description: 'Premium bluefin tuna, deep red and melt-in-your-mouth', price: '$14' },
    { name: 'Yellowtail (3 pcs)', description: 'Japanese hamachi, clean and delicate', price: '$13' },
    { name: 'Octopus (3 pcs)', description: 'Tender boiled tako with subtle sweetness', price: '$11' },
    { name: 'Sweet Shrimp (3 pcs)', description: 'Amaebi with heads served crispy-fried', price: '$12' },
    { name: 'Sashimi Deluxe', description: 'Chef\'s daily selection of 15 premium pieces, beautifully arranged', price: '$42', isSpecial: true },
    { name: '*Chirashi', description: 'Assorted premium sashimi artfully draped over seasoned sushi rice', price: '$42', isSpecial: true },
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

  // Classic rolls
  const classicRolls = [
    { name: 'California Roll', description: 'Real crab, ripe avocado, cucumber, tobiko', price: '$9' },
    { name: 'Spicy Tuna Roll', description: 'Fresh tuna, spicy mayo, cucumber, sesame', price: '$11' },
    { name: 'Salmon Roll', description: 'Premium salmon, cucumber, green onion', price: '$10' },
    { name: 'Philadelphia Roll', description: 'Smoked salmon, cream cheese, cucumber, avocado', price: '$11' },
    { name: 'Shrimp Tempura Roll', description: 'Crispy shrimp, avocado, cucumber, sweet eel sauce', price: '$13' },
    { name: 'Rainbow Roll', description: 'California roll crowned with assorted fish', price: '$18' },
    { name: 'Dragon Roll', description: 'Eel, cucumber inside, draped with avocado and eel glaze', price: '$17' },
    { name: 'Spider Roll', description: 'Crispy soft shell crab, cucumber, avocado, spicy mayo', price: '$16' },
  ];

  // Signature rolls with rich descriptions
  const signatureRolls = [
    { name: 'Ajisai Roll', description: 'Maine lobster, asparagus, topped with tuna, salmon, avocado, finished with our secret special sauce', price: '$24', isSpecial: true },
    { name: 'Portland Roll', description: 'Fresh Dungeness crab, shrimp tempura, cream cheese, crowned with Scottish salmon', price: '$22', isSpecial: true },
    { name: 'Volcano Roll', description: 'California roll baked golden with spicy crab, drizzled with eel sauce and masago', price: '$19' },
    { name: 'Lion King Roll', description: 'Salmon, cream cheese, baked with creamy spicy mayo, crispy onion', price: '$20' },
    { name: 'Black Dragon Roll', description: 'Crispy shrimp tempura, cucumber, crowned with eel and avocado', price: '$21' },
    { name: 'Sunset Roll', description: 'Spicy tuna inside, fresh salmon on top, thin lemon slices', price: '$19' },
  ];

  // Ramen & Udon with rich descriptions from the menu images
  const ramenUdon = [
    { name: 'Tonkotsu Ramen', description: 'Rich, creamy pork broth simmered 12+ hours, bamboo shoots, chashu pork, soft-boiled egg, green onion', price: '$20' },
    { name: 'Kakuni Ramen', description: 'Signature tonkotsu broth with melt-in-your-mouth braised "Kurobuta" pork belly, bamboo shoots, soft-boiled egg', price: '$24', isSpecial: true },
    { name: 'Spicy Miso Ramen', description: 'House-blended spicy miso broth, chashu pork, corn, soft-boiled egg, green onion', price: '$20' },
    { name: 'Shoyu Ramen', description: 'Clear soy-based broth, chashu pork, bamboo shoots, crispy onion, soft-boiled egg', price: '$20' },
    { name: 'Veggie Ramen', description: 'Vegetable-based broth, seasonal vegetables, corn, crispy onion, silken tofu', price: '$18' },
    { name: 'Tempura Udon', description: 'Thick wheat noodles in delicate dashi, tempura shrimp & sweet potato, fish cake, scallions', price: '$19' },
    { name: 'Kitsune Udon', description: 'Silky udon noodles with sweet fried tofu (inari), fish cake, scallions', price: '$13' },
  ];

  // Rice bowls with descriptions from the menu images
  const riceBowls = [
    { name: 'Spicy Orange Chicken', description: 'Tender, crispy chicken with citrusy-sweet glaze, a touch of heat, over steamed rice', price: '$27' },
    { name: 'Tofu Don', description: 'Grilled tofu and seasonal vegetables glazed with house teriyaki over white rice', price: '$22' },
    { name: 'Ten Don', description: 'Tempura shrimp and assorted vegetables over rice with tentsuyu sauce', price: '$24' },
    { name: 'Unagi Don', description: 'Grilled freshwater eel glazed with sweet kabayaki sauce over sushi rice', price: '$30', isSpecial: true },
    { name: '*Chirashi', description: 'Assorted premium sashimi & vegetable over seasoned sushi rice', price: '$42', isSpecial: true },
    { name: 'Tekka Don', description: 'Premium blue-fin tuna sashimi & vegetable over sushi rice', price: '$52', isSpecial: true },
    { name: 'Sake Don', description: 'Fresh salmon sashimi, salmon roe (ikura) & vegetable over sushi rice', price: '$38' },
    { name: 'Hamachi Don', description: 'Yellowtail sashimi & vegetable arranged over sushi rice', price: '$35' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Menu"
        subtitle="Discover the artistry of Japanese cuisine through our carefully curated selection of sushi, ramen, and signature creations"
        showCTA={false}
        imageUrl={MENU_IMAGES.hero}
        height="medium"
      />

      {/* Menu Introduction */}
      <section className="py-16 bg-white">
        <FadeInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-widest uppercase font-medium">Culinary Excellence</span>
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mt-3 mb-6">
            A Symphony of Flavors
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Each dish on our menu represents a commitment to quality, tradition, and innovation. 
            Our ingredients are sourced from the finest purveyors, our techniques refined over 
            generations, and our presentations designed to delight all the senses.
          </p>
        </FadeInUp>
      </section>

      {/* Menu Navigation */}
      <nav className="sticky top-16 z-40 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-6 pb-2 scrollbar-hide">
            {['Appetizers', 'Sashimi', 'Nigiri', 'Rolls', 'Ramen', 'Rice Bowls', 'Bento', 'Drinks'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-gray-600 hover:text-burgundy whitespace-nowrap transition-colors font-medium"
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
          <div id="appetizers" className="scroll-mt-32 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeInLeft>
                <MenuSection title="Appetizers" items={appetizers} columns={1} />
                <MenuSection title="Soups" items={soups} columns={1} />
                <MenuSection title="Salads" items={salads} columns={1} />
              </FadeInLeft>
              <FadeInRight className="sticky top-40">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={MENU_IMAGES.appetizers}
                    alt="Fresh appetizers at Ajisai - gyoza, edamame, and tempura"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeInRight>
            </div>
          </div>

          {/* Sashimi & Nigiri */}
          <div id="sashimi" className="scroll-mt-32 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeInLeft className="lg:order-2">
                <MenuSection title="Sashimi" items={sashimi} columns={1} />
              </FadeInLeft>
              <FadeInRight className="lg:order-1 sticky top-40">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={MENU_IMAGES.sashimi}
                    alt="Premium sashimi platter at Ajisai featuring tuna, salmon, and yellowtail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeInRight>
            </div>
          </div>

          <div id="nigiri" className="scroll-mt-32 mb-20">
            <FadeInUp>
              <MenuSection title="Nigiri Sushi (2 pieces)" items={nigiri} columns={2} />
              <p className="text-sm text-gray-500 mt-4 italic">* All nigiri served in pairs. Premium selections available upon request.</p>
            </FadeInUp>
          </div>

          {/* Rolls */}
          <div id="rolls" className="scroll-mt-32 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              <FadeInLeft>
                <MenuSection title="Classic Rolls" items={classicRolls} columns={1} />
              </FadeInLeft>
              <FadeInRight>
                <MenuSection title="Signature Rolls" items={signatureRolls} columns={1} />
              </FadeInRight>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StaggerItem>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src={MENU_IMAGES.roll1}
                    alt="Ajisai signature roll with fresh fish and avocado"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src={MENU_IMAGES.roll2}
                    alt="Dragon roll topped with eel and avocado"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg img-zoom">
                  <Image
                    src={MENU_IMAGES.roll3}
                    alt="Rainbow roll with assorted fresh fish"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Ramen & Udon */}
          <div id="ramen" className="scroll-mt-32 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeInLeft className="sticky top-40">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={MENU_IMAGES.tonkotsu}
                      alt="Tonkotsu ramen with rich pork broth"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-medium">Tonkotsu</p>
                    </div>
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={MENU_IMAGES.kakuni}
                      alt="Kakuni ramen with braised pork belly"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-medium">Kakuni</p>
                    </div>
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={MENU_IMAGES.misoRamen}
                      alt="Spicy miso ramen"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-medium">Spicy Miso</p>
                    </div>
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                    <Image
                      src={MENU_IMAGES.tempuraUdon}
                      alt="Tempura udon noodle soup"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-medium">Tempura Udon</p>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <MenuSection title="Ajisai Ramen & Udon" items={ramenUdon} columns={1} />
                <p className="text-sm text-gray-500 mt-4 italic">* All ramen served with rich, house-made broth simmered for 12+ hours. Add extra chashu $4, extra egg $2.</p>
              </FadeInRight>
            </div>
          </div>

          {/* Rice Bowls */}
          <div id="rice-bowls" className="scroll-mt-32 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeInLeft>
                <MenuSection title="Ajisai Rice Bowls" items={riceBowls} columns={1} />
                <p className="text-sm text-gray-500 mt-4 italic">* All rice bowls served with miso soup or house salad.</p>
              </FadeInLeft>
              <FadeInRight className="sticky top-40">
                <div className="grid grid-cols-2 gap-4">
                  <ScaleIn>
                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                      <Image
                        src={MENU_IMAGES.chirashi}
                        alt="Chirashi don with assorted sashimi over rice"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </ScaleIn>
                  <ScaleIn delay={0.1}>
                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom">
                      <Image
                        src={MENU_IMAGES.unagi}
                        alt="Unagi don with grilled eel"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </ScaleIn>
                  <ScaleIn delay={0.2}>
                    <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg img-zoom col-span-2">
                      <Image
                        src={MENU_IMAGES.orangeChicken}
                        alt="Spicy Orange Chicken rice bowl"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </ScaleIn>
                </div>
              </FadeInRight>
            </div>
          </div>

          {/* Bento Box */}
          <div id="bento" className="scroll-mt-32 mb-20">
            <FadeInUp>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-gold text-sm tracking-widest uppercase font-medium">Complete Experience</span>
                    <h3 className="text-3xl font-serif text-burgundy mt-2 mb-4">Ajisai Dinner Bento</h3>
                    <p className="text-4xl font-serif text-burgundy mb-4">$40</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      A complete dining experience featuring California roll, chicken gyoza, steamed rice, 
                      miso soup, and house salad — the perfect introduction to our cuisine.
                    </p>
                    <div className="mb-6">
                      <p className="font-medium text-burgundy mb-3">Choose any two items below:</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        {[
                          'Assorted Tempura',
                          'Chicken Teriyaki',
                          'Steak Teriyaki',
                          'Salmon Teriyaki',
                          'Chicken Karaage',
                          'Chicken Katsu',
                          'Chicken Yakitori',
                          'Grilled Shrimp',
                          'Sashimi (5 pcs)',
                          'Nigiri (4 pcs)',
                          'Spicy Tuna Crispy Rice',
                          'Fried Squid Tentacle',
                        ].map((item) => (
                          <span key={item} className="flex items-center py-1">
                            <svg className="w-4 h-4 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                      src={MENU_IMAGES.bento}
                      alt="Ajisai Dinner Bento Box with assorted Japanese delicacies"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Drinks */}
          <div id="drinks" className="scroll-mt-32">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <MenuSection title="Sake Selection" items={sakeMenu} columns={1} />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <MenuSection title="Signature Cocktails" items={cocktailMenu} columns={1} />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <MenuSection title="Non-Alcoholic" items={softDrinks} columns={1} />
                </div>
              </StaggerItem>
            </StaggerContainer>
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
