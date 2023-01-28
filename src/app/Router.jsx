import { Home, Posts, Stats } from 'pages';
import { NotFound } from 'pages/NotFound';
import { Profile } from 'pages/Profile';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'shared/consts/routes';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.STATS} element={<Stats />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
       </Routes>
    )
}

export default Router 