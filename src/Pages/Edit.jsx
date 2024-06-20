import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDIT_USER, UPDATE_USER } from '../Action/Crud'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Edit = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  let single = useSelector(state => state.crud.single)
  // console.log(single);
  let editId = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();


  useEffect(() => {
    setName(single?.name || "")
    setPhone(single?.phone || "")
  }, [single])


  useEffect(() => {
    if (editId) {
      dispatch(EDIT_USER(editId));
    }
  }, [editId])


  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: single?.id,
      name,
      phone,
    }
    dispatch(UPDATE_USER(obj));
    setName("")
    setPhone("")

    setTimeout(() => {
      navigate('/view');
    }, 1000)
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end mt-5">
          </div>
          <div className="col-6 my-5">
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(n) => setName(n.target.value)} value={name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(p) => setPhone(p.target.value)} value={phone} />
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

export default Edit
