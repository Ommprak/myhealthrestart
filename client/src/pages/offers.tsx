// import PageHeader from "@/components/layout/page-header";
// import { FaCheckCircle } from "react-icons/fa";

// export default function Offers() {
//   return (
//     <div>
//       <PageHeader 
//         title="Special Offers & Promotions" 
//         subtitle="Discover exclusive deals and discounts on our premium healthcare products."
//         accentWord="Offers"
//       />

//       <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
//             {/* Image Section */}
//             <div className="relative h-64 md:h-auto">
//               <img 
//                 src="https://res.cloudinary.com/df8blxifj/image/upload/v1747410412/go5snd76qzqdlbhzibcc.jpg" 
//                 alt="Fly Malaysia"
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl font-bold">
//                 Fly Malaysia with PhytoScience
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="p-6 flex flex-col justify-between space-y-4">
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Get Freedom Business Opportunity</h3>
//                 <ul className="space-y-2 text-sm text-slate-300">
//                   {[
//                     "Lphyto International Membership (Silver)",
//                     "3 Nights & 4 Days Stay",
//                     "Flight Tickets (to & fro)",
//                     "Free Visa",
//                     "Accommodation",
//                     "Fooding",
//                     "Travelling Expenses",
//                     "Business Training @ H.Q"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start gap-2">
//                       <FaCheckCircle className="text-blue-400 mt-1" /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-4 space-y-2">
//                 <p className="text-sm">📅 <strong>Booking Starting From:</strong> 20th May 2025</p>
//                 <p className="text-sm">✈️ <strong>Fly On:</strong> August / September</p>
//                 <p className="text-lg font-bold text-yellow-400">💰 Offer Price: Rs. 59,999/-</p>
//                 <p className="text-sm">
//                   📍Office: At Gatebazar (Lochapoda road, near Dhuba street), Berhampur, Odisha
//                 </p>
//                 <p className="text-sm">📞 Contacts: +91 9776932777</p>
//               </div>

//               <div className="mt-6">
//                 <a 
//                   href="https://wa.me/919776932777?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Malaysia%20travel%20offer." 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
//                 >
//                   Book Now via WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import PageHeader from "@/components/layout/page-header";

export default function Offers() {
  return (
    <div>
      <PageHeader 
        title="Special Offers & Promotions" 
        subtitle="Discover exclusive deals and discounts on our premium healthcare products."
        accentWord="Offers"
      />

      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6">

          {/* Flyer Image - Click to Download */}
          <a 
            href="https://res.cloudinary.com/dnqukw6fb/image/upload/v1747418291/WhatsApp_Image_2025-05-16_at_21.03.51_5b954924_kw92cw.jpg" 
            download="Malaysia-Travel-Offer.jpg"
            className="inline-block"
          >
            <img
              src="https://res.cloudinary.com/dnqukw6fb/image/upload/v1747418291/WhatsApp_Image_2025-05-16_at_21.03.51_5b954924_kw92cw.jpg" 
              alt="Flyer Offer"
              width={600}
              height={400}
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            />
          </a>

          {/* Offer Info */}
          <div className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
            <p className="text-sm">📅 <strong>Booking Start From:</strong> 20th May 2025</p>
            <p className="text-sm">✈️ <strong>Fly On:</strong> August / September</p>
            <p className="text-lg font-bold text-yellow-400">💰 Offer Price: Rs. 59,999/-</p>
            <p className="text-sm">
              📍<strong>Office:</strong> At Gatebazar (Lochapoda road, near Dhuba street), Berhampur, Odisha
            </p>
            <p className="text-sm">📞 <strong>Contacts:</strong> +91 9776932777</p>
          </div>

          {/* Book Now Button */}
          <a 
            href="https://wa.me/919776932777?text=Hello%2C%20I%20would%20like%20to%20book%20the%20Malaysia%20travel%20offer." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
