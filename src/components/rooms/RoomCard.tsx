// src/components/rooms/RoomCard.tsx
import React from 'react'
import { Room, RoomType } from '../../models/Room'
import icSalles from '../../assets/ic-salles.png'

interface RoomCardProps {
    room: Room
    onSelect: () => void
}

const ROOM_TYPE_LABELS: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TP électronique',
    TP_NUMERIQUE: 'TP numérique',
    PROJET: 'Projet',
    AUTRE: 'Autre',
}

const ROOM_TYPE_SHORT: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TPE',
    TP_NUMERIQUE: 'TPN',
    PROJET: 'PRJ',
    AUTRE: 'AUT',
}

export default function RoomCard({ room, onSelect }: RoomCardProps) {
    const fullName = room.fullName || room.name
    const typeLabel = ROOM_TYPE_LABELS[room.mainType]

    const handleClick = () => {
        console.log('[ROOMS] Click room card', room)
        onSelect()
    }

    return (
        <article className="room-card" onClick={handleClick}>
            <div className="room-card-icon">
                <img src={icSalles} alt="" className="room-card-base-icon" />
                <span
                    className={`room-card-type-pill room-card-type-pill-${room.mainType.toLowerCase()}`}
                >
                    {ROOM_TYPE_SHORT[room.mainType]}
                </span>
            </div>

            <div className="room-card-content">
                <div className="room-card-name">{fullName}</div>
                <div className="room-card-meta">
                    <span className="room-card-code">{room.name}</span>
                    <span className="room-card-separator">•</span>
                    <span className="room-card-main-type">{typeLabel}</span>
                </div>
            </div>
        </article>
    )
}
