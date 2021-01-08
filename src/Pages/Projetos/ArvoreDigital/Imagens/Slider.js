import React from "react";
import { useSprings, animated } from "react-spring";

const styles = {
    container: {
        position: "relative",
        height: "100%",
        width: "100%"
    },
    item: {
        position: "absolute",
        height: "50%",
        willChange: "transform",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default function Slider({
    items,
    width = 500,
    visible = 4,
    style,
    children
}) {
    const idx = React.useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
        items
    ]);
    const getPos = React.useCallback(
        (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
        [idx]
    );
    const [springs, set] = useSprings(items.length, i => ({
        x: (i < items.length - 1 ? i : -1) * width
    }));
    const transform = x => x.interpolate(x => `translate3d(${x}px,0,0)`);
    const prev = React.useRef([0, 1]);
    const [scrollPos, setScroll] = React.useState(0);

    const runSprings = React.useCallback(
        (y, vy) => {
            const firstVis = idx(Math.floor(y / width) % items.length);
            const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;
            set(i => {
                const position = getPos(i, firstVis, firstVisIdx);
                const prevPosition = getPos(i, prev.current[0], prev.current[1]);
                const rank =
                    firstVis - (y < 0 ? items.length : 0) + position - firstVisIdx;
                return {
                    x: (-y % (width * items.length)) + width * rank,
                    immediate: vy < 0 ? prevPosition > position : prevPosition < position
                };
            });
            prev.current = [firstVis, firstVisIdx];
        },
        [idx, getPos, width, visible, set, items.length]
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setScroll(scrollPos + width);
        }, 2000);
        return () => clearInterval(interval);
    }, [width, scrollPos]);

    runSprings(scrollPos, 100);

    return (
        <div
            style={{
                ...style,
                ...styles.container
            }}
        >
            {springs.map(({ x, vel }, i) => (
                <animated.div
                    key={i}
                    style={{
                        ...styles.item,
                        width,
                        transform: transform(x)
                    }}
                    children={children(items[i], i)}
                />
            ))}
        </div>
    );
}
