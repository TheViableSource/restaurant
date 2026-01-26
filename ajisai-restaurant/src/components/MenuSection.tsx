interface MenuItem {
  name: string;
  description?: string;
  price: string;
  isSpecial?: boolean;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  columns?: 1 | 2;
}

const MenuSection = ({ title, items, columns = 2 }: MenuSectionProps) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif text-burgundy mb-6 pb-2 border-b border-burgundy/20">
        {title}
      </h3>
      <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : ''} gap-6`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-start ${
              item.isSpecial ? 'bg-cream p-4 rounded-lg' : ''
            }`}
          >
            <div className="flex-1 pr-4">
              <h4 className={`font-medium ${item.isSpecial ? 'text-burgundy' : 'text-gray-900'}`}>
                {item.name}
                {item.isSpecial && (
                  <span className="ml-2 text-xs bg-gold text-white px-2 py-0.5 rounded uppercase">
                    Chef&apos;s Pick
                  </span>
                )}
              </h4>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
            <span className="text-burgundy font-medium whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
