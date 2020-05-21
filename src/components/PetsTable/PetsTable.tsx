import React from 'react'

interface Props {

}

const PetsTable = (props: Props) => {
    return (
        <>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>male</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>5</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>female</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lucy</td>
                    <td>2</td>
                </tr>
            </tbody>
        </>
    )
}

export default PetsTable
