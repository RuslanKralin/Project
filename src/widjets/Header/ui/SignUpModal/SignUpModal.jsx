import { useState } from 'react';
import { Box, Button, MenuItem, Modal } from '@mui/material'

import { Formik } from 'formik';
import * as yup from 'yup'
import { FormInput, FormSelect } from 'shared/ui';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const experience = [
    {key:'one', value: 1},
    {key:'two', value: 2},
    {key:'three', value: 3},
    {key:'four', value: 4},
    {key:'five', value: 5}   
]

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
        .required('Обязательно имя'),
    secondName: yup.string()
        .min(3, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно фамилия'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string()
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно'),
    confirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    // Age: yup.string().required('Введите возраст')// не работает
})

function SignUpModal() {
    // const [age, setAge] = useState('');
    // const [male, setMale] = useState('');

    // const handleChangeAge = (event) => {
    //     setAge(event.target.value);
    // };
    // const handleChangeMale = (event) => {
    //     setMale(event.target.value);
    // };
    // console.log(male)
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
                            confirm: '',
                            male: '',
                            age: '',
                            experience: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values)

                        }}

                    >
                        {({
                            values,// хранит все текущие значения формика
                            handleSubmit,
                            setFieldValue,// устанавливает и меняет значения поля Male, age  и formic будет отслеживать теперь


                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                <FormInput name="name" label='Name' />
                                <FormInput name="secondName" label='Second name' />
                                <FormInput name="email" label='Email' />
                                <FormInput name="password" label='Password' />
                                <FormInput name="confirm" label='Confirm' />
                               
                               
                                <FormSelect name='age'>{/* age и male прокидываем через children */}
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    <MenuItem value={40}>Fourty</MenuItem>
                                    <MenuItem value={50}>Fivety</MenuItem>
                                </FormSelect>

                                <FormSelect name='male'>{/* age и male прокидываем через children */}
                                    <MenuItem value="M">Men</MenuItem>
                                    <MenuItem value="W">Women</MenuItem>
                                </FormSelect>
                                
                                <FormSelect name='experience' options={experience}/>

                               

                                {/* <FormSelect name='experience'>
                                   {experience.map((item)=>(<MenuItem key={item.key} value={item.value}>{item.key}</MenuItem>)
                                    // console.log(item.key, item.value )
                                   )}
                                </FormSelect> */}

                                {/* <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Male</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.male}
                                        label="Male"
                                        onChange={(e) => {
                                            setFieldValue(
                                                'male',
                                                e.target.value // после этого в консоли появится поле male со значением                                            
                                            )
                                        }}
                                    >
                                        <MenuItem value='M'>Men</MenuItem>
                                        <MenuItem value='W'>Women</MenuItem>
                                    </Select>
                                </FormControl> */}
                                
                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="success"
                                >
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

