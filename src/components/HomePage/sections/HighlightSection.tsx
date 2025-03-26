export default function HighlightSection({
  lg_screen_width,
  default_screen_width
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {
  return (
    <div className="xl:text-start lg:text-center text-center flex flex-row justify-center bg-magenta-500  w-screen">
      <div
        className={`lg:justify-between ${lg_screen_width} lg:py-0 lg:flex-row ${default_screen_width} flex flex-col py-10 text-white items-center justify-center`}
      >
        {/* Boost Your Business */}
        <div className="flex-col lg:px-0 lg:w-2/3 px-10">
          <div className="lg:w-130">
            <h1 className="font-medium text-5xl leading-15 my-12 tracking-tight text-center">
              Boost Your Business with <br />
              Unmatched Speed and <br />
              Security
            </h1>
            <p className="font-normal text-base leading-6 my-4">
              Enjoy peace of mind with 24/7 security and uninterrupted service,
              ensuring your website is always trusted and reliable. With the DoS
              protection, SSL encryption, intelligent caching you can sleep safe
              knowing your website will be fast and secure. Upgrade your web
              presence with us - where speed meets security!
            </p>
          </div>
          <img
            src="/Cloudflare_Logo.png"
            className="lg:mx-0 lg:mb-0 w-[200px] mb-10 mx-auto"
          />
        </div>
        {/* Highlight Images */}
        <div className="xl:flex xl:flex-row mlg:h-full lg:py-22 hidden">
          <div className="mr-8 self-end">
            <div className="highlight-image-custom bg-[url(/coding.jpg)]"></div>
            <div className="mt-6 highlight-image-custom bg-[url(/coding_2.jpg)]"></div>
          </div>
          <div className="self-start">
            <div className="highlight-image-custom bg-[url(/hardware.webp)]"></div>
            <div className="highlight-image-custom bg-[url(/programmer.webp)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
