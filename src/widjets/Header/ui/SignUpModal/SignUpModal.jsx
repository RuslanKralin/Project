import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material'
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Formik } from 'formik';
import * as yup from 'yup'
import { FormInput } from 'shared/ui';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    gap: '10px',
    flexDirection: 'column'
};
const validationSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно имяяяя'),
    secondName: yup.string().typeError('Только буквы').required('Обязательно'),
    email: yup.string().email('Введите верный email бля').required('Обязательно'),
    password: yup.string()
        .min(3, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно'),
    confirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
})

function SignUpModal() {
    const [age, setAge] = useState('');
    const [male, setMale] = useState('');

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const handleChangeMale = (event) => {
        setMale(event.target.value);
    };
    console.log(male)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button onClick={handleOpen} variant="contained" endIcon={<ExitToAppIcon />}>
                Sign Up
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={{
                            name: '',
                            secondName: '',
                            email: '',
                            password: '',
                            confirm: ''
                        }}
                        onSubmit={(values) => {
                            console.log(values)

                        }}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                <FormInput name="name" />
                                <FormInput name="secondName" />
                                <FormInput name="email" />
                                <FormInput name="password" />
                                <FormInput name="confirm" />

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChangeAge}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Male</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={male}
                                        label="Male"
                                        onChange={handleChangeMale}
                                    >
                                        <MenuItem value='M'>Men</MenuItem>
                                        <MenuItem value='W'>Women</MenuItem>
                                    </Select>
                                </FormControl>


                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="success"
                                    disabled={isSubmitting}>
                                    Submit

                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}

export default SignUpModal

