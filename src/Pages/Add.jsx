import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_user } from '../Action/Crud'
import { Link, useNavigate } from 'react-router-dom'
const Add = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Date.now(),
      name,
      phone,
    }
    dispatch(ADD_user(obj));
    setName("")
    setPhone("")

    setTimeout(() => {
      navigate('/view')
    }, 1000)
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-5">
            {/* <Link to="/" className="btn btn-primary">Back</Link> */}
          </div>
          <div className="col-6 my-5">
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(n) => setName(n.target.value)} value={name || ""} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(p) => setPhone(p.target.value)} value={phone || ""} />
              </div>
              <input type="submit" className='btn btn-primary' name="" id="" />
              <Link to={'/view'}>View</Link>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Add
