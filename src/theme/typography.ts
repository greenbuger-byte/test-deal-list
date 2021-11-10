import { weight } from "./fonts";

const baseStyles = (fontSize:string, fontWeight:weight, lineHeight:string) => ({
    fontSize,
    fontWeight,
    lineHeight,
});

export const TITLE_SMALL = {
    ...baseStyles('1.2rem', weight.bold, '1.3rem'),
    letterSpacing: '-0.02rem',
}

export const TITLE_R = {
    ...baseStyles('1.6rem', weight.regular, '1.8rem'),
    letterSpacing: '-0.02rem',
}
export const TEXT_R = {
    ...baseStyles('1.3rem', weight.regular, '1.4rem'),
    letterSpacing: '-0.02rem',
}
export const LABEL_R = {
    ...baseStyles('1.1rem', weight.regular, '1.2rem'),
    letterSpacing: '-0.01rem',
}