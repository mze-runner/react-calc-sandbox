import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import TemplateFormulaPage from './Pages/TemplateFormulaPage';

function AppRouter() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="temp" element={<TemplateFormulaPage />} />
        </Routes>
    );
}

export default AppRouter;
