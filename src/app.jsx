import { render } from "react-dom";
import React, { useReducer } from "react";
import { config } from "./config";
console.log(config);
const App = () => {
  const reducer = (state, action) => {
    if (action.type === "CHANGE_VALUE") {
      return state.map((item, index) => {
        if (index === action.index) {
          return { ...item, [action.key]: action.value };
        } else {
          return item;
        }
      });
    } else {
      return state;
    }
  };

  const [state, dispactch] = useReducer(reducer, config);

  console.log(state, dispactch);

  const handlechangeInput = (index, key, value) => {
    console.log(index, key, value);
    dispactch({
      type: "CHANGE_VALUE",
      index,
      key,
      value,
    });
  };

  const handleDownload = (item) => {
    let url = item.url.includes("?")?item.url:item.url+'?';
    Object.keys(item).forEach((key) => {
      const ignoreKey = ["regionName", "title", "url"];
      if (!ignoreKey.includes(key)) {
        if (key === "filed") {
          url += key+ "=" + item[key].join(",") + "&"
        } else {
          url += key + "=" +item[key] + "&"
        }
      }
    });
    console.log(url)
  };

  return (
    <div>
      {state &&
        state.map((item, index) => {
          return (
            <>
              {" "}
              <span>{item.title}</span>
              <label>
                开始时间：
                <input
                  onChange={(event) =>
                    handlechangeInput(
                      index,
                      "createTime_begin",
                      event.target.value
                    )
                  }
                  type="date"
                  value={item.createTime_begin}
                />
              </label>
              <label>
                结束时间：
                <input
                  onChange={(event) =>
                    handlechangeInput(
                      index,
                      "createTime_end",
                      event.target.value
                    )
                  }
                  type="date"
                  value={item.createTime_end}
                />
              </label>
              <input
                onClick={() => handleDownload(item)}
                type="submit"
                value="下载"
              />
            </>
          );
        })}
    </div>
  );
};

render(<App />, document.querySelector("#root"));
