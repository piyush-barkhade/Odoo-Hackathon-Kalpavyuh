import ItemCard from "../../components/ItemCard";

const dummyItems = [
  {
    id: "1",
    title: "Denim Jacket",
    condition: "Good",
    imageUrl: "/images/jacket.jpg",
  },
  {
    id: "2",
    title: "Summer Dress",
    condition: "Like New",
    imageUrl: "/images/dress.jpg",
  },
  {
    id: "3",
    title: "Leather Boots",
    condition: "Used",
    imageUrl: "/images/boots.jpg",
  },
  {
    id: "4",
    title: "Flannel Shirt",
    condition: "Excellent",
    imageUrl: "/images/flannel.jpg",
  },
  {
    id: "5",
    title: "Sneakers",
    condition: "Good",
    imageUrl: "/images/sneakers.jpg",
  },
  {
    id: "6",
    title: "Wool Scarf",
    condition: "Like New",
    imageUrl: "/images/scarf.jpg",
  },
];

export default function ItemList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Rewear Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
