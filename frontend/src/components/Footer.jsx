export default function Footer() {
  return (
    <footer className="bg-[#2f4156] text-white px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-left">
        {/* About ReWear */}
        <div>
          <h3 className="font-semibold text-lg mb-2">About ReWear</h3>
          <p className="text-[#c8d9e6]">
            ReWear is a community-driven platform for swapping unused clothing.
            We aim to reduce textile waste and promote sustainable fashion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-[#c8d9e6]">Home</a></li>
            <li><a href="/browse" className="hover:text-[#c8d9e6]">Browse Items</a></li>
            <li><a href="/upload" className="hover:text-[#c8d9e6]">List an Item</a></li>
            <li><a href="/dashboard" className="hover:text-[#c8d9e6]">Dashboard</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li>
              Email: <a href="mailto:support@rewear.com" className="hover:text-[#c8d9e6]">support@rewear.com</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c8d9e6]">Instagram</a> |{" "}
              <a href="#" className="hover:text-[#c8d9e6]">Facebook</a>
            </li>
            <li>ReWear © {new Date().getFullYear()}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 text-center text-xs" style={{ borderColor: "#f5efeb", color: "#c8d9e6" }}>
        © {new Date().getFullYear()} ReWear. All rights reserved. | Built with love for a sustainable future.
      </div>
    </footer>
  );
}
