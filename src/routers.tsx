import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { Links } from "./utils/links";
import Home from "./pages/home";
import Info from "./pages/info";
import NotFound from "@deal/pages/not-found";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Links.home} element={<Home />} />
                <Route path={`${Links.info}/:id`} element={<Info />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;