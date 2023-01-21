import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Formik } from 'formik';
import * as yup from 'yup'
import { FormInput } from 'shared/ui';


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
    gap: '30px',
    flexDirection: 'column'
};

function SignInModal() {
    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(2, 'Too short!')
            .max(12, 'Too long!')
            .required('Обязательно имя'),
        // secondName: yup.string().typeError('Только буквы').required('Обязательно'),
        // email: yup.string().email('Введите верный email бля').required('Обязательно'),
        password: yup.string()
            .min(6, 'Too short!')
            .max(12, 'Too long!')
            .required('Обязательно'),
        // confirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" startIcon={<AssignmentIndIcon />}>
                Sign in
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
                            // secondName: '',
                            // email: '',
                            password: '',
                            // confirm: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values)

                        }}

                    >
                        {({
                            // values,
                            // errors,
                            // touched,
                            // handleChange,
                            // handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                                <FormInput name="name" />
                                <FormInput name="password" />

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

export default SignInModal

