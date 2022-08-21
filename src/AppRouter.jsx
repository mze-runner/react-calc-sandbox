import { Routes, Route } from 'react-router-dom';

// import HomePage from './Pages/HomePage';
import BasicCalculatorPage from './Pages/BasicCalculator';
import TemplateFormulaPage from './Pages/TemplateFormulaPage';

function AppRouter() {
    return (
        <Routes>
            <Route index element={<BasicCalculatorPage />} />
            <Route path="temp" element={<TemplateFormulaPage />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    );
}

export default AppRouter;
