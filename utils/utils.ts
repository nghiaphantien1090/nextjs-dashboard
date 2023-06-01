//---------------------------color helper function------------------
const prefix = '--bs-'
const hexToRgb = (hexValue: string): number[] | null => {
    let hex;
    hexValue.indexOf('#') === 0 ? (hex = hexValue.substring(1)) : (hex = hexValue);

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        })
    );
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};

const rgbaColor = (color: string = '#fff', alpha: number = 0.5): string => {
    return `rgba(${hexToRgb(color)}, ${alpha})`;
};
const getColor = (name: string, dom: any=undefined) => {
    let color;
    if (typeof window !== "undefined") {
        dom = document.documentElement
         color = getComputedStyle(dom).getPropertyValue(`${prefix}${name}`).trim() 
    }
    return color
};

const getPosition = (pos: number[], params: any, dom: HTMLElement, rect: DOMRect, size: any) => {
    return {
        top: pos[1] - size.contentSize[1] - 10,
        left: pos[0] - size.contentSize[0] / 2,
    };
}
function getFormatter(params: any[]) {
    var _params$ = params[0],
        name = _params$.name,
        value = _params$.value;
    return "".concat(name, ": ").concat(value);
}
const getPropsStyleValue = (name: string, dom: any=undefined) => {
    let color;
    if (typeof window !== "undefined") {
        dom = document.documentElement
         color = getComputedStyle(dom).getPropertyValue(`${prefix}${name}`).trim() 
    }
    return color
};
const utils =  {
        rgbaColor,
        getColor
        ,getPosition
        ,getFormatter,
        getPropsStyleValue
}
export default utils