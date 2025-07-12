import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">Item Detail - ID: {id}</h1>
      <img src="/images/dummy.jpg" alt="Item" className="mb-4" />
      <p>Description of the item goes here...</p>
      <button className="bg-green-600 text-white p-2 rounded mr-2">
        Swap Request
      </button>
      <button className="bg-green-800 text-white p-2 rounded">
        Redeem via Points
      </button>
    </div>
  );
}
