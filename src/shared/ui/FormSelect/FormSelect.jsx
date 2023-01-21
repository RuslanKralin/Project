import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormikContext } from "formik";



function FormSelect({ name, label, children, options = [] }) {
    const { setFieldValue, values, errors, touched } = useFormikContext()// должен находится именно внутри. это условие этого хука

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label || name}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values[name]}
                    label={label || name}
                    onChange={(e) => {
                        console.log('Select', e.target.value)
                        setFieldValue(name, e.target.value) // после этого в консоли появится поле age со значением                                           
                    }}
                >
                    {options.map((item)=><MenuItem key={item.key} value={item.value}>{item.key}</MenuItem>
                    )}

                    {children} {/* age и male прокидываем так */}
                </Select>
            </FormControl>
            <div style={{ color: 'red' }}>
                {errors[name] && touched[name] && errors[name]}
            </div>

        </>
    );
}

export default FormSelect