import { Data } from "../interfaces"
import { useState } from "react"    

interface Props {
    data: Data,
    handleDragging: (dragging: boolean) => void
}

export const CardItem = ({ data, handleDragging }: Props) => {

    const [isConfirming, setIsConfirming] = useState(false);


    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    return (
        <div
        className='card-container'
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            >
            <p>{data.content}</p>
            <p>{data.build}</p>
            <p>{data.lab}</p>

            
        </div>
    )
}