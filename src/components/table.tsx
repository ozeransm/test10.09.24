import React, { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/actions';
interface DataState {
    data: { name: string; email: string, login: string, phone: string }[];
}
function Table(){
    const [state, setState] = useState<DataState>({data: []});
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    useEffect(()=>{
        const initialData = [
            { name: 'Serhii', email: 'ozyoz@mail.com', login: 'Serhii', phone: '745896214' },
            { name: 'Serhii', email: 'ozyoz@mail.com', login: 'Serhii', phone: '745896214' },
            { name: 'Serhii', email: 'ozyoz@mail.com', login: 'Serhii', phone: '745896214' },
            { name: 'Serhii', email: 'ozyoz@mail.com', login: 'Serhii', phone: '745896214' } 
        ];
        setState({data: initialData});
        // console.log("sdkjfhsdkjhfksdfhk", fetchData()); 
        (async () => {
            // const data = fetchData();
             
            // setState( {counters: data} );
        })();
        
      }, []);

    return(
        <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Login</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th>kjbcvhggch</th>
                </tr>
            </tbody>
        </table>
        <h1>Лічильник: </h1>
        <ul>
            {state.data.map((item, index) => (
                <li key={index}>{item.name}, {item.login}, {item.phone}, {item.email}</li>
            ))}
        </ul>
        </div>
    )
}

export default Table;