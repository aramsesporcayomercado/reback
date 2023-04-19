export type Status = 'pendientes' | 'activas' | 'finalizadas'
export interface Data{
    id:number
    content: string
    build:string
    lab:string
    status: Status
}