import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// Dynamically import components as needed
const inter = Inter({ subsets: ["latin"] });

const LoginComponent = dynamic(() => import('../components/login.component'), { ssr: false });
const Header = dynamic(() => import('../components/header.component'));
const LayoutComponent = dynamic(() => import('../components/layout'));
const SignUpCmp = dynamic(() => import('../components/layout/signup.component'));
const MainComponent = dynamic(() => import('../components/landing.component'));

export default function Home() {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="Next.js dynamic import example" />
      </Head>

      {/* Layout structure */}
      <LayoutComponent>
        <div className='d-flex justify-content-center align-items-center pt-5'>
          <MainComponent />
        </div>
      </LayoutComponent>
    </>
  );
}
