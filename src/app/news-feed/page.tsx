import React from 'react';
import { LayoutWrapper } from "@/components/LayoutWrapper/LayoutWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PageLayout } from "@/app/PageLayout";

function NewsFeed() {
  return (
    <PageLayout>
      <LayoutWrapper>
        <PageTitle title="Новости" />
      </LayoutWrapper>
    </PageLayout>
  )
}

export default NewsFeed
