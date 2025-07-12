import { useParams } from "react-router-dom";

const dummyItems = [
  {
    id: "1",
    title: "Denim Jacket",
    condition: "Good",
    category: "Clothing",
    location: "Pune, India",
    size: "M",
    points: 120,
    imageUrl: "https://images-cdn.ubuy.co.in/65449ae6f5b7922220780054-voeeron-jean-jacket-for-men-denim-jacket.jpg",
    description:
      "This denim jacket is stylish and rugged. Lightly used, in good condition. Ideal for cool evenings and casual wear.",
    previousListings: [
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q04086s.jpg?im=Resize,width=750g",
      "https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875022503-9.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_I4Xc4OE8OPiCPieUtb_jkw7JMjhynntww&s",
      "https://spykar.com/cdn/shop/products/TrVz3QE_Ba-MTJK-02BBFS-01Black-_2.webp?v=1750329873",
    ],
  },
];

export default function ItemDetail() {
  const { id } = useParams();
  const item = dummyItems.find((item) => item.id === id);

  if (!item) return <div className="p-4 text-red-500">Item not found</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-center mb-2">
          Product Detail Page
        </h1>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search items..."
            className="border p-2 rounded w-1/2"
          />
          <button className="text-[#2f4156] px-2 py-2 rounded">
  🔍
</button>


        </div>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-6 border rounded-lg p-6 shadow-md">
        {/* Left - Image */}
        <div className="border rounded p-2 flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* Right - Description */}
        <div className="flex flex-col justify-between border rounded p-4 bg-gray-50">
          <div>
            <h2 className="text-3xl font-bold text-[#2f4156] mb-2">{item.title}</h2>

            <p className="text-sm text-gray-500 mb-4">{item.category}</p>
            <p className="mb-2"><strong>Condition:</strong> {item.condition}</p>
            <p className="mb-2"><strong>Size:</strong> {item.size}</p>
            <p className="mb-2"><strong>Location:</strong> {item.location}</p>
            <p className="mb-4"><strong>Redeem Points:</strong> {item.points}</p>
            <div>
              <h3 className="font-semibold mb-2">Product Description</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-4">
        <button className="bg-[#2f4156] hover:bg-[#253645] text-white px-6 py-2 rounded shadow">
          Swap Request
        </button>
        <button className="bg-[#c8d9e6] hover:bg-[#b4cadd] text-[#2f4156] font-semibold px-6 py-2 rounded shadow border border-[#2f4156]">
          Redeem via Points
        </button>
      </div>

      {/* Previous Listings */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Previous Listings</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {item.previousListings.map((img, index) => (
            <img
  key={index}
  src={img}
  alt={`Listing ${index + 1}`}
  className="w-full h-60 object-cover rounded shadow"
/>

          ))}
        </div>
      </div>
    </div>
  );
}
