// src/components/rooms/RoomsSection.tsx
import React, { useState } from 'react'
import { Room } from '../../models/Room'
import RoomCard from './RoomCard'

interface RoomsSectionProps {
    floor: 0 | 1 | 2
    rooms: Room[]
    onSelectRoom: (room: Room) => void
}

const FLOOR_LABELS: Record<number, string> = {
    0: 'Rez-de-chaussée',
    1: '1er étage',
    2: '2e étage',
}

export default function RoomsSection({ floor, rooms, onSelectRoom }: RoomsSectionProps) {
    const [isOpen, setIsOpen] = useState(true)

    if (!rooms || rooms.length === 0) {
        return null
    }

    const handleToggle = () => setIsOpen((prev) => !prev)

    return (
        <section className="rooms-section">
            <header
                className="rooms-section-header"
                onClick={handleToggle}
                role="button"
                aria-expanded={isOpen}
            >
                <div>
                    <h2 className="rooms-section-title">
                        {FLOOR_LABELS[floor]} · {rooms.length} salle
                        {rooms.length > 1 ? 's' : ''}
                    </h2>
                    <p className="rooms-section-sub">Codes J{floor}xx</p>
                </div>

                <button
                    type="button"
                    className="rooms-section-toggle"
                    aria-label={isOpen ? 'Réduire la section' : 'Déplier la section'}
                >
                    <span
                        className={
                            'rooms-section-chevron ' + (isOpen ? 'is-open' : '')
                        }
                        aria-hidden="true"
                    />
                </button>
            </header>

            {isOpen && (
                <div className="rooms-grid">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            onSelect={() => onSelectRoom(room)}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
