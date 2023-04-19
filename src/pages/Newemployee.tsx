import React, { useState } from 'react'
import styled from 'styled-components'

const Newemployee = styled.div`
    display: flex;
    color: #042B61;
    font-size: 3.5rem;
    font-weight: 1;
    text-align: left;
    padding: 2rem 0;
    padding-left: 2%;
    height: 20vh;
`

const Employee: React.FunctionComponent = () => {
    const [nameEmployee, setNameEmployee] = useState('');
    const [lastNameEmployee, setlastNameEmployee] = useState('');
    const [emailEmployee, setEmailEmployee] = useState('');
    const [numberEmployee, setNumberEmployee] = useState('');
    const [selectedOptionType, setselectedOptionType] = useState('');
    const [selectOptionArea, setSelectOptionArea] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Nombre(s): ${nameEmployee}, Apellido(s): ${lastNameEmployee}, Correo: ${emailEmployee}, Numero: ${numberEmployee}, Type: ${selectedOptionType}, Area: ${selectOptionArea}`);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameEmployee(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlastNameEmployee(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmailEmployee(event.target.value);
    }

    const handleNumberEmployee = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setNumberEmployee(event.target.value);
    }

    const handleOptionChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        setselectedOptionType(event.target.value);
    }

    const handleOptionChangeArea = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectOptionArea(event.target.value);
    }

    const isFormFilled = nameEmployee.trim() !== '' && lastNameEmployee.trim() !== '';

    const handleButtonClick = () => {
        setShowPopup(true);
    };


    return (
        <div>
            <div>
                <Newemployee>Nuevo Empleado</Newemployee>
            </div>
            <div>
                <form onSubmit={handleFormSubmit} className='form'>

                    <div>
                        <label className='formnewemployee' htmlFor="nameEmployee">Nombre(s):</label>
                        <input type="text" id="nameEmployee" value={nameEmployee} placeholder='Nombre(s) del Empleado' onChange={handleFirstNameChange} />
                    </div>
                    <div>
                        <label htmlFor="lastNameEmployee">Apellido(s):</label>
                        <input type="text" id="lastNameEmployee" placeholder='Apellido(s) del Empleado' value={lastNameEmployee} onChange={handleLastNameChange} />
                    </div>
                    <div>
                        <label htmlFor='emailEmployee'>Correo Electronico</label>
                        <input type="text" id='emailEmployee' placeholder='Correo Institucional del Empleado' value={emailEmployee} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label htmlFor="numberEmployee">Número Telefonico</label>
                        <input type="text" id='numberEmployee' placeholder='Número telefonico del Empleado' value={numberEmployee} onChange={handleNumberEmployee}/>
                    </div>
                    <div>
                        <select className='dropdown-select' value={selectedOptionType} onChange={handleOptionChange}>
                        <option value="">Tipo de empleado</option>
                                <option value="docente">Docente</option>
                                <option value="soportetec">Soporte Tecnico</option>
                                <option value="admin">Administrador</option>
                        </select>
                    </div>
                    <div>
                        <select className='dropdown-select' value={selectOptionArea} onChange={handleOptionChangeArea}>
                            <option value="">Academia</option>
                            <option value="DATID">DATID</option>
                            <option value="DAMI">DAMI</option>
                            <option value="DACEA">DACEA</option>
                        </select>
                    </div>

                    <div className='buttons'>
                        <button disabled={!isFormFilled} className={!isFormFilled ? 'disabled' : ''} type="submit">Guardar</button>
                        <button className='btn-close' type="button" onClick={() => setShowPopup(false)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Employee