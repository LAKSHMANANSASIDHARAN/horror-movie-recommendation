import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Preferences() {
  const navigate = useNavigate();

  const handleTypeSelect = (type) => {
    localStorage.setItem("type", type);
    navigate("/recommendations");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container">
        <h1>Select Movie Type</h1>
        <div className="options-grid">
          <button onClick={() => handleTypeSelect("ghost")}>Ghost</button>
          <button onClick={() => handleTypeSelect("family-ghost")}>Family Ghost</button>
          <button onClick={() => handleTypeSelect("psychological")}>Psychological</button>
          <button onClick={() => handleTypeSelect("all")}>All Movies</button> {/* 🆕 New Button */}
        </div>
      </div>
    </motion.div>
  );
}

export default Preferences;
