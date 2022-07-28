import axios from 'axios'
import { useEffect, useState } from 'react'
import './list.css'

const List = () => {

    const [retailers, setRetailers] = useState([])

    const getListInfo = () => {
        axios.get("https://www.savemybills.com.au/api/getRetailer")
            .then(res => {
                // console.log(res.data.data.retailers)
                setRetailers(res.data.data.retailers)
            })
    }
    
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