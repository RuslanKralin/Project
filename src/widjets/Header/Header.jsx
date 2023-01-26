import { Button, Box, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite';
import UserModal from 'modals/User.model';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

import { SignInModal, SignUpModal } from './ui';




function Header() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {' '}
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Link to={ROUTES.HOME}>
                        <Button>
                            Home
                        </Button>
                    </Link>
                    <Link to={ROUTES.POSTS}>
                        <Button>
                            Posts
                        </Button>
                    </Link>
                    <Link to={ROUTES.STATS}>
                        <Button>
                            Stats
                        </Button>
                    </Link>
                </Box>
                <Typography>{UserModal.name}</Typography>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    {/* <Button variant="outlined" startIcon={<AssignmentIndIcon />}>
                        Sign in
                    </Button> */}
                    <SignInModal />
                    <SignUpModal />

                </Box>
            </Box>
        </>
    )
}

export default observer (Header)

