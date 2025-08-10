// import { useState } from "react";

// const CallToAction = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Subscribed Email:", email);
//     setEmail("");
//     alert("Thanks for subscribing! 🎉");
//   };

//   return (
//     <section className="relative overflow-hidden py-20 px-4">
//       {/* Background Motion Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x opacity-80"></div>

//       {/* Parallax Effect Layer */}
//       <div
//         className="absolute inset-0 bg-fixed"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0.2,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Ready to Book or List Your Service?
//         </h2>
//         <p className="text-lg mb-8">
//           Get exclusive offers and updates straight to your inbox.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex justify-center gap-4 mb-8 flex-wrap">
//           <a
//             href="/services"
//             className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//           >
//             Book a Service
//           </a>
//           <a
//             href="/add-service"
//             className="bg-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
//           >
//             List Your Service
//           </a>
//         </div>

//         {/* Newsletter Signup */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex justify-center max-w-lg mx-auto"
//         >
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="p-3 rounded-l-lg w-full text-black outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-r-lg font-semibold"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
