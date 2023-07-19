'use client'

import { useRouter, useParams } from "next/navigation";
import { PageLayout } from "@/app/PageLayout";
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function NewsFull() {
  const router = useRouter()
  const params = useParams()

  return (
    <PageLayout>
      <section className="w-full bg-[#2D2D2D]">
        <LayoutWrapper>
          <PageTitle title={'NewsFull ' + params.id} />
        </LayoutWrapper>
      </section>
    </PageLayout>
  )
}
