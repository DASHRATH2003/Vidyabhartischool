import React, { useState } from 'react';
import pdfFile from '../assets/newadd.pdf';

const Disclosure = () => {
  const [activeTab, setActiveTab] = useState('A');
  const [showPdfModal, setShowPdfModal] = useState(false);

  const tabs = [
    { id: 'A', label: 'A. GENERAL INFORMATION' },
    { id: 'B', label: 'B. DOCUMENTS AND INFORMATION' },
    { id: 'C', label: 'C. RESULT AND ACADEMICS' },
    { id: 'D', label: 'D. SCHOOL INFRASTRUCTURE' },
    { id: 'E', label: 'E. STAFF\'S DETAILS' }
  ];

  const generalInfo = [
    { slNo: 1, information: 'Name of The School', details: 'Vidya Bharati English Medium Primary School' },
    { slNo: 2, information: 'Affiliation No. (If Applicable)', details: '830589' },
    { slNo: 3, information: 'School Code (If Applicable)', details: '45582' },
    { slNo: 4, information: 'Complete Address With Pin Code', details: 'Yeramaras Camp, RCR, Yeramaras Camp Raichur Pin - 584 135 Karnataka State' },
    { slNo: 5, information: 'Principal Name & Qualification', details: 'Katyayani Hegdekatte (MA BED)' },
    { slNo: 6, information: 'School E-mail Id', details: 'vbskcbse2014@gmail.com' },
    { slNo: 7, information: 'Contact Details (Landline/Mobile)', details: '+91 8532-221980' }
  ];

  const documentsInfo = [
    { slNo: 1, information: 'Copies of Affiliation Letter', document: 'View Details' },
    { slNo: 2, information: 'Copies of Trust Deed', document: 'View Details' },
    { slNo: 3, information: 'Copy of No Objection Certificate (NOC) Issued, by The State Govt. /UT', document: 'View Details' },
    { slNo: 4, information: 'Copy of Recognition Certificate', document: 'View Details' },
    { slNo: 5, information: 'Copy of valid Building safety Certificate issued by Department of Public Works', document: 'View Details' },
    { slNo: 6, information: 'Copies of Valid Fire Safety Certificate Issued by the Competent Authority', document: 'View Details' },
    { slNo: 7, information: 'Copies of Valid Water, Health And Sanitation Certificates', document: 'View Details' },
    { slNo: 8, information: 'Copies of Land Certificates', document: 'View Details' },
    { slNo: 9, information: 'Self Declaration', document: 'View Details' }
  ];

  const resultInfo = [
    { slNo: 1, information: 'Fee Structure of The School', document: 'View Details' },
    { slNo: 2, information: 'Annual Academics Calendar', document: 'View Details' },
    { slNo: 3, information: 'List of School Management Committee (SMC)', document: 'View Details' },
    { slNo: 4, information: 'List of Parents Teachers Association (PTA) Members', document: 'View Details' },
    { slNo: 5, information: 'Last Three-Year Result of The Board Examination As Per Applicability', document: 'View Details' }
  ];

  const infrastructureInfo = [
    { slNo: 1, information: 'Total Campus Area of The School (In Square Mtr)', details: '34094 (In Square Mtr)' },
    { slNo: 2, information: 'No. Class Rooms', details: '30' },
    { slNo: 3, information: 'Size of The Class Rooms (In Square Mtr)', details: '7.92X6.71=47 (In Square Mtr)' },
    { slNo: 4, information: 'No. and Size of Laboratories Including Computer Labs (In Sq. Mtr)', details: '265.69 (In Sq. Mtr)' },
    { slNo: 5, information: 'Computer Lab - 01', details: '7.92X13.43=106.29 (In Sq. Mtr)' },
    { slNo: 6, information: 'Composite Science Lab - 01', details: '7.92X13.42=106.29 (In Sq. Mtr)' },
    { slNo: 7, information: 'Chemistry Lab - 01', details: '0' },
    { slNo: 8, information: 'Biology Lab - 01', details: '0' },
    { slNo: 9, information: 'Maths Lab - 01', details: '7.92X6.71=53.14 (In Sq. Mtr)' },
    { slNo: 10, information: 'Internet Facility (Y/N)', details: 'Yes' },
    { slNo: 11, information: 'No. of Girls Toilets', details: '24' },
    { slNo: 12, information: 'No. of Boys Toilets', details: '22' },
    { slNo: 13, information: 'Link of YouTube Video of The Inspection of School Covering The Infrastructure of The School', details: 'YES' }
  ];

  const staffInfo = [
    { slNo: 1, information: 'Principal', details: 'Katyayani Hegdekatte (MA BED)' },
    { slNo: 2, information: 'Total No. of Teachers', details: '26' },
    { slNo: 3, information: 'PGT', details: '07' },
    { slNo: 4, information: 'PRT', details: '10' },
    { slNo: 5, information: 'TGT', details: '03' },
    { slNo: 6, information: 'PTI', details: 'Mr. Pranesh (B.Ped)' },
    { slNo: 7, information: 'Librarian', details: 'Bee.Bee. Amina (B.A, B.ed, D.Lib)' },
    { slNo: 8, information: 'Teachers Section Ratio', details: '1:1.5' },
    { slNo: 9, information: 'Details of Special Educators', details: 'Mrs. Shaheen Sultana (M.A)' },
    { slNo: 10, information: 'Details of Counseling and Wellness Teacher', details: 'Mrs. Ruksana Begum (M.A., M.ed)' },
    { slNo: 11, information: 'Computer Teacher', details: 'Mrs. Shayla (BCA)' }
  ];

  const handleViewDetails = () => {
    setShowPdfModal(true);
  };

  const renderTable = (data, hasDocument = false) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">Sl. No.</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">Information</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">
              {hasDocument ? 'Uploaded Document' : 'Details'}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm">{item.slNo}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm">{item.information}</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm">
                {hasDocument ? (
                  item.document ? (
                    <button 
                      onClick={handleViewDetails}
                      className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                      {item.document}
                    </button>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )
                ) : (
                  <span className="break-words">{item.details}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderResultTable = () => (
    <div className="mt-6">
      <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-4">RESULT CLASS X</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">Sl. No.</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">Year</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">No. of Registered Students</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">No. of Students Passed</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2 text-left font-semibold text-xs md:text-sm">Pass Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm"></td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm">NOT APPLICABLE</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm"></td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm"></td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 text-xs md:text-sm"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <nav className="text-xs md:text-sm text-gray-600">
            <a href="#" className="hover:text-red-800">Home</a>
            <span className="mx-2">{'>'}</span>
            <span className="text-gray-800">Mandatory Public Disclosure</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Mandatory Public Disclosure</h1>
        </div>

        {/* Tabs */}
        <div className="mb-4 md:mb-6">
          <div className="flex flex-wrap border-b border-gray-300 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-6 py-2 md:py-3 font-semibold text-xs md:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-red-800 border-b-2 border-red-800 bg-white'
                    : 'text-gray-600 hover:text-red-800 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          {activeTab === 'A' && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-4">A. GENERAL INFORMATION</h2>
              {renderTable(generalInfo)}
            </div>
          )}

          {activeTab === 'B' && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-4">B. DOCUMENTS AND INFORMATION</h2>
              {renderTable(documentsInfo, true)}
            </div>
          )}

          {activeTab === 'C' && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-4">C. RESULT AND ACADEMICS</h2>
              {renderTable(resultInfo, true)}
              {renderResultTable()}
            </div>
          )}

          {activeTab === 'D' && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-4">D. SCHOOL INFRASTRUCTURE</h2>
              {renderTable(infrastructureInfo)}
            </div>
          )}

          {activeTab === 'E' && (
            <div>
              <h2 className="text-lg md:text-xl font-bold text-red-800 mb-4">E. STAFF'S DETAILS</h2>
              {renderTable(staffInfo)}
            </div>
          )}
        </div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Document Viewer</h3>
              <button
                onClick={() => setShowPdfModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* PDF Content */}
            <div className="flex-1 p-4">
              <iframe
                src={pdfFile}
                className="w-full h-full border border-gray-300 rounded"
                title="PDF Document"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-end p-4 border-t border-gray-200">
              <button
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Disclosure; 