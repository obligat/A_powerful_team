import  React, {Component} from 'react';
import DoctorItem from './DoctorItem';

class Doctors extends Component {
  render() {
    let doctor = this.props.doctors;
    return (
        <div className="row scrol">
          {
            doctor.map((v, k)=> (
                <DoctorItem key={k+1}  name={v.name} image={v.image} type={v.type} hospital={v.hospital} />
            ))
          }
        </div>
    );
  }
}

export default Doctors;