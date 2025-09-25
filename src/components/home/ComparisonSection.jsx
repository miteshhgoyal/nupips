import { Fragment } from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    "Weekly Friday Payouts",
    "News Trading",
    "Scalping",
    "Hedging",
    "No consistency rule",
    "Multiple Device /IP Allowed",
    "Bank/UPI and Crypto Payouts",
    "High Leverage (Across all the segments)",
    "Forex, Crypto, Commodities Instruments",
    "24/7 Multi Language Support",
    "MT5 Trading Platform",
  ];

  const renderTableRow = (feature, index) => (
    <Fragment key={index}>
      <tr className="transition-colors">
        <td className="px-2 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center space-x-3 sm:space-x-8">
            <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-transparent border-[1px] border-[#B1B1B1] rounded-full text-xs sm:text-sm font-medium text-white flex-shrink-0">
              {index + 1}
            </div>
            <span className="text-white text-sm sm:text-base font-[400] leading-tight">
              {feature}
            </span>
          </div>
        </td>
        <td className="px-1 py-3 sm:px-4 sm:py-4 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-4 h-4 sm:w-[1rem] sm:h-[1rem] bg-[#FF5B19] rounded-full">
              <Check className="w-2.5 h-2.5 sm:w-[0.7rem] sm:h-[0.7rem] text-black" />
            </div>
          </div>
        </td>
        <td className="px-1 py-3 sm:px-4 sm:py-4 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-4 h-4 sm:w-[1rem] sm:h-[1rem] border border-white rounded-full bg-white">
              <X className="w-2.5 h-2.5 sm:w-[0.7rem] sm:h-[0.7rem] text-black stroke-2" />
            </div>
          </div>
        </td>
      </tr>
      {index < features.length - 1 && (
        <tr>
          <td colSpan="3" className="px-0 py-0">
            <hr className="border-gray-700 border-t" />
          </td>
        </tr>
      )}
    </Fragment>
  );

  return (
    <div className="flex items-center justify-center sm:mb-48 mb-24">
      <div className="w-full flex flex-col items-center justify-center text-white mb-10">
        {/* Header */}
        <div
          className="w-full sm:w-1/2 flex flex-col justify-center items-center text-white z-20 text-left sm:py-0 mb-2 sm:mb-10"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <h2 className="text-2xl sm:text-5xl font-semibold text-center mb-5">
            We listened. We understood.
          </h2>
          <p className="text-neutral-300 sm:px-0 px-6 max-w-xl mx-auto text-sm sm:text-lg text-center">
            We delivered what others left out.
          </p>
        </div>

        {/* Desktop Tables */}
        <div
          className="hidden sm:flex items-start justify-center gap-16 w-full max-w-7xl h-full"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          {/* First Table */}
          <div className="flex-1 h-full">
            <table className="w-full h-full">
              <thead>
                <tr>
                  <th className="px-2 py-2 sm:px-6 sm:py-4 text-left"></th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-[#FF5B19] font-[600] whitespace-nowrap text-xs sm:text-base">
                      We Offer
                    </span>
                  </th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-gray-400 font-[600] whitespace-nowrap text-xs sm:text-base">
                      Others
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features
                  .slice(0, 5)
                  .map((feature, index) => renderTableRow(feature, index))}
              </tbody>
            </table>
          </div>

          {/* Second Table */}
          <div className="flex-1 h-full">
            <table className="w-full h-full">
              <thead>
                <tr>
                  <th className="px-2 py-2 sm:px-6 sm:py-4 text-left"></th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-[#FF5B19] font-[600] whitespace-nowrap text-xs sm:text-base">
                      We Offer
                    </span>
                  </th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-gray-400 font-[600] whitespace-nowrap text-xs sm:text-base">
                      Others
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features
                  .slice(5)
                  .map((feature, index) => renderTableRow(feature, index + 5))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Table */}
        <div
          className="sm:hidden w-full px-4 flex justify-center"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <div className="w-full max-w-xs">
            <table className="w-full h-full">
              <thead>
                <tr>
                  <th className="px-2 py-2 sm:px-6 sm:py-4 text-left"></th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-[#FF5B19] font-[600] whitespace-nowrap text-xs sm:text-base">
                      We Offer
                    </span>
                  </th>
                  <th className="px-1 py-2 sm:px-4 sm:py-4 text-center">
                    <span className="text-gray-400 font-[600] whitespace-nowrap text-xs sm:text-base">
                      Others
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) =>
                  renderTableRow(feature, index)
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
