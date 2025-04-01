export const SidebarHeader: React.FC = () => {
  return (
    <div className='p-2 flex items-center justify-start gap-2 lg:gap-3'>
      <img
        src={'/icons/logo-512.png'}
        alt='logo'
        width={50}
        height={50}
        className='rounded-full lg:h-12 lg:w-12 h-10 w-10'
      />
      <span className='font-bold lg:text-2xl md:text-xl text-lg'>AWWWARDS</span>
    </div>
  );
};
