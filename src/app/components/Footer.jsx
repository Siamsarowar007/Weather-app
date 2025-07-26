import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:underline text-gray-300">Privacy Policy</a>
          <a href="/terms" className="hover:underline text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
