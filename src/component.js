import Canvas from "./components/Canvas";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Home from "./components/UserEdit";

export const examples = [
    {

        title: "UseState Example",
        desc: "A Basic Counter Example which used the use state hook to updated the count",
        component: <Counter />

    },
    {

        title: "useEffect Hook Timer",
        desc: "A basic Counter which can be start, paused and reset",
        component: <Timer />
    },
    {
        title: "useRef Hook",
        desc: "A drawing app which uses use Ref to create refernce ",
        component: <Canvas />
    },
    {
        title: "useContext Hook",
        desc: "A basic details component",
        component: <Home />
    }

]