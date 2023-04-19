import { data } from "../assets"
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { Status } from "../interfaces"
import { ContainerCards } from "./ContainerCards"

const typesTask: Status[] = ['pendientes', 'activas', 'finalizadas']


export const DragAndDrop = () => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)
    
    return (
        <div className="grid">
            {
                typesTask.map(container => (
                    <ContainerCards
                        items={data}
                        status={container}
                        key={container}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}