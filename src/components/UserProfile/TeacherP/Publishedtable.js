import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './table.css';
import PlayButton from './PlayButton';



const URL = 'https://jsonplaceholder.typicode.com/users'

const Table = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setCourses(response.data)
    }


    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return courses && courses.map(({ id, name, email, phone }) => {
            return  (
                <tr key={id}>
                    <td style={{ width: '30px' }} >{id}</td>
                    <td style={{ width: '280px' }}>{name}</td>
                    <td style={{ width: '100px' }}>{email}</td>
                    <td style={{ width: '150px' }}>{phone}</td>
                    <td style={{ width: '80px' }}>
                            <strong >
                             <PlayButton/>
                            </strong>
                    </td>
                </tr>
            )
        })
    }

    return (
        
        <div class="tableFixHead">
            <table id='courses'>
                <thead >
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody >
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}


export default Table