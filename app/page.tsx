import { GetStarted, Hero, World } from "@/sections";
import { Footer, Navbar } from "@/components";

import { Suspense, lazy } from "react";
import Loading from "@/components/Loading";
const About = lazy(() => import("@/sections/About"));
const Explore = lazy(() => import("@/sections/Explore"));
const WhatsNew = lazy(() => import("@/sections/WhatsNew"));
const Insights = lazy(() => import("@/sections/Insights"));
const Feedback = lazy(() => import("@/sections/Feedback"));
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
