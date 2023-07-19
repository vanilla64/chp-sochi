import { PageLayout } from "@/app/PageLayout";
import { HighLightsAndGridNews } from "@/components/HighLightsAndGridNews/HighLightsAndGridNews";
import { NewsWithShowMore } from "@/components/NewsWithShowMore/NewsWithShowMore";
import { SecondaryNews } from "@/components/SecondaryNews/SecondaryNews";
import { BottomNews } from "@/components/BottomNews/BottomNews";

export default function Home() {
  return (
    <PageLayout>
      <HighLightsAndGridNews />
      <NewsWithShowMore />
      <SecondaryNews />
      <BottomNews />
    </PageLayout>
  )
}
