import { Suspense } from 'react';
import { Loading } from '@/components/loading';
import { Body } from '@/components/body';

const Page = () => (
  <>
    <div className="text-black text-center bg-yellow-500 p-3 rounded">
      Work in Progress
    </div>
    <Suspense fallback={<Loading />}>
      <Body />
    </Suspense>
  </>
);

export default Page;
