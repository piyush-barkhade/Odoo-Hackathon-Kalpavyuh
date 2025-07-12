export default function UserDashboard() {
  const user = { name: "Alex", points: 120 };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
      <p className="mb-4">Points Balance: {user.points}</p>
      <h2 className="text-xl font-bold">Your Listed Items</h2>
      <p className="text-sm">[List of items will go here]</p>
      <h2 className="text-xl font-bold mt-4">Swaps</h2>
      <p className="text-sm">[Ongoing/Completed swaps will go here]</p>
    </div>
  );
}
