import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateSignUp from "./pages/CandidateSignUp";
import RecruiterSignUp from "./pages/RecruiterSignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/candidate-signup" element={<CandidateSignUp />} />
        <Route path="/recruiter-signup" element={<RecruiterSignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
