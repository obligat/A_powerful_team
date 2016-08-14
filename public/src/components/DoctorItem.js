import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class DoctorItem extends Component {
  render() {
    let {name, image, type, hospital} = this.props;
    return (
        <div className="doctorList">
          <div className="text-center col-xs-2 doctor  thumbnail">
            <a className="text-center" href="#">
              <img src={image} alt="..."/>
            </a>
            <div>{name}{type}{hospital}</div>
          </div>
        </div>

    );
  }
}

export default DoctorItem;