import { Button, Box, Typography, Avatar } from '@mui/material'
import { observer } from 'mobx-react-lite';
import UserModel from 'modals/User.model';
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
                <Typography>{UserModel.name}</Typography>
                <Box sx={{ display: 'flex', gap: '20px' }}>


                    {UserModel.isLoggedIn() ? <Link to={ROUTES.PROFILE}>
                        <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTm_W1tsgC3Dvt4S8tV_GbmIkwBPLkFR7eg&usqp=CAU" />
                    </Link> : <><SignInModal /> <SignUpModal /></>}


                </Box>
            </Box>
        </>
    )
}

export default observer(Header)

