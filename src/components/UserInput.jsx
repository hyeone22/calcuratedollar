import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    // 4개의 input을 하나의 상태 객체로 관리하겠다
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 투자액</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>연간 투자량</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>예상 수익</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>투자 기간</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
