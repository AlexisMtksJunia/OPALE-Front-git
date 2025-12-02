// src/components/rooms/RoomCard.tsx
import React from 'react'
import { Room, RoomType } from '../../models/Room'

// Import des icônes par type
import icTD from '../../../assets/ic-room-td.png'
import icTPE from '../../../assets/ic-room-tp-electronique.png'
import icTPN from '../../../assets/ic-room-tp-numerique.png'
import icProjet from '../../../assets/ic-room-projet.png'
import icAutre from '../../../assets/ic-room-autre.png'

interface RoomCardProps {
    room: Room
    onSelect: () => void
}

const ICONS_BY_TYPE: Record<RoomType, string> = {
    TD: icTD,
    TP_ELECTRONIQUE: icTPE,
    TP_NUMERIQUE: icTPN,
    PROJET: icProjet,
    AUTRE: icAutre,
}

const ROOM_TYPE_LABELS: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TP électronique',
    TP_NUMERIQUE: 'TP numérique',
    PROJET: 'Projet',
    AUTRE: 'Autre',
}

export default function RoomCard({ room, onSelect }: RoomCardProps) {
    const fullName = room.fullName || room.name
    const typeLabel = ROOM_TYPE_LABELS[room.mainType]
    const icon = ICONS_BY_TYPE[room.mainType]

    const handleClick = () => {
        console.log('[ROOMS] Click room card', room)
        onSelect()
    }

    return (
        <article className="room-card" onClick={handleClick}>
            <div className="room-card-icon">
                <img src={icon} alt={typeLabel} className="room-card-base-icon" />
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
