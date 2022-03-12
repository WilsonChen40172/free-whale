import { Router, Route, Link } from 'react-router'

function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>

    );
}

export default Router;