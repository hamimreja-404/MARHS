// AdmissionPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const admissionNotices = [
  {
    title: "Admission Open for Class V - 2025",
    date: "June 20, 2025",
    fileUrl: "/downloads/admission-class5-2025.pdf",
  },
  {
    title: "Admission Guidelines for Higher Secondary",
    date: "June 10, 2025",
    fileUrl: "/downloads/admission-guidelines-hs.pdf",
  },
];

const AdmissionPage = () => {
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileUrl.split("/").pop());
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const location = useLocation();

useEffect(() => {
  const hash = sessionStorage.getItem("scrollToId");
  if (hash) {
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        sessionStorage.removeItem("scrollToId");
      }, 100); // slight delay ensures DOM is ready
    }
  }
}, [location.pathname]); // runs on route change


  return (
    <div className="w-full px-4 py-10 md:px-12 lg:px-28 font-poppins space-y-16 bg-gray-50">
      {/* Admission Notice */}
      <motion.section
        id="notice"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-6">
          📢 Admission Notices
        </h3>
        <div className="space-y-4">
          {admissionNotices.map((notice, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-indigo-50 p-5 rounded-lg border border-indigo-200 hover:shadow-md transition"
            >
              <div>
                <p className="text-base text-indigo-900 font-semibold">
                  {notice.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">📅 {notice.date}</p>
              </div>
              <button
                onClick={() => handleDownload(notice.fileUrl)}
                className="text-indigo-700 hover:text-indigo-900 transition"
                title="Download Notice"
              >
                <Download size={22} />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Admission Procedure */}
      <motion.section
        id="procedure"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-6">
          📋 Admission Procedure
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-800 text-base">
          <li>Visit the school office or website to collect the admission form.</li>
          <li>Fill out the form carefully with accurate personal and academic information.</li>
          <li>Attach photocopies of required documents such as Birth Certificate, Aadhaar Card, last year’s marksheet, and transfer certificate (if applicable).</li>
          <li>Submit the completed application at the school office before the deadline.</li>
          <li>Shortlisted students may need to appear for an interaction/test depending on the class.</li>
          <li>Selected students will receive a confirmation notice via SMS or school notice board.</li>
          <li>Complete admission by paying the fee at the school accounts office.</li>
        </ol>
      </motion.section>

      {/* Rules & Regulations */}
      <motion.section
        id="instructions"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-6">
          📘 General Instructions
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
          <li>Admissions are based on merit and availability of seats.</li>
          <li>Ensure all documents submitted are valid and updated.</li>
          <li>Admission is provisional until document verification is complete.</li>
          <li>Keep a copy of the application form and fee receipt for reference.</li>
        </ul>
      </motion.section>

      {/* Fee Structure */}
      <motion.section
        id="fee"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold text-indigo-900 mb-6">
          💰 Admission Fee Structure
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-indigo-200">
            <thead className="bg-indigo-100 text-indigo-900">
              <tr>
                <th className="p-3 border border-indigo-200">Class</th>
                <th className="p-3 border border-indigo-200">Admission Fee</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr>
                <td className="p-3 border border-indigo-100">Class V</td>
                <td className="p-3 border border-indigo-100">₹1,000</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class VI</td>
                <td className="p-3 border border-indigo-100">₹1,050</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class VII</td>
                <td className="p-3 border border-indigo-100">₹1,100</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class VIII</td>
                <td className="p-3 border border-indigo-100">₹1,150</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class IX</td>
                <td className="p-3 border border-indigo-100">₹1,200</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class X</td>
                <td className="p-3 border border-indigo-100">₹1,250</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class XI</td>
                <td className="p-3 border border-indigo-100">₹1,500</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100">Class XII</td>
                <td className="p-3 border border-indigo-100">₹1,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  );
};

export default AdmissionPage;
