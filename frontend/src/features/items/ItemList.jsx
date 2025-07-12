import ItemCard from "../../components/ItemCard";


const dummyItems = [
  {
    id: "1",
    title: "Denim Jacket",
    condition: "Good",
    imageUrl:
      "https://image.hm.com/assets/hm/8c/24/8c2419a5e26f6558839abd1c933c72c1c3157c2a.jpg?imwidth=1260"},
  {
    id: "2",
    title: "Summer Dress",
    condition: "Like New",
    imageUrl: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27443692/2024/12/6/2148e1e4-af7f-45e9-a6c2-501c743209471733477391151-Azira-Checked-Cotton-Empire-Puff-Sleeve-Layered-Fit--Flare-M-1.jpg",
  },
  {
    id: "3",
    title: "Leather Boots",
    condition: "Used",
    imageUrl: "https://cdn-images.farfetch-contents.com/16/04/61/39/16046139_30036387_600.jpg",
  },
  {
    id: "4",
    title: "Flannel Shirt",
    condition: "Excellent",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBT4wmFWfrNIUUVoPXaAkLzOiMKo1SL9DFGw&s",
  },
  {
    id: "5",
    title: "Sneakers",
    condition: "Good",
    imageUrl: "https://m.media-amazon.com/images/I/614aiM56siL._UY1000_.jpg",
  },
  {
    id: "6",
    title: "Wool Scarf",
    condition: "Like New",
    imageUrl: "https://www.kilmora.in/wp-content/uploads/2024/01/CX84-II-1b-scaled.jpg",
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
