import { Button, Box } from '@mui/material'
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

import { SignInModal } from './ui';




function Header() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
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
                </Box>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    {/* <Button variant="outlined" startIcon={<AssignmentIndIcon />}>
                        Sign in
                    </Button> */}
                    <SignInModal />
                    <Button variant="contained" endIcon={<ExitToAppIcon />}>
                        Sign up
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Header

