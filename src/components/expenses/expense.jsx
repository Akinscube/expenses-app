import "../../assets/styles/components/expense.css";
import { deleteExpense } from "../../helper/firebase/transactions/expenses";
import { useDispatch, useSelector } from "react-redux";

const Expense = (props) => {
  const { date, id, title, amount, toggleModal } = props;

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.auth.userStatus);

  const expensesStatus = useSelector((state) => state.expenses.expensesStatus);
  const expenses = expensesStatus.expenses;

  const customDeleteHook = deleteExpense(dispatch);

  const expenseDate = new Date(date).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="expense">
      <div className="expense-inner-wrapper">
        <div className="expense-date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <h5>{expenseDate}</h5>
        </div>
        <div className="expense-title">{title}</div>
        <div className="expense-total">
          ₦ {parseFloat(amount).toLocaleString("en")}
        </div>
        <div className="expense-actions">
          {/* <button className="expense-edit" onClick={toggleModal}>edit</button> */}
          <div
            className="expense-delete"
            
          >
            <svg
              className="delete-icon"
              onClick={() => customDeleteHook(userStatus.user.uid, id)}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.800000pt"
              height="17.800000pt"
              viewBox="0 0 4.800000 4.800000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,4.800000) scale(0.000938,-0.000938)"
                stroke="none"
              >
                <path
                  d="M1890 4849 c-44 -18 -90 -59 -113 -102 -21 -40 -22 -56 -25 -284 l-3
                                -243 -448 0 -447 0 -51 -25 c-61 -31 -107 -91 -107 -141 0 -46 48 -112 103
                                -141 l44 -23 1717 0 1717 0 44 23 c59 31 113 109 105 152 -10 50 -55 103 -109
                                130 l-51 25 -447 0 -448 0 -3 243 c-3 237 -4 243 -28 287 -14 24 -45 58 -68
                                75 l-44 30 -656 2 c-418 1 -666 -2 -682 -8z m1140 -474 l0 -155 -470 0 -470 0
                                0 155 0 155 470 0 470 0 0 -155z"
                />
                <path
                  d="M1024 3560 c-21 -9 -51 -30 -66 -46 -61 -66 -58 11 -58 -1303 0
                                -1299 -1 -1268 55 -1416 79 -210 268 -401 476 -479 151 -57 140 -56 1129 -56
                                989 0 978 -1 1129 56 206 78 397 269 475 475 58 154 56 112 56 1421 0 1150 -1
                                1205 -19 1243 -23 49 -64 89 -112 109 -35 14 -39 14 -87 -10 -31 -15 -61 -40
                                -78 -66 l-29 -41 -5 -1261 c-5 -1371 -1 -1271 -59 -1383 -49 -98 -175 -183
                                -297 -203 -79 -13 -1869 -13 -1948 0 -124 20 -247 104 -298 203 -57 112 -53
                                12 -58 1383 l-5 1261 -27 39 c-27 39 -61 64 -110 83 -18 7 -35 5 -64 -9z"
                />
                <path
                  d="M2085 3134 c-44 -24 -75 -54 -96 -96 -18 -36 -19 -70 -19 -796 l0
                                -759 23 -44 c29 -55 95 -103 141 -103 50 0 110 46 141 107 l25 51 0 746 0 746
                                -25 51 c-43 86 -129 130 -190 97z"
                />
                <path
                  d="M2945 3136 c-44 -20 -83 -60 -105 -108 -19 -41 -20 -73 -20 -789 l0
                                -745 25 -51 c30 -60 91 -107 139 -107 45 0 103 39 137 93 l29 45 0 763 c0 684
                                -2 767 -16 796 -23 45 -53 76 -96 98 -43 22 -53 23 -93 5z"
                />
              </g>
            </svg>
          </div>
          {/* <button  >delete</button> */}
        </div>
      </div>
    </div>
  );
};

export default Expense;
