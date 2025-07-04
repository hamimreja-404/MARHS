// import React from "react";
// import { SocialIcon } from "react-social-icons";
// import { NavLink } from "react-router-dom";
// import {
//   Home,
//   Info,
//   Users,
//   Medal,
//   Image as GalleryIcon,
// } from "lucide-react";

// function Footer() {
//  const navItems = [
//     { name: "Home", path: "/", icon: <Home size={18} className="mr-2" /> },
//     {
//       name: "About Us",
//       path: "/about",
//       icon: <Info size={18} className="mr-2" />,
//     },
//     {
//       name: "Notice Board",
//       path: "/notice",
//       icon: <Bell size={18} className="mr-2" />,
//     },
//     {
//       name: "Admission",
//       path: "/admission",
//       hasDropdown: true,
//       submenu: [
//         { name: "Admission Notices", path: "/admission#notice" },
//         { name: "Admission Procedure", path: "/admission#procedure" },
//         { name: "General Instructions", path: "/admission#instructions" },
//         { name: "Fee Structure", path: "/admission#fee" },
//       ],
//     },
//     {
//       name: "Academics",
//       path: "/academics",
//       hasDropdown: true,
//       submenu: [
//         { name: "Examination", path: "/academics#examination" },
//         { name: "Holiday List", path: "/academics#holidayList" },
//         { name: "Syllabus", path: "/academics#syllabus" },
//       ],
//     },
//     {
//       name: (
//         <span className="flex items-center gap-1">
//           <span className="ml-1">Faculty & Leadership</span>
//         </span>
//       ),
//       path: "/Faculty&Leadership",
//       hasDropdown: true,
//       submenu: [
//         {
//           name: (
//             <span className="flex items-center">
//               <Users size={14} className="mr-2" />
//               Faculty
//             </span>
//           ),
//           path: "/faculty&leadership#faculty",
//         },
//         {
//           name: (
//             <span className="flex items-center">
//               <Medal size={14} className="mr-2" />
//               Presidents
//             </span>
//           ),
//           path: "/faculty&leadership#presidents",
//         },
//       ],
//     },
//     // {
//     //   name: "Faculty & Leadership",
//     //   path: "/Faculty&Leadership",
//     //   hasDropdown: true,
//     //   submenu: [
//     //     { name: "Faculty", path: "/faculty",icon: <Users size={15} className="mr-2" />  },
//     //     { name: "Presidents", path: "/presidents", icon: <Medal size={15} className="mr-2" /> }
//     //   ],
//     // },
//     // { name: "Faculty", path: "/faculty", icon: <Users size={18} className="mr-2" /> },
//     // { name: "Presidents", path: "/presidents", icon: <Medal size={18} className="mr-2" /> },
//     {
//       name: "Gallery",
//       path: "/gallery",
//       icon: <GalleryIcon size={18} className="mr-2" />,
//     },
//   ];
//     const handleSubmenuClick = (path) => {
//     const [basePath, hash] = path.split("#");
//     if (location.pathname === basePath) {
//       const el = document.getElementById(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     } else {
//       sessionStorage.setItem("scrollToId", hash);
//       navigate(basePath);
//     }
//     setIsOpen(false);
//     setOpenDropdown(null);
//   };

//   return (
//     <footer className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white shadow-xl  mt-20">
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
//         {/* Info */}
//         <div>
//           <h2 className="text-2xl font-serif font-semibold tracking-wide mb-2">
//             MADHAIPUR A.R. HIGH SCHOOL (H.S.)
//           </h2>
//           <p className="text-sm mb-2">
//             257Q+9H2, Madhaipur, West Bengal 732101
//           </p>
//           <p className="text-sm">hm.mparhs@gamail.com</p>
//           <p className="text-sm">+91 7908621154</p>
//         </div>

//         {/* Nav Links */}
//         <div className="flex flex-col items-center md:items-start gap-2">
//           <h3 className="text-lg font-bold mb-2 underline underline-offset-4 decoration-yellow-400">
//             Quick Links
//           </h3>
//           {navItems.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 flex items-center transition-all"
//                   : "flex items-center text-white hover:text-yellow-300 transition"
//               }
//             >
//               {item.icon}
//               {item.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* Social & Alumni */}
//         <div className="flex flex-col items-center md:items-end gap-4">
//           <div className="flex gap-4">
//             <SocialIcon url="https://facebook.com" target="_blank" fgColor="#fff" bgColor="transparent" />
//             <SocialIcon url="https://linkedin.com" target="_blank" fgColor="#fff" bgColor="transparent" />
//             <SocialIcon url="mailto:madhaipurschool@gmail.com" fgColor="#fff" bgColor="transparent" />
//             <SocialIcon url="https://instagram.com" target="_blank" fgColor="#fff" bgColor="transparent" />
//           </div>
//           <div className="flex items-center gap-3">
//             <img
//               src="src/images/Logo/DP.jpg"
//               alt="School Logo"
//               className="w-20 h-20 rounded-full border border-white shadow-sm"
//             />

// <p className="text-center text-sm text-gray-300 italic mt-4">
//   Designed & Developed by{" "}
//   <NavLink
//     to="/portfolio"
//     className="text-yellow-300 font-xl font-bold hover:underline"
//   >
//     Hamim Reja
//   </NavLink>, Alumni of Madhaipur A.R. High School
// </p>
//           </div>
//         </div>
//       </div>

//       {/* Google Map */}
//       <iframe
//         className="w-full h-56 md:h-64 border-none shadow-md"
//         loading="lazy"
//         title="school-map"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.947866683464!2d88.1899048934904!3d25.01388528464579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb02403b0665f7%3A0xc58c8e9469c4461b!2sMADHAIPUR%20A.%20R.%20HIGH%20SCHOOL(H.S)!5e0!3m2!1sen!2sin!4v1750220950127!5m2!1sen!2sin"
//       ></iframe>

//       {/* Bottom Bar */}
//       <div className="bg-indigo-950 text-indigo-300 text-center py-3 text-xs border-t border-indigo-700">
//         © {new Date().getFullYear()} MADHAIPUR A.R. HIGH SCHOOL (H.S.). All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;






import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import {
  Home,
  Info,
  Bell,
  Users,
  Medal,
  Image as GalleryIcon,
} from "lucide-react";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (path) => {
    const [basePath, hash] = path.split("#");
    if (location.pathname === basePath) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      sessionStorage.setItem("scrollToId", hash);
      navigate(basePath);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white mt-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center lg:text-left">

        {/* Column 1: School Info */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-2">
            MADHAIPUR A.R. HIGH SCHOOL (H.S.)
          </h2>
          <p className="text-sm">257Q+9H2, Madhaipur, West Bengal 732101</p>
          <p className="text-sm">hm.mparhs@gmail.com</p>
          <p className="text-sm">+91 7908621154</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 underline underline-offset-4 decoration-yellow-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <NavLink to="/" className="flex items-center gap-2 hover:text-yellow-300 transition"><Home size={16} /> Home</NavLink>
            <NavLink to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition"><Info size={16} /> About Us</NavLink>
            <NavLink to="/notice" className="flex items-center gap-2 hover:text-yellow-300 transition"><Bell size={16} /> Notice Board</NavLink>
            <NavLink to="/gallery" className="flex items-center gap-2 hover:text-yellow-300 transition"><GalleryIcon size={16} /> Gallery</NavLink>
          </div>
        </div>

        {/* Column 3: Admission & Academics (side-by-side) */}
        <div>
          <h3 className="text-lg font-bold mb-3 underline underline-offset-4 decoration-yellow-400">
            Admission & Academics
          </h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold mb-2">📝 Admission</p>
              <button onClick={() => handleHashLink("/admission#notice")} className="block text-left text-gray-300 hover:text-yellow-300">• Notices</button>
              <button onClick={() => handleHashLink("/admission#procedure")} className="block text-left text-gray-300 hover:text-yellow-300">• Procedure</button>
              <button onClick={() => handleHashLink("/admission#instructions")} className="block text-left text-gray-300 hover:text-yellow-300">• Instructions</button>
              <button onClick={() => handleHashLink("/admission#fee")} className="block text-left text-gray-300 hover:text-yellow-300">• Fee Structure</button>
            </div>
            <div>
              <p className="font-semibold mb-2">🎓 Academics</p>
              <button onClick={() => handleHashLink("/academics#examination")} className="block text-left text-gray-300 hover:text-yellow-300">• Examination</button>
              <button onClick={() => handleHashLink("/academics#holidayList")} className="block text-left text-gray-300 hover:text-yellow-300">• Holiday List</button>
              <button onClick={() => handleHashLink("/academics#syllabus")} className="block text-left text-gray-300 hover:text-yellow-300">• Syllabus</button>
            </div>
          </div>
        </div>

        {/* Column 4: Faculty & Presidents */}
        <div>
          <h3 className="text-lg font-bold mb-3 underline underline-offset-4 decoration-yellow-400">
            Faculty & Leadership
          </h3>
          <button onClick={() => handleHashLink("/faculty&leadership#faculty")} className="flex items-center gap-2 text-gray-300 hover:text-yellow-300 text-sm">
            <Users size={14} /> Faculty
          </button>
          <button onClick={() => handleHashLink("/faculty&leadership#presidents")} className="flex items-center gap-2 text-gray-300 hover:text-yellow-300 text-sm mt-2">
            <Medal size={14} /> Presidents
          </button>
        </div>

        {/* Column 5: Photo & Developer Credit */}
        <div className="flex flex-col items-center lg:items-end gap-3">
          <img
            src="src/images/Logo/DP.jpg"
            alt="Developer"
            className="w-20 h-20 rounded-full border-2 border-white shadow-md"
          />
          <p className="text-[15px] text-gray-300 text-center lg:text-right italic leading-tight">
            Designed & Developed by{" "}
            <NavLink to="/portfolio" className="text-yellow-300 font-semibold hover:underline">
              Hamim Reja
            </NavLink><br />Alumni of Madhaipur A.R. High School
          </p>

        </div>
      </div>

      {/* Google Map */}
      <iframe
        className="w-full h-56 md:h-64 border-none shadow-md"
        loading="lazy"
        title="school-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.947866683464!2d88.1899048934904!3d25.01388528464579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb02403b0665f7%3A0xc58c8e9469c4461b!2sMADHAIPUR%20A.%20R.%20HIGH%20SCHOOL(H.S)!5e0!3m2!1sen!2sin!4v1750220950127!5m2!1sen!2sin"
      ></iframe>

      {/* Bottom Bar */}
      <div className="bg-indigo-950 text-indigo-300 text-center py-3 text-xs border-t border-indigo-700">
        © {new Date().getFullYear()} MADHAIPUR A.R. HIGH SCHOOL (H.S.). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
