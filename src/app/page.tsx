import Image from 'next/image'
import Navigation from "@/components/Navigation/Navigation"
import logo from '../assets/header-logo.png'
import {PageLayout} from "@/app/PageLayout";
import {LayoutWrapper} from "@/components/LayoutWrapper/LayoutWrapper";
import {PageTitle} from "@/components/PageTitle/PageTitle";
import {HighLightsAndGridNews} from "@/components/HighLightsAndGridNews/HighLightsAndGridNews";

export default function Home() {
  return (
    <PageLayout>
      <HighLightsAndGridNews />
    </PageLayout>
  )
}
