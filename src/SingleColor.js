import React, {useState, useEffect} from 'react';
import rgbToHex from './utils';

function SingleColor({ rgb, weight, index, hexColor, noOfShades }) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;
    const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [alert]);

    return (
        <section
            style={{ backgroundColor: `rgb(${bcg})` }}
            className={`color ${index > 100/noOfShades ? 'color-light' : null}`}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            <p className="alert">{alert ? "copied to clipboard" : null}</p>
        </section>
    )
}

export default SingleColor;