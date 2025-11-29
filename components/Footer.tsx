import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">हिंदुस्तान लाइव</h2>
                        <p className="text-sm text-gray-400 mt-2">
                            आपका विश्वसनीय समाचार स्रोत |
                        </p>
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <Link href="/about" className="hover:text-white">About Us</Link>
                        <Link href="/contact" className="hover:text-white">Contact</Link>
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} हिंदुस्तान लाइव. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
