"use client"
import { notFound, useRouter, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import { MutableRefObject, createContext, useRef, useState } from 'react'
import { getPhotoTripId } from '../../photos'

export const Context = createContext<{
    tripId: number|null;
}>({ tripId: null})
export default function Layout(props: { children: React.ReactNode, modal: React.ReactNode }) {
    const searchParams = useSearchParams()
    const segments = useSelectedLayoutSegments()
    const router = useRouter()
    let tripIdParam = searchParams.get('tripId');
    const tripIdP = tripIdParam? parseInt(tripIdParam) ?? null : null
    const [tripId, setTripId] = useState<number|null>(tripIdP)
    if (!tripId) {
        if (!props.children) notFound()
        if (segments[0] === "photo" && parseInt(segments[1]) && segments.length === 2) {
            const photoId = segments[1]
            setTripId(getPhotoTripId(photoId))
        }
    }
    return (
        <Context.Provider value={{tripId}}>
                {props.children}
                {props.modal}
        </Context.Provider>
    )
}
