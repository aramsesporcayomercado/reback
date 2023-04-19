import React, { useState } from 'react';
import styled from 'styled-components'
import { Title } from '../components/Title'
import { DragAndDrop } from '../components/DragAndDrop'
import FloatingButton from '../components/FloatingButton'


const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Home: React.FunctionComponent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [tileIncidence, setTitleIncidence] = useState('');
    const [descriptionIncidence, setDescriptionIncidence] = useState('');

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const [isLoading, setIsLoading] = useState(false);


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        console.log(`Titulo: ${tileIncidence}, Descripción: ${descriptionIncidence}`);
        setShowPopup(false);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleIncidence(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionIncidence(event.target.value);
    };

    const isFormFilled = tileIncidence.trim() !== '' && descriptionIncidence.trim() !== '';

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} - ${time}`;
    };

    const [selectedOptionEdificio, setSelectedOptionEdificio] = useState('');

    const [selectedOptionLab, setSelectedOptionLab] = useState<string[]>([]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionEdificio(event.target.value);
        if (event.target.value !== '') {
            setSelectedOptionLab((prev) => [...prev, event.target.value]);
        }
    };

    return (
        <div>
            <Title />
            <DragAndDrop />
            {showPopup && (
                <div className="popup">
                    <div className='modal-header'>
                        <p>{getCurrentDateTime()}</p>
                    </div>
                    <h2>Incidencia</h2>
                    <form onSubmit={handleFormSubmit} className='form'>

                        <div>
                            <label htmlFor="tileIncidence">Titulo:</label>
                            <input type="text" id="tileIncidence" value={tileIncidence} placeholder='Nombre de la Incidencia' onChange={handleFirstNameChange} />
                        </div>
                        <div>
                            <label htmlFor="descriptionIncidence">Descripción:</label>
                            <input type="text" id="descriptionIncidence" placeholder='Descripción de la Incidencia' value={descriptionIncidence} onChange={handleLastNameChange} />

                        </div>

                        <div>
                            <select className="dropdown-select" value={selectedOptionLab} onChange={handleOptionChange}>
                                <option value="">Selecciona un Edificio</option>
                                <option value="opcion1">Docencia 1</option>
                                <option value="opcion2">Docencia 2</option>
                                <option value="opcion3">Docencia 3</option>
                                <option value="opcion4">Docencia 4</option>
                                <option value="opcion5">Docencia 5</option>
                            </select>
                            {selectedOptionLab.map((option) => (
                                <select key={option} className='dropdown-selectAdd'>
                                    <option value="">Selecciona un Laboratorio</option>
                                    <option value={`${option}-1`}>Laboratorio 1</option>
                                    <option value={`${option}-2`}>Laboratorio 2</option>
                                    <option value={`${option}-3`}>Laboratorio 3</option>
                                    <option value={`${option}-4`}>CC1</option>
                                    <option value={`${option}-5`}>CC2</option>
                                    <option value={`${option}-6`}>CC3</option>
                                </select>
                            ))}
                        </div>


                        <div className='buttons'>
                            <button disabled={!isFormFilled} className={!isFormFilled ? 'disabled' : ''} type="submit">Guardar</button>
                            <button className='btn-close' type="button" onClick={() => setShowPopup(false)}>Cancelar</button>
                            {isLoading && <span className="fa fa-spinner fa-spin"></span>}
                        </div>
                    </form>
                </div>
            )}
            <FloatingButton onClick={handleButtonClick} />
        </div>
    )
}

export default Home
