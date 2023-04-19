import React  from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import TableComponent from '../components/TableEmployee'

const TeamText = styled.div`
display: flex;
    color: #042B61;
    font-size: 3.5rem;
    font-weight: 1;
    text-align: left;
    padding: 2rem 0;
    padding-left: 2%;
    height: 30vh;
    `
    interface Data {
        id: number;
        nombre: string;
        apellidos: string;
        correo: string;
        roll: string;
        academia: string;
      }

    const data: Data[] = [
        { id: 1, nombre: 'Juan', apellidos: 'Pérez', correo: 'juan@example.com', roll: 'Estudiante', academia: 'Ingeniería' },
        { id: 2, nombre: 'María', apellidos: 'González', correo: 'maria@example.com', roll: 'Profesor', academia: 'Ciencias' },
        // Agrega más objetos de ejemplo según sea necesario
      ];

const Team: React.FunctionComponent = () => {
    return (
        <div>
            <TeamText>Empleados</TeamText>
            <div>
                <TableComponent data={data}/>
            </div>
        </div>
    )
}

export default Team
