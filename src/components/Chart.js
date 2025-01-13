import { memo, useEffect, useRef } from "react";

const Chart = ({ symbol }) => {

    const container = useRef()

    useEffect(() => {
        let script = document.createElement('script')
        script.setAttribute('src', 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js')
        script.async = true
        script.type = "text/javascript"
        script.innerHTML = `
        {
            "symbol": ${symbol},
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": [
                "1d|1",
                "1m|30",
                "3m|60",
                "12m|1D",
                "60m|1W",
                "all|1M"
              ],
            "backgroundColor": "#ff0000",
            "colorTheme": "light",
            "isTransparent": true,
            "autosize": false,
            "largeChartUrl": ""
        }
        `
        container.current.appendChild(script)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noreferrer" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div>
        </div>
    );
}

export default memo(Chart);