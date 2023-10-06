import Canvas from "./components/Canvas";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

export const examples = [
    {

        title: "UseState Example",
        desc: "A Basic Counter Example which used the use state hook to updated the count",
        component: <Counter />

    },
    {

        title: "useEffect Hook Timer",
        desc: "Created a basic Counter which can be start, paused and reset",
        component: <Timer />
    },
    {
        title: "useRef Hook",
        desc: "Created a basic drawing app which uses use Ref to create refernce ",
        component: <Canvas />
    }

]