import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Dan&apos;s Computer <br />Repair Shop</h1>
          <address>
            777 Friendship Lane<br />
            Tashkent City, TSH 10001
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href='tel:7777777777' className='hover:underline'>
            777-777-7777
          </Link>
        </div>
      </main>
    </div>
  );
}
