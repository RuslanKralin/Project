import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Formik } from 'formik';
import { display } from '@mui/system';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

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
    const [open, setOpen] = useState(false);
    // const [email, setEmail] = useState('');
    // const [password, SetPassword] = useState('');
    // const [confirm, SetConfirm] = useState('');
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
                        initialValues={{ email: '', password: '', confirm: '' }}
                        validate={values => {
                            const errors = {};
                            if (values.email.length < 3) {
                                errors.email = 'Less then 3';
                                // } else if (
                                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                // ) {
                                //     errors.email = 'Invalid email address';
                            } else if (values.email.length > 30) {
                                errors.email = 'More then 30!!!'

                            } else if (values.password.length < 6) {
                                errors.password = 'Less then 6!!!'
                            }
                            else if (values.password != values.confirm) {
                                errors.confirm = 'Check your password please'
                            }
                            return errors;

                        }}
                        onSubmit={(values) => {
                            console.log(values)

                        }}
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
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <TextField
                                    type="text"
                                    name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    label="Name"
                                />
                                <TextField
                                    type="text"
                                    name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.secondName}
                                    label="Second name"
                                />


                                <TextField
                                id='email'
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    label="Email"
                                    style={
                                        errors.email && touched.email
                                            ? { border: '2px solid #ff1f44' }
                                            : {  }
                                    }
                                />

                                {errors.email && touched.email && errors.email}
                                <TextField
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    label="Password"
                                />
                                {errors.password && touched.password && errors.password}
                                <TextField
                                    type="password"
                                    name="confirm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirm}
                                    label="Confirm"
                                />
                                {errors.confirm && touched.confirm && errors.confirm}
                                <Button type="submit" variant="contained" color="success" disabled={isSubmitting}>
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

{/* <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=" "
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue=" "
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Confirm"
                        defaultValue=" "
                    />

                    <Button variant="contained" color="success">
                        SIGN IN
                    </Button> */}