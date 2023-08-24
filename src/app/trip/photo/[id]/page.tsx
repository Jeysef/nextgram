"use client"
import { useContext } from 'react'
import Frame from '../../../../components/frame/Frame'
import Modal from '../../../../components/modal/Modal2'
import swagPhotos, { Photo, getPhotoTripId } from '../../../../photos'
import { Context } from '../../layout'

interface IProps {
  params: {
    id: string
  }
}

export default function PhotoPage(props: IProps) {
    const { params: { id } } = props
    const tripId = useContext(Context).tripId
    const photo: Photo = swagPhotos.find((p) => p.id === id)!


  return (
    <Modal url={`/trip?tripId=${tripId}`} >
      <Frame photo={photo} />
    </Modal>
  )
}
