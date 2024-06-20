import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER } from '../Action/Crud';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {
  let navigate = useNavigate();
  let record = useSelector(state => state.crud.users);

  let dispatch = useDispatch();

  return (
    <div className='container'>
      <div className="text-center">
        <Link to={'/'} className='btn btn-secondary '>Add</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone no</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              record.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td>
                      <button className='btn btn-danger me-4' onClick={(e) => dispatch(DELETE_USER(val.id))}>Delete</button>
                      <Link to={`/edit/${val.id}`}>
                        <button className='btn btn-primary' >Edit</button>

                      </Link>
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default View
