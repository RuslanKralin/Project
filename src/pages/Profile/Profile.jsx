import { Box, Button} from '@mui/material'

import { Formik } from 'formik';
import * as yup from 'yup'
import { FormInput } from 'shared/ui';
import { UserModel } from 'modals';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { emailValidation, nameValidation, passwordValidation } from 'shared/helpers';


const validationSchema = yup.object().shape({
    name: nameValidation(),
    email: emailValidation(),
    password: passwordValidation()
 
})

function Profile() {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: 400,
                p: 4,
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
                maxWidth: 400,
                borderRadius: 6,
               
            }}
        >
            <Formik
                initialValues={{
                    name: UserModel.name,
                    email: UserModel.email,
                    password: UserModel.password,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    UserModel.changeInfo(values)
                }}
            >
                {({ handleSubmit }) => (
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        <FormInput name="name" />
                        <FormInput name="email" />
                        <FormInput name="password" />
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
            <Button
                variant="outlined"
                color="error"
                onClick={() => {
                    UserModel.logOut()
                    navigate(ROUTES.HOME)
                }}
            >
                Log out
            </Button>
        </Box>
    )
}

export default Profile