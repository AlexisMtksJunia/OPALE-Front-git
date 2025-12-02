import React from 'react'
import { RoomType } from '../../models/Room'

import icTd from '../../assets/ic-room-td.png'
import icTpe from '../../assets/ic-room-tp-electronique.png'
import icTpn from '../../assets/ic-room-tp-numerique.png'
import icProjet from '../../assets/ic-room-projet.png'
import icAutre from '../../assets/ic-room-autre.png'

interface RoomTypeBadgeProps {
    type: RoomType
    className?: string
}

export default function RoomTypeBadge({ type, className }: RoomTypeBadgeProps) {
    let label = ''
    let iconSrc: string

    switch (type) {
        case 'TD':
            label = 'TD'
            iconSrc = icTd
            break
        case 'TP_ELECTRONIQUE':
            label = 'TP électronique'
            iconSrc = icTpe
            break
        case 'TP_NUMERIQUE':
            label = 'TP numérique'
            iconSrc = icTpn
            break
        case 'PROJET':
            label = 'Projet'
            iconSrc = icProjet
            break
        case 'AUTRE':
        default:
            label = 'Autre'
            iconSrc = icAutre
            break
    }

    const typeClass = type.toLowerCase() // td / tp_electronique / ...

    return (
        <div className={`room-type-badge room-type-${typeClass} ${className ?? ''}`}>
            <div className="room-type-icon" aria-hidden="true">
                <img src={iconSrc} alt="" />
            </div>
            <span className="room-type-label">{label}</span>
        </div>
    )
}
