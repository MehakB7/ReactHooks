import Canvas from "./components/Canvas";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Home from "./components/UserEdit";
import Basket from "./components/Basket";
import Factorial from "./components/Factorial";
import Scroller from "./components/Scroll";
import Defer from "./components/Defer";
import Listing from "./components/Listing.jsx";
import SoundPlayerWrapper from "./components/SoundPlayer";

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
    },
    {
        title: "useReducer Hook",
        desc: "A basic details component",
        component: <Basket />
    },
    {
        title: "useMemo Hook",
        desc: "A basic Memo component",
        component: <Factorial />

    },
    {
        title: "useImperitiveHandler Hook",
        desc: "A basic Scroller with buttons component",
        component: <Scroller />
    },
    {
        title: "useDeferredValue Hook",
        desc: "A basic Scroller with buttons component",
        component: <Defer />
    },
    {
        title: "useTranslation Hook",
        desc: "A basic List with search",
        component: <Listing />
    },
    {
        title: "Audio Contoller",
        desc: "A basic audio controller using Imperitive handler",
        component: <SoundPlayerWrapper />
    }

]