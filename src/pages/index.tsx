import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/Dashboard'
import { generateWinningNumbers } from '@/utils';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [winningNumbers, setWinningNumbers] = useState<number[]>(generateWinningNumbers());
  const [choice, setChoice] = useState<number>(-1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {'<Header />'}
      <Dashboard winningNumbers={winningNumbers} choice={choice} />
      {'<BottomPanel choice={choice} setChoice={setChoice} />'}
    </main>
  )
}
