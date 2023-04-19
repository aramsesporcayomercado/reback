import { useState } from "react"
import { Data, Status } from "../interfaces"
import swal from "sweetalert"

export const useDragAndDrop = (initialState: Data[]) => {

    const [isDragging, setIsDragging] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false);
    const [listItems, setListItems] = useState<Data[]>(initialState)

    const showAlert =()=>{
        swal({
           title:"Confirmación",
           text:"¿Estas seguro de que deseas finalizar esta tarea?",
           icon:"warning",
           buttons:["No", "Si"],
           dangerMode:true
        }).then(answer=>{
            if(answer){
                swal({
                    text:"Tarea Finalizada",
                    icon:"success",
                    timer:2000
                })
            }
        })
    }

    const handleUpdateList = (id: number, status: Status) => {
        let card = listItems.find(item => item.id === id)

        if (card && card.status !== status) {
            showAlert()
            card.status = status
            if (Array.isArray(listItems)) {
                setListItems(prev => ([
                    card!,
                    ...prev.filter(item => item.id !== id)
                ]))
            }
        }

    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}