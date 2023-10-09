import React, { useReducer } from "react";

const reducerFun = (state, action) => {
  console.log("inside this reducer fn");
  let index, item;
  switch (action.type) {
    case "ADD_TO_BASKET":
      index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        const item = { ...state[index] };
        item.quantity += 1;
        state[index] = item;
      } else {
        state.push({ ...action.payload, quantity: 0 });
      }

      return [...state];

    case "INCRMENT_QUANTITIY":
      index = state.findIndex((item) => item.id === action.payload.id);
      item = { ...state[index] };
      item.quantity = action.payload.quantity;
      state[index] = item;

      return [...state];

    case "DECREMENT_QUANTITIY":
      index = state.findIndex((item) => item.id === action.payload.id);
      item = { ...state[index] };
      item.quantity = action.payload.quantity;
      state[index] = item;

      return [...state];

    case "REMOVE_FROM_BASKET":
      const remove = state.filter((item) => item.id !== action.payload.id);
      return [...remove];
    case "REMOVE_ALL_FROM_BASKET":
      return [];
    default:
      return state;
  }
};

const Items = ({ dispatch, state }) => {
  let items = [
    {
      name: "Notebook",
      id: "nb",
      price: 50,
    },
    {
      name: "Pen",
      id: "pn",
      price: 20,
    },
    {
      name: "Pencil",
      id: "pnc",
      price: 3,
    },
    {
      name: "Eraser",
      id: "er",
      price: 3,
    },
  ];

  const isPresent = (id) => {
    const item = state.find((item) => item.id === id);
    return item;
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "400px",
          }}
        >
          <p> {item.name}</p>
          <button
            style={{ width: "100px", height: "20px" }}
            onClick={() => {
              const element = isPresent(item.id);

              dispatch(
                !element
                  ? {
                      type: "ADD_TO_BASKET",
                      payload: { ...item, quantity: 0 },
                    }
                  : {
                      type: "INCRMENT_QUANTITIY",
                      payload: {
                        id: element.id,
                        quantity: element.quantity + 1,
                      },
                    }
              );
            }}
          >
            {" "}
            Add to card
          </button>
        </div>
      ))}
    </div>
  );
};

const Basket = () => {
  const [state, dispatch] = useReducer(reducerFun, []);

  return (
    <div>
      <Items dispatch={dispatch} state={state} />
      <div style={{ border: "1px solid pink", padding: "2rem" }}>
        {state.map((item, index) => {
          return (
            <div
              style={{
                border: "0.5px solid black",
                marginBottom: "10px",
                display: "flex",

                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <b>{item.name}</b>
              <div>
                qty: <b>{item.quantity}</b>
                <button
                  disabled={item.quantity <= 1}
                  onClick={() =>
                    dispatch({
                      type: "DECREMENT_QUANTITIY",
                      payload: { id: item.id, quantity: item.quantity - 1 },
                    })
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCRMENT_QUANTITIY",
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
              </div>
              <span>price:{item.price * item.quantity}</span>
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_BASKET",
                    payload: { id: item.id },
                  })
                }
              >
                remove from basket
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
