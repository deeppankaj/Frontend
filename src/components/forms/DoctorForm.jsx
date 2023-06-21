import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { addDoctor } from '../../features/signup/SignUpSlice'

const DoctorForm = ({hide}) => {

  const data = {
    qualification:"",
    specialization:"",
    experience:"",
    feesPerCunsaltation:"",
    address:""
  }
  const dispatch = useDispatch()
  
  const [formdata, setFormdata] = useState(data)

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addDoctor(formdata))
    hide();
  }

  return (
    <div className="modal-body p-3 pt-4">
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Enter Qualification <span className="text-danger">*</span>
              </label>
              <input
                name="qualification"
                id="qualification"
                type="text"
                className="form-control text-uppercase"
                onChange={(e)=>setFormdata({...formdata, qualification:e.target.value})}
                placeholder="Your Qualification :"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Enter Experience (in Year) <span className="text-danger">*</span>
              </label>
              <input
                name="experience"
                id="experience"
                type="number"
                className="form-control"
                placeholder="Your Experience :"
                onChange={(e)=>setFormdata({...formdata, experience:e.target.value})}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Your speclization <span className="text-danger">*</span>
              </label>
              <input
                name="speclization"
                id="speclization"
                type="text"
                className="form-control"
                onChange={(e)=>setFormdata({...formdata,specialization:e.target.value})}
                placeholder="Your speclization :"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Your Fees per Consultation (in Rupesss) <span className="text-danger">*</span>
              </label>
              <input
                name="Fees"
                id="Fees"
                type="number"
                className="form-control"
                onChange={(e)=>setFormdata({...formdata,feesPerCunsaltation:e.target.value})}
                placeholder="Your Fees :"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">
                Enter Your address <span className="text-danger">*</span>
              </label>
              <input
                name="adress"
                id="adress"
                type="text"
                className="form-control"
                placeholder="Your Adress :"
                onChange={(e)=>setFormdata({...formdata,address:e.target.value})}

              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-grid">
              <button
                onClick={(e) => handleSubmit(e)}
                className="btn btn-primary"
              >
                Continue to SignUp Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorForm
