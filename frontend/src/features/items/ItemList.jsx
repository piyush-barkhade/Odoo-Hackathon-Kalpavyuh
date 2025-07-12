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
];

export default function ItemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {dummyItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
