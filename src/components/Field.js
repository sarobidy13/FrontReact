import React from 'react';

const Field = (props) => {
    return (
        <>
            <div className="row  align-items-center">
                <div className="col-md-5 ">
                    <label htmlFor={props.name} className="col-form-label">{props.libelle} :</label>
                </div>
                <div className="col-7">
                    <input type={props.type} id={props.name} name={props.name} onChange={props.onChange} value={props.value} placeholder={props.placeholder} className="form-control" aria-describedby="passwordHelpInline" />
                </div>
            </div>
            <br />
        </>
    );
};

export default Field;