import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-purple-600">
        Home
      </Link>

      <ChevronRight size={16} className="mx-2" />

      <span className="text-gray-900 font-medium">
        Products
      </span>
    </nav>
  );
}