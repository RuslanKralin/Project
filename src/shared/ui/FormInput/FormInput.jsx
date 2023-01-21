import { TextField } from "@mui/material";
import { useFormikContext } from "formik";


function FormInput({ name,label}) {
   const { setFieldValue, handleBlur, values, errors, touched} = useFormikContext()// должен находится именно внутри. это условие этого хука
   
    return (
        <><TextField
            name={label || name}
            onChange={((e)=>setFieldValue(name, e.target.value ,console.log('Значения', e.target.value)))}
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