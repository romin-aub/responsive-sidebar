import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

export const DashboardLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='h-full lg:w-3/12 xl:w-3/12 2xl:w-2/12 w-0 p-0 overflow-hidden shadow-md lg:p-2 bg-white'>
        <Sidebar />
      </div>
      <div className='h-full lg:w-10/12 w-full'>
        <div className='h-14 w-full shadow-md bg-white'>
          <Header />
        </div>
        <main className='p-5'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
