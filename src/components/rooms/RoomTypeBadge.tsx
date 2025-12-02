// src/components/rooms/RoomTypeBadge.tsx
import React from 'react'
import { RoomType } from '../../models/Room'

const ROOM_TYPE_SHORT: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TPE',
    TP_NUMERIQUE: 'TPN',
    PROJET: 'PRJ',
    AUTRE: 'AUT',
}

interface RoomTypeBadgeProps {
    type: RoomType
}

export default function RoomTypeBadge({ type }: RoomTypeBadgeProps) {
    return (
        <span className={`room-type-badge room-type-badge-${type.toLowerCase()}`}>
            {ROOM_TYPE_SHORT[type]}
        </span>
    )
}
