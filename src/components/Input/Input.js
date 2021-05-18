import React, {useRef, useImperativeHandle} from 'react';

import classes from './Input.module.css'; 

// The ref argument allows binging the component with external components,
// However, is necessary to wrap the component with an special fucntion called
// React.forwardRef
const Input = React.forwardRef((props, ref) => {
    // Connect as a reference with the input
    const inputRef = useRef();

    // // Apply changes over the input referenced
    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []); // If it's empty the last inpute rendered will be focused

    const activate = () => {
        inputRef.current.focus();
    }

    // Expose this object externaly
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`} 
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
});

export default Input;