import { Home, Posts } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
       </Routes>
    )
}

export default Router 