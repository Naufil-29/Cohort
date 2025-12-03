import { useRef, useState } from "react";
import Button from "./components/Button";

export function Otp() {
  const number = 6; // kitne OTP boxes chahiye
  const ref = useRef([]); // ref.current will be an array of input DOM nodes
  const [disabled, setDisabled] = useState(true); // Sign In button initially disabled

  // helper: check agar saare inputs filled hain to button enable kare
  function checkAllFilled() {
    const allFilled =
      Array.isArray(ref.current) &&
      ref.current.length === number &&
      ref.current.every((el) => el && el.value && el.value.trim() !== "");
    setDisabled(!allFilled);
  }

  return (
    <div className="flex justify-center items-center">
      {Array(number)
        .fill(0)
        .map((_, index) => (
          <SubOtpBox
            key={index}
            reference={(e) => {
              // ensure ref.current is an array
              if (!Array.isArray(ref.current)) ref.current = [];
              ref.current[index] = e;
            }}
            onDone={() => {
              // move focus to next input (agar hai)
              if (index + 1 < number && ref.current[index + 1]) {
                ref.current[index + 1].focus();
              }
              checkAllFilled();
            }}
            goBack={() => {
              // focus previous input (agar hai)
              if (index > 0 && ref.current[index - 1]) {
                ref.current[index - 1].focus();
              }
              checkAllFilled();
            }}
          />
        ))}

      <br />
      <div className="mt-4">
        <Button disabled={disabled}>Sign In</Button>
      </div>
    </div>
  );
}

function SubOtpBox({ reference, onDone, goBack }) {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return (
    <div>
      <input
        value={inputBoxVal}
        ref={reference}
        maxLength={1} // ek hi character allow kare
        inputMode="numeric" // mobile keyboards ke liye numeric hint
        onKeyDown={(e) => {
          // Backspace ko pehle handle karna (value clear + goBack)
          if (e.key === "Backspace") {
            // agar current box me already empty hai, to previous par jao
            if (inputBoxVal === "") {
              goBack();
            } else {
              // agar kuch value hai, to usko clear karo (aur prevent default extra behavior)
              e.preventDefault();
              setInputBoxVal("");
              // parent ko batado (so it can check button state)
              // note: onDone is intended for forward-focus; we call check by invoking goBack/onDone side-effects from parent via focus changes
              // here just trigger parent's check by calling onDone (it will check filled state)
              onDone();
            }
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          // accept only single digit 0-9
          if (/^[0-9]$/.test(val)) {
            setInputBoxVal(val);
            onDone();
          } else {
            // agar paste/invalid char hua (jaise "12" ya letter), ignore first char that is digit
            const firstDigit = (val.match(/[0-9]/) || [])[0];
            if (firstDigit) {
              setInputBoxVal(firstDigit);
              onDone();
            } else {
              setInputBoxVal("");
            }
          }
        }}
        type="text"
        className="m-1 w-10 h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center"
      />
    </div>
  );
}
