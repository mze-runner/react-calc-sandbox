import { Routes, Route } from 'react-router-dom';

// import HomePage from './Pages/HomePage';
import BasicCalculatorPage from './Pages/BasicCalculator';
import TemplateFormulaPage from './Pages/TemplateFormulaPage';
import HomePage from './Pages/HomePage';
import AddUpPage from './Pages/AddUpPage';

function AppRouter() {
    return (
        <Routes>
            <Route index element={<BasicCalculatorPage />} />
            <Route path="temp" element={<TemplateFormulaPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="add" element={<AddUpPage />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    );
}

export default AppRouter;
