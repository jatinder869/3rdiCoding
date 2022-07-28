import axios from 'axios'
import { useEffect, useState } from 'react'
import './list.css'

/**
 * Mounts array of retailer into table
 * @returns html table with list of retailers
 */
const List = () => {

    const [retailers, setRetailers] = useState([])

    /**
     * using axios to get data from API and using useState to set data in local variable
     */
    const getListInfo = () => {
        axios.get("https://www.savemybills.com.au/api/getRetailer")
            .then(res => {
                // console.log(res.data.data.retailers)
                setRetailers(res.data.data.retailers)
            })
    }
    
    /**
     * dependency array empty so that list renders only once
     */
    useEffect(() => {
        getListInfo()
    },[])

    // useEffect(()=>{
    //     console.log(retailers)
    // },[retailers])

    return (
        <div className='list'>
            <table className="list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>TYPE</th>
                        <th>ACTIVE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // using array map to iterate over each data item in array
                        retailers.map((each) => (
                            <tr key={each.id}>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td>{each.type}</td>
                                <td>{each.active}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List