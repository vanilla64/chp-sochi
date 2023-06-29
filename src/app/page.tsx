import { PageLayout } from "@/app/PageLayout";
import { HighLightsAndGridNews } from "@/components/HighLightsAndGridNews/HighLightsAndGridNews";
import { NewsWithShowMore } from "@/components/NewsWithShowMore/NewsWithShowMore";

export default function Home() {
  return (
    <PageLayout>
      <HighLightsAndGridNews />
      <NewsWithShowMore />
    </PageLayout>
  )
}
