import React from 'react'

//here we use props
  function Formfield(props) {
    return (
        <>
        <div className="field">
  <label className="label">{props.label}</label>
  <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} />
  </div>
</div>
</>
    )
}

export default Formfield