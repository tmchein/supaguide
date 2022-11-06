import Image from "next/image";
import { HighlightedArea } from "../components/HighlightedButton";
import Layout from "../containers/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center relative pt-8 gap-8 w-full">
        <div className="flex gap-4 absolute top-0 z-10 animate-supa-fade-in">
          <div className="w-40 h-40 bg-supa-white rounded-full blur-supa-extreme opacity-40 " />
          <div className="w-40 h-40 bg-supa-green rounded-full blur-supa-extreme opacity-40 " />
        </div>
        <Image
          width="1417"
          height="637"
          src="/images/squared-vector.svg"
          alt="Squared grid"
          className="absolute top-0 md:-top-2/4 z-0 animate-supa-fade-in"
        />
        <Image
          width="109"
          height="113"
          src="/icons/supabase-logo-icon.svg"
          alt="Supabase icon"
          className="z-20 animate-supa-fade-in-top-bottom"
        />
        <h1 className="text-5xl font-medium text-white max-w-md text-center z-20 animate-supa-fade-in">
          Build in a weekend scale to millions
        </h1>
      </section>
      <HighlightedArea
        className="animate-supa-fade-in-bottom-top"
        title="New to Supabase?"
        subtitle="Read our guides"
      />
    </Layout>
  );
}
