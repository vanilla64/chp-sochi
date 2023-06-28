import Image from 'next/image'
import Navigation from "@/components/Navigation/Navigation"
import logo from '../assets/header-logo.png'
import {PageLayout} from "@/app/PageLayout";
import {LayoutWrapper} from "@/components/LayoutWrapper/LayoutWrapper";
import {PageTitle} from "@/components/PageTitle/PageTitle";

export default function Home() {
  return (
    <PageLayout>
      <LayoutWrapper>
        <PageTitle title="Главная" />
      </LayoutWrapper>
    </PageLayout>
  )
}
