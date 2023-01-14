import React, { useState } from "react";
import "../../assets/styles/components/expenses-navbar.css";

const ExpensesNavbar = () => {

  const [styleX, setstyleX] = useState({
    display: "block",
    fill: "none",
    height: 16 + "px",
    width: 16 + "px",
    stroke: "currentColor",
    strokeWidth: 4,
    overflow: "visible",
    transform: "rotate(270deg)",
  });



  



  return (
    <>
      <nav className="navbar">
        <div>
          <div  className="expenses-btn">
            <svg version="1.0" className="expenses-icon" xmlns="http://www.w3.org/2000/svg" width="20.000000pt" height="20.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,50.000000) scale(0.009766,-0.009766)"
               stroke="none">
                <path d="M1417 4605 c-222 -152 -213 -148 -312 -143 l-83 3 -116 79 c-131 90
                -149 92 -193 27 l-23 -34 0 -1977 0 -1977 23 -34 c42 -63 63 -61 175 13 148
                99 152 100 247 96 l82 -3 191 -129 c104 -71 196 -126 204 -124 7 3 88 56 178
                118 217 147 206 143 305 138 l82 -3 191 -129 c104 -71 196 -126 204 -124 7 3
                88 56 178 118 217 147 206 143 305 138 l82 -3 191 -129 c104 -71 196 -126 204
                -124 7 3 88 56 178 118 217 147 206 143 304 138 l82 -3 118 -78 c65 -42 122
                -77 127 -77 6 0 21 7 35 16 58 38 54 -99 54 2047 l0 1974 -23 34 c-42 63 -63
                61 -175 -13 -148 -99 -152 -100 -247 -96 l-82 3 -191 129 c-104 71 -196 126
                -204 124 -7 -3 -86 -56 -176 -117 -217 -148 -208 -144 -307 -139 l-82 3 -191
                129 c-104 71 -196 126 -204 124 -7 -3 -86 -56 -176 -117 -217 -148 -208 -144
                -307 -139 l-83 3 -182 124 c-100 68 -189 125 -198 127 -10 2 -90 -46 -185
                -111z m1998 -1216 c66 -36 70 -48 70 -189 0 -122 -1 -130 -24 -154 -49 -52
                -37 -51 -901 -51 -864 0 -852 -1 -901 51 -23 24 -24 32 -24 154 0 114 2 130
                20 150 24 26 50 41 90 51 17 4 392 7 835 6 727 -2 808 -4 835 -18z m0 -640
                c66 -36 70 -48 70 -189 0 -122 -1 -130 -24 -154 -49 -52 -37 -51 -901 -51
                -864 0 -852 -1 -901 51 -23 24 -24 32 -24 154 0 114 2 130 20 150 24 26 50 41
                90 51 17 4 392 7 835 6 727 -2 808 -4 835 -18z m0 -640 c66 -36 70 -48 70
                -189 0 -122 -1 -130 -24 -154 -49 -52 -37 -51 -901 -51 -864 0 -852 -1 -901
                51 -23 24 -24 32 -24 154 0 114 2 130 20 150 24 26 50 41 90 51 17 4 392 7
                835 6 727 -2 808 -4 835 -18z"/>
              </g>
            </svg>
            <span className="expenses-tab">Expenses</span>
          </div>
          <div className="report-btn">
          
            <svg version="1.0" className="report-icon" xmlns="http://www.w3.org/2000/svg" width="18.000000pt" height="18.000000pt" viewBox="0 0 20.000000 20.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,20.000000) scale(0.002381,-0.001912)"
               stroke="none">
                <path d="M695 10050 c-225 -30 -419 -209 -476 -440 -12 -46 -14 -761 -14
                -4335 0 -4059 1 -4283 18 -4344 28 -102 74 -179 157 -261 85 -85 169 -132 277
                -155 102 -22 6984 -22 7086 0 200 42 372 205 434 411 17 56 18 229 21 3375 l2
                3316 -37 45 c-36 43 -343 370 -908 968 -138 146 -358 380 -490 520 -132 140
                -379 402 -549 583 l-309 327 -2576 -1 c-1417 -1 -2603 -5 -2636 -9z m4786
                -1465 c5 -823 7 -905 23 -960 55 -188 197 -333 386 -398 65 -22 69 -22 898
                -25 l832 -3 0 -2957 c0 -2872 -1 -2958 -19 -2998 -27 -58 -81 -115 -138 -144
                l-48 -25 -3215 0 -3215 0 -51 27 c-59 31 -108 84 -138 147 l-21 46 0 3975 c0
                3823 1 3977 18 4027 20 58 83 130 137 158 18 9 54 21 79 25 25 4 1041 7 2256
                6 l2210 -1 6 -900z m1285 -25 c461 -500 840 -914 842 -920 3 -7 -240 -10 -720
                -10 -617 0 -732 2 -775 15 -64 19 -143 88 -175 153 l-23 47 -3 813 c-1 446 1
                812 6 812 4 0 386 -409 848 -910z"/>
                <path d="M1890 7607 c-54 -28 -104 -97 -114 -156 -14 -88 34 -179 117 -224
                l42 -22 1020 -3 c745 -2 1034 0 1074 8 157 34 222 220 119 344 -67 81 18 76
                -1163 75 l-1050 0 -45 -22z"/>
                <path d="M1911 5479 c-81 -32 -134 -111 -134 -198 0 -86 40 -153 118 -194 l40
                -22 2195 0 2195 0 45 25 c84 47 125 142 106 245 -9 44 -65 109 -117 136 -37
                19 -85 19 -2231 18 -1349 0 -2202 -4 -2217 -10z"/>
                <path d="M1917 3196 c-68 -25 -111 -71 -133 -144 -22 -73 -7 -135 48 -197 72
                -82 -128 -76 2318 -73 l2175 3 40 22 c77 41 115 103 115 188 0 94 -63 181
                -147 204 -26 8 -723 11 -2208 11 -1804 -1 -2176 -3 -2208 -14z"/>
              </g>
            </svg>

          <span className="report-tab">Report</span>
          </div>
          
        </div>
        
      </nav>
    </>
  );
};

export default ExpensesNavbar;