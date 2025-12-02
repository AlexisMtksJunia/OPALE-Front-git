// src/components/rooms/RoomDetailCard.tsx
import React, { useState } from 'react'
import { Room, RoomType } from '../../models/Room'
import { ROOM_TYPES } from '../../mocks/rooms.mock'

interface RoomDetailCardProps {
    room: Room
    onClose: () => void
    onChange: (room: Room) => void
}

const ROOM_TYPE_LABELS: Record<RoomType, string> = {
    TD: 'TD',
    TP_ELECTRONIQUE: 'TP électronique',
    TP_NUMERIQUE: 'TP numérique',
    PROJET: 'Projet',
    AUTRE: 'Autre',
}

const floorLabel = (floor: number): string => {
    switch (floor) {
        case 0:
            return 'Rez-de-chaussée'
        case 1:
            return '1er étage'
        case 2:
            return '2e étage'
        default:
            return `Étage ${floor}`
    }
}

export default function RoomDetailCard({ room, onClose, onChange }: RoomDetailCardProps) {
    const [types, setTypes] = useState<RoomType[]>(room.types)
    const [description, setDescription] = useState(room.description ?? '')

    const toggleType = (type: RoomType) => {
        setTypes((prev) => {
            const exists = prev.includes(type)
            const next = exists ? prev.filter((t) => t !== type) : [...prev, type]
            const updated: Room = { ...room, types: next, description }
            console.log('[ROOMS] Toggle type', { roomId: room.id, type, next })
            onChange(updated)
            return next
        })
    }

    const handleDescriptionBlur = () => {
        if (description !== room.description) {
            const updated: Room = { ...room, types, description }
            console.log('[ROOMS] Update description', updated)
            onChange(updated)
        }
    }

    return (
        <div className="room-detail-overlay" role="dialog" aria-modal="true">
            <div className="room-detail-card">
                <button
                    type="button"
                    className="room-detail-close"
                    onClick={onClose}
                    aria-label="Fermer la fiche salle"
                >
                    ✕
                </button>

                <header className="room-detail-header">
                    <h2 className="room-detail-title">
                        {room.fullName || room.name}
                    </h2>
                    <p className="room-detail-sub">
                        {room.name} · {floorLabel(room.floor)}
                    </p>
                </header>

                <section className="room-detail-section">
                    <h3 className="room-detail-section-title">Types disponibles</h3>
                    <div className="room-detail-types">
                        {ROOM_TYPES.map((type) => {
                            const checked = types.includes(type)
                            return (
                                <button
                                    key={type}
                                    type="button"
                                    className={
                                        'room-type-chip' +
                                        (checked ? ' room-type-chip-selected' : '')
                                    }
                                    onClick={() => toggleType(type)}
                                >
                                    <span className="room-type-chip-label">
                                        {ROOM_TYPE_LABELS[type]}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </section>

                <section className="room-detail-section">
                    <h3 className="room-detail-section-title">Description / commentaires</h3>
                    <textarea
                        className="room-detail-textarea"
                        placeholder="Notes sur la salle, équipements, contraintes d’utilisation…"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={handleDescriptionBlur}
                        rows={4}
                    />
                </section>
            </div>
        </div>
    )
}
