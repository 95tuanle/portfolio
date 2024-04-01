import { Suspense } from 'react';
import { Loading } from '@/components/loading';
import { Body } from '@/components/body';

const Page = () => (
  <Suspense fallback={<Loading />}>
    <Body />
  </Suspense>
);

export default Page;
