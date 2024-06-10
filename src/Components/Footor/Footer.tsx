import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className="bg-black text-white h-screen flex items-center">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">İletişim</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Hakkımızda</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">KVKK</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Çalışma İlanlarımız</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Satış Sözleşmesi</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Garanti ve İade Koşulları</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Gerçek Müşteri Yorumları</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Protein</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Spor Gıdaları</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Sağlık</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Gıda</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Vitamin</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Aksesuar</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Tüm Ürünler</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Paketler</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Lansmana Özel Fırsatlar</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <ul className="font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Whey Protein</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Cream of Rice</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Creatine</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">BCAA+</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Pre-Workout</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Fitness Paketi</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Collagen</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Günlük Vitamin Paketi</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">ZMA</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 DJS NUTRITION. Tüm Hakları Saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;