import {CategoryMenu, SimpleSlider, ProductSection, Incentives, Newsletters, Hero, IntroducingSection} from "@/components";

export default function Home() {
  return (
    <>
        <SimpleSlider />
        {/* <Hero />
        <IntroducingSection /> */}
        <CategoryMenu />
        <Incentives />
        <ProductSection />
        <Newsletters />
    </>
  );
}
