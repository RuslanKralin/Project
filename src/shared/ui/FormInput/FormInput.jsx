import { TextField } from "@mui/material";
import { useFormikContext } from "formik";


function FormInput({ name,label}) {
   const {handleChange, handleBlur, values, errors, touched} = useFormikContext()// должен находится именно внутри. это условие этого хука
   
    return (
        <><TextField
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            label={label || name} // если  name есть то он вправо не бкдет смотреть
            variant='outlined'
        />
            <div style={{ color: 'red' }}>
                {errors[name] && touched[name] && errors[name]}
            </div></>
    );
}

export default FormInput