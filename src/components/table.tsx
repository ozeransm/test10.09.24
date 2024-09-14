import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { AppDispatch } from '../redux/store';
import userData from '../redux/actions';
import { useDebounce } from 'use-debounce';
import ErrorTable from './errorTable';
// interface DataState {
//     data: { name: string; email: string, login: string, phone: string }[];
// }
function Table(){
    
    // const [state, setState] = useState<DataState>({data: []});
    const dispatch = useDispatch<AppDispatch>();
    const { data, error } = useSelector((state: RootState) => state.users);
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        email: '',
        phone: ''
    });
    const [debouncedValue] = useDebounce(formData, 300);
    useEffect(()=>{
        
        dispatch(userData(debouncedValue));        
      }, [dispatch, debouncedValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return(
        <div className='main-div'>
        <table className='main-table'>
            <thead className='main-table-head'>
            
            <tr className='main-row'>
                <th className='main-column'>Name: <form><input 
                                                        type="text" name="name" 
                                                        value={formData.name} 
                                                        onChange={handleChange} />
                                                  </form></th>
                <th className='main-column'>Login: <form><input 
                                                        type="text" name="login" 
                                                        value={formData.login} 
                                                        onChange={handleChange} />
                                                  </form></th>
                <th className='main-column'>Email: <form><input 
                                                        type="text" name="email" 
                                                        value={formData.email} 
                                                        onChange={handleChange} />
                                                  </form></th>
                <th className='main-column'>Phone: <form><input 
                                                        type="text" name="phone" 
                                                        value={formData.phone} 
                                                        onChange={handleChange} />
                                                  </form></th>
            </tr>
            
            </thead>
            {!!error ||<tbody>
            {data.map((item, index) => (
                <tr key={index} className='main-row'>
                    <th className='main-column'>{item.name}</th>
                    <th className='main-column'>{item.login}</th>
                    <th className='main-column'>{item.email}</th>
                    <th className='main-column'>{item.phone}</th>
                </tr>
            ))}
                
            </tbody>}
        </table>
        {!error || <ErrorTable/>}
        </div>
    )
}

export default Table;