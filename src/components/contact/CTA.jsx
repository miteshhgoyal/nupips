import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import ShimmerButton from "../ui/ShimmerButton";

const CTA = () => {
  return (
    <div className="mx-auto max-w-[2000px] w-full overflow-hidden relative">
      <div className="z-10 flex max-w-7xl py-10 sm:py-16 px-6 sm:px-6 lg:px-0 mx-auto w-full sm:flex-row flex-col-reverse gap-8 relative">
        {/* Contact Cards Section */}
        <div
          className="w-full sm:w-1/2"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <div className="p-[1px] bg-gradient-to-br from-[#B1B1B1] to-black hover:from-[#FF5B19] hover:via-[#E63535] rounded-2xl">
            <div
              className="flex flex-col items-start p-12 gap-8 sm:gap-16 rounded-2xl h-full"
              style={{
                background:
                  "radial-gradient(133.78% 146.9% at -49.25% -72.79%, #B1B1B1 0%, #000000 100%)",
                minHeight: "298px",
              }}
            >
              <div className="flex flex-row sm:flex-col gap-8 sm:gap-8 w-full h-full">
                {/* Chat Section */}
                <div className="flex flex-col sm:flex-row w-1/2 sm:w-full h-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full h-full justify-between">
                    <div className="flex h-full flex-col sm:flex-col items-start sm:items-start gap-2 sm:gap-6">
                      <div className="flex-shrink-0">
                        <svg
                          width="54"
                          height="54"
                          viewBox="0 0 54 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27 51.2549C25.4475 51.2549 23.985 50.4674 22.95 49.0949L19.575 44.5949C19.5075 44.5049 19.2375 44.3699 19.1025 44.3699H18C8.6175 44.3699 2.8125 41.8274 2.8125 29.1824V17.9324C2.8125 7.98737 8.055 2.74487 18 2.74487H36C45.945 2.74487 51.1875 7.98737 51.1875 17.9324V29.1824C51.1875 30.1049 50.4225 30.8699 49.5 30.8699C48.5775 30.8699 47.8125 30.1049 47.8125 29.1824V17.9324C47.8125 9.87737 44.055 6.11987 36 6.11987H18C9.945 6.11987 6.1875 9.87737 6.1875 17.9324V29.1824C6.1875 39.3524 9.675 40.9949 18 40.9949H19.125C20.2725 40.9949 21.6 41.6474 22.275 42.5699L25.65 47.0699C26.4375 48.1049 27.5625 48.1049 28.35 47.0699C28.9125 46.3274 29.97 46.1699 30.7125 46.7324C31.455 47.2949 31.6125 48.3524 31.05 49.0949C30.015 50.4674 28.5525 51.2549 27 51.2549Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M27 26.9324C25.74 26.9324 24.75 25.9199 24.75 24.6824C24.75 23.4449 25.7625 22.4324 27 22.4324C28.2375 22.4324 29.25 23.4449 29.25 24.6824C29.25 25.9199 28.26 26.9324 27 26.9324Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M36 26.9324C34.74 26.9324 33.75 25.9199 33.75 24.6824C33.75 23.4449 34.7625 22.4324 36 22.4324C37.2375 22.4324 38.25 23.4449 38.25 24.6824C38.25 25.9199 37.26 26.9324 36 26.9324Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M18 26.9324C16.74 26.9324 15.75 25.9199 15.75 24.6824C15.75 23.4449 16.7625 22.4324 18 22.4324C19.2375 22.4324 20.25 23.4449 20.25 24.6824C20.25 25.9199 19.26 26.9324 18 26.9324Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M40.95 49.8375C36.045 49.8375 32.0625 45.855 32.0625 40.95C32.0625 36.045 36.045 32.0625 40.95 32.0625C45.855 32.0625 49.8375 36.045 49.8375 40.95C49.8375 45.855 45.855 49.8375 40.95 49.8375ZM40.95 35.4375C37.9125 35.4375 35.4375 37.9125 35.4375 40.95C35.4375 43.9875 37.9125 46.4625 40.95 46.4625C43.9875 46.4625 46.4625 43.9875 46.4625 40.95C46.4625 37.9125 43.9875 35.4375 40.95 35.4375Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M49.4997 51.1875C49.0722 51.1875 48.6447 51.03 48.3072 50.6925L46.0572 48.4425C45.4047 47.79 45.4047 46.71 46.0572 46.0575C46.7097 45.405 47.7897 45.405 48.4422 46.0575L50.6922 48.3075C51.3447 48.96 51.3447 50.04 50.6922 50.6925C50.3547 51.03 49.9272 51.1875 49.4997 51.1875Z"
                            fill="#FF5B19"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h2 className="text-xl sm:text-3xl font-hehe mb-2">
                            Chat <span className="text-[#B1B1B1]">with us</span>
                          </h2>
                        </div>
                        <div className="flex-1 text-[#B1B1B1] text-left font-light text-sm sm:text-lg mb-4 sm:mt-4 sm:mb-2 sm:h-12 flex flex-col justify-end sm:hidden min-h-[120px]">
                          <div className="space-y-1">
                            <p>Available</p>
                            <p>Monday - Friday</p>
                            <p>9 AM- 6PM (IST)</p>
                          </div>
                        </div>
                        <ShimmerButton
                          className="group relative z-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px sm:hidden block"
                          style={{
                            "--spread": "90deg",
                            "--shimmer-color": "#FF5B19",
                            "--radius": "10px",
                            "--speed": "3s",
                            "--cut": "0.1em",
                            "--bg":
                              "linear-gradient(to right, #FF5B19, #B12424)",
                          }}
                        >
                          Chat Now
                        </ShimmerButton>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-start justify-start sm:ml-auto">
                      <div className="sm:w-52 text-[#B1B1B1] text-left font-light text-lg mb-2 sm:h-12 flex flex-col justify-center">
                        <p>24/7 Support</p>
                      </div>
                      <ShimmerButton
                        className="group relative z-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px hidden sm:block"
                        style={{
                          "--spread": "90deg",
                          "--shimmer-color": "#FF5B19",
                          "--radius": "10px",
                          "--speed": "3s",
                          "--cut": "0.1em",
                          "--bg": "linear-gradient(to right, #FF5B19, #B12424)",
                        }}
                      >
                        Chat Now
                      </ShimmerButton>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex flex-col sm:flex-row w-1/2 sm:w-full h-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full h-full justify-between">
                    <div className="flex flex-col sm:flex-col items-start sm:items-start gap-2 sm:gap-6">
                      <div className="flex-shrink-0">
                        <svg
                          width="54"
                          height="54"
                          viewBox="0 0 54 54"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M38.25 47.8125H15.75C14.8275 47.8125 14.0625 47.0475 14.0625 46.125C14.0625 45.2025 14.8275 44.4375 15.75 44.4375H38.25C44.685 44.4375 47.8125 41.31 47.8125 34.875V19.125C47.8125 12.69 44.685 9.5625 38.25 9.5625H15.75C9.315 9.5625 6.1875 12.69 6.1875 19.125C6.1875 20.0475 5.4225 20.8125 4.5 20.8125C3.5775 20.8125 2.8125 20.0475 2.8125 19.125C2.8125 10.9125 7.5375 6.1875 15.75 6.1875H38.25C46.4625 6.1875 51.1875 10.9125 51.1875 19.125V34.875C51.1875 43.0875 46.4625 47.8125 38.25 47.8125Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M26.9995 28.9574C25.1095 28.9574 23.197 28.3724 21.7345 27.1799L14.692 21.5549C13.972 20.9699 13.837 19.9124 14.422 19.1924C15.007 18.4724 16.0645 18.3374 16.7845 18.9224L23.827 24.5474C25.537 25.9199 28.4395 25.9199 30.1495 24.5474L37.192 18.9224C37.912 18.3374 38.992 18.4499 39.5545 19.1924C40.1395 19.9124 40.027 20.9924 39.2845 21.5549L32.242 27.1799C30.802 28.3724 28.8895 28.9574 26.9995 28.9574Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M18 38.8125H4.5C3.5775 38.8125 2.8125 38.0475 2.8125 37.125C2.8125 36.2025 3.5775 35.4375 4.5 35.4375H18C18.9225 35.4375 19.6875 36.2025 19.6875 37.125C19.6875 38.0475 18.9225 38.8125 18 38.8125Z"
                            fill="#FF5B19"
                          />
                          <path
                            d="M11.25 29.8125H4.5C3.5775 29.8125 2.8125 29.0475 2.8125 28.125C2.8125 27.2025 3.5775 26.4375 4.5 26.4375H11.25C12.1725 26.4375 12.9375 27.2025 12.9375 28.125C12.9375 29.0475 12.1725 29.8125 11.25 29.8125Z"
                            fill="#FF5B19"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <h2 className="text-xl sm:text-3xl font-hehe mb-2">
                            Email <span className="text-[#B1B1B1]">us</span>
                          </h2>
                        </div>
                        <div className="flex-1 w-full text-[#B1B1B1] text-left font-light text-sm sm:text-lg mb-4 sm:mt-4 sm:mb-2 sm:h-12 flex flex-col justify-end sm:hidden min-h-[120px]">
                          <div className="space-y-1">
                            <p>
                              support@
                              <br />
                              nupips.com
                            </p>
                          </div>
                        </div>
                        <a
                          href="mailto:support@nupips.com?body=I was browsing your website and "
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#FF5B19] block sm:hidden bg-[#FF5B19] hover:bg-black hover:border hover:border-[#FF5B19] text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-xl font-hehe transition-colors"
                        >
                          <ShimmerButton
                            className="group relative z-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px sm:hidden block"
                            style={{
                              "--spread": "90deg",
                              "--shimmer-color": "#FF5B19",
                              "--radius": "10px",
                              "--speed": "3s",
                              "--cut": "0.1em",
                              "--bg":
                                "linear-gradient(to right, #FF5B19, #B12424)",
                            }}
                          >
                            Email Now
                          </ShimmerButton>
                        </a>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-start justify-start sm:ml-auto">
                      <div className="sm:w-52 text-[#B1B1B1] text-left font-light text-lg mb-2 sm:h-12 flex flex-col justify-center">
                        <p>support@nupips.com</p>
                      </div>
                      <a
                        href="mailto:support@nupips.com?body=I was browsing your website and "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ShimmerButton
                          className="group relative z-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px hidden sm:block"
                          style={{
                            "--spread": "90deg",
                            "--shimmer-color": "#FF5B19",
                            "--radius": "10px",
                            "--speed": "3s",
                            "--cut": "0.1em",
                            "--bg":
                              "linear-gradient(to right, #FF5B19, #B12424)",
                          }}
                        >
                          Email Now
                        </ShimmerButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div
          className="w-full sm:pl-10 sm:py-8 sm:w-1/2"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          <h2 className="text-3xl font-semibold mb-20 sm:mb-24">
            Connect
            <br /> <span className="text-[#B1B1B1]">with us</span>
          </h2>
          <p className="text-[#B1B1B1] text-sm sm:text-lg my-4">
            Follow us on social media to stay <br className="hidden sm:block" />{" "}
            updated <br className="sm:hidden" /> with the latest news,{" "}
            <br className="hidden sm:block" />
            events, and <br className="sm:hidden" /> developments.
          </p>
          <div>
            <div className="flex pb-6 space-x-3">
              {/* Twitter/X */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--theme-color": "#000000" }}
                className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.963 0.631836H15.3641L10.1187 6.87453L16.2895 15.3687H11.4575L7.67373 10.2165L3.34354 15.3687H0.940052L6.55106 8.69207L0.631592 0.631836H5.58575L9.007 5.34108L12.963 0.631836ZM12.1206 13.8721H13.4515L4.86235 2.04985H3.43435L12.1206 13.8721Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  "--theme-color":
                    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
                className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <Instagram size={16} />
              </a>

              {/* Facebook */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--theme-color": "#1877F2" }}
                className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <Facebook size={16} />
              </a>

              {/* YouTube */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--theme-color": "#FF0000" }}
                className="w-9 h-9 bg-[#2A2A2A] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
