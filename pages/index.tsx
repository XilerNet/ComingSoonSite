import Head from "next/head";
import { NextSeo } from "next-seo";

const SEO = {
  title: "Xiler Network | Work in progress",
  description:
    "Xiler is a platform which offers the best services for developers! This is currently under development, you can join our discord for the latest news! ",
};

const UnderConstructionPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          url: "https://www.xiler.net",
          title: SEO.title,
          description: SEO.description,
          site_name: "Xiler Network",
          images: [
            {
              url: "http://xiler.net/favicon.ico",
            },
          ],
        }}
        twitter={{
          handle: "@XilerNetwork",
          site: "@XilerNetwork",
          cardType: "app",
        }}
      />
      <div className="grid w-full h-screen">
        <div className="grid gap-y-14 place-self-center justify-items-center max-w-80per">
          <div className="grid text-center gap-y-4 justify-items-center">
            <h1 className="text-5xl font-bold">We're working on it!</h1>
            <p className="text-xl font-normal">
              Thank you for being patient. We’ll be there soon!
            </p>
          </div>

          <div className="flex justify-between w-full sm:max-w-80per">
            <a
              className="flex items-start transition fill-current hover:text-accent-500"
              href="https://dc.xiler.net"
            >
              <svg
                width="50"
                height="58"
                viewBox="0 0 50 58"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.8286 23.9714C18.2 23.9714 16.9143 25.4 16.9143 27.1429C16.9143 28.8857 18.2286 30.3143 19.8286 30.3143C21.4572 30.3143 22.7429 28.8857 22.7429 27.1429C22.7714 25.4 21.4572 23.9714 19.8286 23.9714ZM30.2572 23.9714C28.6286 23.9714 27.3429 25.4 27.3429 27.1429C27.3429 28.8857 28.6572 30.3143 30.2572 30.3143C31.8857 30.3143 33.1714 28.8857 33.1714 27.1429C33.1714 25.4 31.8857 23.9714 30.2572 23.9714Z" />
                <path d="M44.1429 0H5.85714C2.62857 0 0 2.62857 0 5.88571V44.5143C0 47.7714 2.62857 50.4 5.85714 50.4H38.2571L36.7429 45.1143L40.4 48.5143L43.8571 51.7143L50 57.1429V5.88571C50 2.62857 47.3714 0 44.1429 0ZM33.1143 37.3143C33.1143 37.3143 32.0857 36.0857 31.2286 35C34.9714 33.9429 36.4 31.6 36.4 31.6C35.2286 32.3714 34.1143 32.9143 33.1143 33.2857C31.6857 33.8857 30.3143 34.2857 28.9714 34.5143C26.5244 34.9648 24.0149 34.9551 21.5714 34.4857C20.1369 34.205 18.7311 33.7938 17.3714 33.2571C16.6547 32.9815 15.9579 32.657 15.2857 32.2857C15.2 32.2286 15.1143 32.2 15.0286 32.1429C14.9714 32.1143 14.9429 32.0857 14.9143 32.0571C14.4 31.7714 14.1143 31.5714 14.1143 31.5714C14.1143 31.5714 15.4857 33.8571 19.1143 34.9429C18.2571 36.0286 17.2 37.3143 17.2 37.3143C10.8857 37.1143 8.48571 32.9714 8.48571 32.9714C8.48571 23.7714 12.6 16.3143 12.6 16.3143C16.7143 13.2286 20.6286 13.3143 20.6286 13.3143L20.9143 13.6571C15.7714 15.1429 13.4 17.4 13.4 17.4C13.4 17.4 14.0286 17.0571 15.0857 16.5714C18.1429 15.2286 20.5714 14.8571 21.5714 14.7714C21.7429 14.7429 21.8857 14.7143 22.0571 14.7143C27.0117 14.0437 32.0506 14.9853 36.4286 17.4C36.4286 17.4 34.1714 15.2571 29.3143 13.7714L29.7143 13.3143C29.7143 13.3143 33.6286 13.2286 37.7429 16.3143C37.7429 16.3143 41.8571 23.7714 41.8571 32.9714C41.8571 32.9714 39.4286 37.1143 33.1143 37.3143Z" />
              </svg>
            </a>
            <a
              className="flex items-start transition fill-current hover:text-accent-500"
              href="https://twitter.com/XilerNetwork"
            >
              <svg
                width="50"
                height="41"
                viewBox="0 0 50 41"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50 4.82145C48.1613 5.63622 46.186 6.18673 44.1095 6.43556C46.2521 5.15351 47.8551 3.1357 48.6193 0.758651C46.6063 1.95435 44.4031 2.79599 42.1056 3.24698C40.5606 1.59734 38.5142 0.50393 36.2841 0.136511C34.054 -0.230908 31.7649 0.14822 29.7724 1.21503C27.7798 2.28185 26.1952 3.97666 25.2646 6.03634C24.3339 8.09602 24.1093 10.4053 24.6256 12.6057C20.5467 12.4009 16.5565 11.3408 12.9138 9.49402C9.27116 7.64727 6.05752 5.05523 3.48146 1.88611C2.60063 3.40553 2.09416 5.16718 2.09416 7.04333C2.09318 8.7323 2.5091 10.3954 3.30503 11.8851C4.10095 13.3747 5.25227 14.6449 6.65683 15.5829C5.02791 15.5311 3.43494 15.091 2.01048 14.2991V14.4312C2.01032 16.8001 2.82972 19.096 4.32966 20.9295C5.82959 22.763 7.91767 24.0211 10.2396 24.4903C8.72849 24.8992 7.14423 24.9595 5.60645 24.6664C6.26155 26.7047 7.53765 28.4871 9.25607 29.764C10.9745 31.041 13.0492 31.7487 15.1898 31.7879C11.5561 34.6405 7.06837 36.1878 2.44869 36.181C1.63036 36.1812 0.812729 36.1334 0 36.0379C4.68924 39.0529 10.1478 40.653 15.7227 40.6468C34.5944 40.6468 44.911 25.0166 44.911 11.4607C44.911 11.0203 44.9 10.5754 44.8802 10.135C46.8869 8.68381 48.6191 6.88676 49.9956 4.82806L50 4.82145V4.82145Z" />
              </svg>
            </a>
            <a
              className="flex items-start transition fill-current hover:text-accent-500"
              href="https://www.facebook.com/XilerNet"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 25.1396C0 37.5687 9.02708 47.9042 20.8333 50V31.9437H14.5833V25H20.8333V19.4438C20.8333 13.1937 24.8604 9.72292 30.5562 9.72292C32.3604 9.72292 34.3062 10 36.1104 10.2771V16.6667H32.9167C29.8604 16.6667 29.1667 18.1937 29.1667 20.1396V25H35.8333L34.7229 31.9437H29.1667V50C40.9729 47.9042 50 37.5708 50 25.1396C50 11.3125 38.75 0 25 0C11.25 0 0 11.3125 0 25.1396Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
