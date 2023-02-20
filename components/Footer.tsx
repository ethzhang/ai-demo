import Image from "next/image";
import {Popover} from "antd";

export default function Footer() {
  const weChatQRCode = (
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">
          WeChat Landing Page
      </span>
      <Image
        alt="QR code of Classnow offical account"
        src="/weChatLandingQR.png"
        width={200}
        height={200}
      />
      <span className="text-base font-bold tracking-wide text-gray-900">
          Collaboration
      </span>
      <Image
        alt="QR code of Classnow service account"
        src="/weChatCollaborationQR.jpg"
        width={200}
        height={200}
      />
    </div>
  );

  return (
    <div className="px-4 mt-16 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="sm:col-span-2">
        <a
          href="https://www.theclassnow.com"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <Image
            alt="Classnow logo"
            src="/classnow-logo.png"
            width={70}
            height={70}
          />
        </a>
        <div className="mt-4 lg:max-w-fit">
          <p className="text-sm text-gray-600">
          Empowering Educators and Businesses.<br/>Share their Knowledge and Skills with the World.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            © Copyright 2023 ClassNow Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold tracking-wide text-gray-900 h-10">
          Contacts
        </p>
        <div className="flex">
          <p className="mr-1 text-gray-600">Phone:</p>
          <a
            href="tel:+61 433-718-945"
            aria-label="Our phone"
            title="Our phone"
            className="transition-colors duration-300 text-gray-600 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            +61 433-718-945
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-600">Email:</p>
          <a
            href="mailto:info@theclassnow.com"
            aria-label="Our email"
            title="Our email"
            className="transition-colors duration-300 text-gray-600 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            info@theclassnow.com
          </a>
        </div>
        <div className="flex">
          <a
            href="https://www.theclassnow.com/"
            className="transition-colors duration-300 text-gray-600 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            www.theclassnow.com
          </a>
        </div>
        {/* <div className="flex">
          <p className="mr-1 text-gray-600">Address:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300 text-gray-600 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Level 3, 11-17 York St. Sydney 2000
          </a>
        </div> */}
      </div>
      <div>
        <p className="text-base font-bold tracking-wide text-gray-900 h-10">
          Social
        </p>
        <div className="flex items-center mt-1 space-x-3">
          <a
            href="https://twitter.com/_classnow_"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
          <a
            href="https://discord.gg/pGhp3BjQ"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/71020559"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <Popover content={weChatQRCode}>
            <svg width="16" height="16" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
              <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z"/>
              <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z"/>
            </svg>
          </Popover>
        </div>
        <p className="mt-4 text-sm text-gray-500">

        </p>
      </div>
    </div>
  </div>
  );
}
