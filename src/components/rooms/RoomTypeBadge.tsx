import React from 'react'
import { RoomType } from '../../models/Room'

const ROOM_TYPE_SHORT: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TPE',
    TP_NUMERIQUE: 'TPN',
    PROJET: 'PRJ',
    AUTRE: 'AUT',
}

export default function RoomTypeBadge({ type }: { type: RoomType }) {
    return (
        <span className={`room-badge room-badge-${type.toLowerCase()}`}>
            {ROOM_TYPE_SHORT[type]}
        </span>
    )
}
