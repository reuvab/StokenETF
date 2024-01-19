import { Card, CardTitle } from '@/components/ui/card';

function formatNumberToUSD(num: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}

function formatNumber(num: number) {
  return new Intl.NumberFormat('en-US').format(num);
}

const TokenLine = ({
  icon,
  name,
  value,
  usdValue,
}: {
  icon: React.ReactNode;
  name: string;
  value: number;
  usdValue: number;
}) => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row items-center gap-2'>
        {icon}
        <p>{name}</p>
      </div>
      <div className='flex flex-col justify-center items-end '>
        <p>{formatNumber(value)}</p>
        <p className='text-slate-500 text-sm'>{formatNumberToUSD(usdValue)}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24 relative pt-20'>
      <div className='absolute bg-slate-700 h-[200px] left-0 top-0 w-full -z-10'>&nbsp;</div>
      <div className='grid grid-flow-row grid-cols-1 gap-4'>
        <div className='text-gray-400 px-4'>
          <h2>Net Worth</h2>
          <p>0.00</p>
        </div>
        <Card className='p-4 flex flex-col gap-4'>
          <CardTitle className='text-2xl text-gray-700 font-medium'>My Portfolio</CardTitle>
          <div className='grid w-96 grid-flow-row gap-3'>
            <TokenLine icon={<SETF />} name='SETF' value={12.1235} usdValue={1256} />
            <TokenLine icon={<GHO />} name='GHO' value={100000} usdValue={100000} />
          </div>
        </Card>
      </div>
    </main>
  );
}

const SETF = () => {
  return (
    <svg
      width='256'
      height='256'
      viewBox='0 0 256 256'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
    >
      <path
        d='M128 256c70.692 0 128-57.308 128-128C256 57.308 198.692 0 128 0 57.308 0 0 57.307 0 128c0 70.692 57.307 128 128 128Z'
        fill='#fff'
      />
      <path
        d='m128.181 19.416-19.923 11.456-54.292 31.38-19.924 11.456v108.584l19.924 11.456 54.79 31.38 19.924 11.456 19.924-11.456 53.794-31.38 19.924-11.456V73.708l-19.925-11.456-54.292-31.38-19.924-11.456ZM73.889 159.38V96.616l54.292-31.38 54.292 31.38v62.76l-54.292 31.38-54.292-31.376Z'
        fill='#2A5ADA'
      />
    </svg>
  );
};

const GHO = () => {
  return (
    <svg
      width='256'
      height='256'
      viewBox='0 0 256 256'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-8 w-8'
    >
      <rect width='256' height='256' rx='128' fill='url(#a)' />
      <g opacity='.8'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M199.579 190.316v-25.398l-.068-.002-17.48-40.284h-27.969l16.607 39.41h-54.148c-10.441 0-20.295-4.112-27.746-11.578-7.451-7.47-11.56-17.345-11.56-27.806 0-10.461 4.109-20.336 11.56-27.802 7.45-7.466 17.305-11.578 27.746-11.578l51.593-.057-10.925-26.274-40.668.057c-36.128 0-66.837 29.449-66.837 65.654s30.709 65.658 66.837 65.658h83.058Zm-87.449-69.187c7.241 0 13.11-5.882 13.11-13.137 0-7.255-5.869-13.137-13.11-13.137s-13.11 5.882-13.11 13.137c0 7.255 5.869 13.137 13.11 13.137Zm13.11 20.581c0 7.255-5.869 13.137-13.11 13.137s-13.11-5.882-13.11-13.137c0-7.255 5.869-13.137 13.11-13.137s13.11 5.882 13.11 13.137Z'
          fill='#fff'
        />
        <path
          d='M199.579 164.918h2.5v-2.425l-2.424-.074-.076 2.499Zm0 25.398v2.5h2.5v-2.5h-2.5Zm-.068-25.4-2.294.995.632 1.455 1.586.049.076-2.499Zm-17.48-40.284 2.294-.996-.653-1.504h-1.641v2.5Zm-27.969 0v-2.5h-3.766l1.463 3.47 2.303-.97Zm16.607 39.41v2.5h3.766l-1.462-3.471-2.304.971Zm-54.148 0v-2.5 2.5Zm-27.746-11.578-1.77 1.766 1.77-1.766Zm0-55.608 1.77 1.766-1.77-1.766Zm27.746-11.578v2.5h.002l-.002-2.5Zm51.593-.057.003 2.5 3.743-.004-1.437-3.456-2.309.96Zm-10.925-26.274 2.308-.96-.641-1.542-1.671.002.004 2.5Zm-40.668.057v2.5h.003l-.003-2.5Zm80.558 105.914v25.398h5v-25.398h-5Zm2.356 2.497.068.002.152-4.998-.068-.002-.152 4.998Zm-19.697-41.788 17.479 40.284 4.587-1.99-17.479-40.285-4.587 1.991Zm-25.676 1.505h27.969v-5h-27.969v5Zm18.911 35.939-16.607-39.41-4.607 1.941 16.606 39.411 4.608-1.942Zm-56.452 3.471h54.148v-5h-54.148v5ZM87.005 154.23c7.915 7.931 18.404 12.312 29.516 12.312v-5c-9.769 0-18.99-3.842-25.977-10.844l-3.539 3.532Zm-12.29-29.572c0 11.13 4.376 21.638 12.29 29.572l3.54-3.531c-6.989-7.007-10.83-16.249-10.83-26.041h-5Zm12.29-29.568c-7.914 7.93-12.29 18.438-12.29 29.568h5c0-9.793 3.841-19.034 10.83-26.036l-3.54-3.532Zm29.516-12.312c-11.112 0-21.601 4.381-29.516 12.312l3.54 3.532c6.987-7.002 16.207-10.844 25.976-10.844v-5Zm51.59-.057-51.593.057.005 5 51.594-.057-.006-5ZM154.88 59.907l10.926 26.274 4.617-1.92-10.926-26.273-4.617 1.92Zm-38.356 1.597 40.668-.057-.007-5-40.668.057.007 5Zm-64.34 63.154c0-34.765 29.53-63.154 64.337-63.154v-5c-37.449 0-69.337 30.509-69.337 68.154h5Zm64.337 63.158c-34.807 0-64.337-28.393-64.337-63.158h-5c0 37.645 31.888 68.158 69.337 68.158v-5Zm83.058 0h-83.058v5h83.058v-5Zm-76.839-79.824c0 5.879-4.755 10.637-10.61 10.637v5c8.626 0 15.61-7.006 15.61-15.637h-5Zm-10.61-10.637c5.855 0 10.61 4.758 10.61 10.637h5c0-8.631-6.984-15.637-15.61-15.637v5Zm-10.61 10.637c0-5.879 4.755-10.637 10.61-10.637v-5c-8.626 0-15.61 7.006-15.61 15.637h5Zm10.61 10.637c-5.855 0-10.61-4.758-10.61-10.637h-5c0 8.631 6.984 15.637 15.61 15.637v-5Zm0 38.718c8.626 0 15.61-7.006 15.61-15.637h-5c0 5.879-4.755 10.637-10.61 10.637v5ZM96.52 141.71c0 8.631 6.984 15.637 15.61 15.637v-5c-5.855 0-10.61-4.758-10.61-10.637h-5Zm15.61-15.637c-8.626 0-15.61 7.006-15.61 15.637h5c0-5.88 4.755-10.637 10.61-10.637v-5Zm15.61 15.637c0-8.631-6.984-15.637-15.61-15.637v5c5.855 0 10.61 4.757 10.61 10.637h5Z'
          fill='#000'
        />
      </g>
      <defs>
        <linearGradient id='a' x1='128' y1='0' x2='128' y2='256' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#B3B2D3' />
          <stop offset='.526' stop-color='#8C8ADA' />
          <stop offset='1' stop-color='#6D69DE' />
        </linearGradient>
      </defs>
    </svg>
  );
};
