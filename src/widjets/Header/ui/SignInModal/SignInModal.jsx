import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Formik } from 'formik';
import * as yup from 'yup'
import { FormInput } from 'shared/ui';
import UserModel from 'modals/User.model';
import { nameValidation, passwordValidation } from 'shared/helpers';


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
        name: nameValidation(),
        password: passwordValidation()
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
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values)
                            UserModel.signIn(values)// тут ьы вызвали метод у модели. Это альтернатива нижним двум строчкам
                            
                            UserModel.name = values.name
                            UserModel.password = values.password

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

