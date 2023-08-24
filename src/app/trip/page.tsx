"use client"
import Link from 'next/link'
import swagPhotos from '../../photos'
import Image from 'next/image'
import { useContext } from 'react'
import { Context } from './layout'

export default function Home() {
  const photos = swagPhotos
  const tripId = useContext(Context).tripId

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">Trip ID: {tripId}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={`trip/photo/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
