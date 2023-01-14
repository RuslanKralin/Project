import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirm, SetConfirm] = useState('');
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
                    <TextField
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
                    </Button>
                 </Box>
            </Modal>
        </div>
    );
}

export default SignInModal