import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="font-bold text-xl text-white">Mento</span>
            </Link>
            <p className="text-sm">
              Making task management easier and more efficient for teams worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#legal" className="hover:text-white">Legal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#guides" className="hover:text-white">Guides</Link></li>
              <li><Link href="#api" className="hover:text-white">API Docs</Link></li>
              <li><Link href="#status" className="hover:text-white">Status</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Mento. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="#terms" className="hover:text-white">Terms of Service</Link>
              <Link href="#cookies" className="hover:text-white">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}