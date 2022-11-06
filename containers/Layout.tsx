import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { tabsData } from "../components/NavBar/options";

interface LayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen bg-supa-gray flex flex-col">
      <Head>
        <title>Supaguide</title>
        <meta
          name="description"
          content="Supaguide, your Supabase guides anytime, anywhere."
        />
        <link rel="icon" href="/icons/supabase-logo-icon.svg" />
      </Head>
      <NavBar
        options={tabsData}
        className="z-20 mx-auto"
        highLightColor="#46CF8E"
      />
      <main className="flex-grow-0 h-full flex flex-col justify-center items-center gap-16">
        {children}
      </main>
      <footer className="text-supa-white mx-auto text-sm mb-2">
        Supaguide is not part of Supabase nor a representation of
        Supabase&apos;s brand.
      </footer>
    </div>
  );
};

export default Layout;
