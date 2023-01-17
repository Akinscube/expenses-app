import Expenses from "../components/expenses/expenses";
import Sidebar from "../components/sidebar";
import "../assets/styles/pages/expenses-page.css";
import ExpensesSidebar from "../components/expenses/expenses-sidebar";
import { useState } from "react";
import Report from "../components/report/report";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const ExpensesPage = () => {
  const [showExpenses, setShowExpenses] = useState(true);
  const [showReport, setShowReport] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const showSidebar = () => setIsSidebar(!isSidebar);

  if (isSidebar) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "visible";

  const handleReport = () => {
    setShowReport(true);
    setShowExpenses(false);
  };

  const handleExpenses = () => {
    setShowReport(false);
    setShowExpenses(true);
  };

  return (
    <div className="expenses-page">
      <div className={`${isSidebar ? "menu-bars" : "menu-bars active-button"}`}>
        <FaIcons.FaBars onClick={showSidebar} />
      </div>
      <div
        to="#"
        className={`${isSidebar ? "exit-bar active-button" : "exit-bar"}`}
      >
        <AiIcons.AiOutlineClose className="exit" onClick={showSidebar} />
      </div>
      {isSidebar ? (
        <ExpensesSidebar
          isSidebar={isSidebar}
          handleExpenses={handleExpenses}
          handleReport={handleReport}
        />
      ) : null}
      <ExpensesSidebar
        handleExpenses={handleExpenses}
        handleReport={handleReport}
      />

      {showExpenses ? <Expenses /> : showReport ? <Report /> : null}
    </div>
  );
};

export default ExpensesPage;
