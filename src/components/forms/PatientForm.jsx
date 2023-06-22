import React,{ useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPatient } from '../../features/signup/SignUpSlice';

const PatientForm = ({hide}) => {
    const data = {
        age:"",
        medicalHistory:"",
        gender:"",
        condition:"",
        address:""
      }
      
      const dispatch = useDispatch()
      const [formdata, setFormdata] = useState(data)
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addPatient(formdata))
        hide();
      }
  return (
    <div className="modal-body p-3 pt-4">
      <div>
      <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Enter age <span className="text-danger">*</span>
              </label>
              <input
                name="age"
                id="age"
                type="number"
                className="form-control"
                onChange={(e)=>setFormdata({...formdata, age:e.target.value})}
                placeholder="Your age :"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Choose Gender <span className="text-danger">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                placeholder="Your gender :"
                onChange={(e)=>setFormdata({...formdata, gender:e.target.value})}
              >
                <option>Select Gender</option>
                <option>Male (M)</option>
                <option>Female (F)</option>
                <option>others</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Your Medical-History <span className="text-danger">*</span>
              </label>
              <input
                name="Medical-History"
                id="Medical-History"
                type="text"
                className="form-control"
                onChange={(e)=>setFormdata({...formdata,medicalHistory:e.target.value})}
                placeholder="Your Medical History :"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">
                Your Condition <span className="text-danger">*</span>
              </label>
              <input
                name="Fees"
                id="Fees"
                type="text"
                className="form-control"
                onChange={(e)=>setFormdata({...formdata,condition:e.target.value})}
                placeholder="Enter your condition:"
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
  );
};
export default PatientForm;
