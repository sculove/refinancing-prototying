import type {SVGStyleProps} from '@financial/common-icons';

function IconCheckboxFillBold({
    fill = '#222',
    width = '100%',
    height = '100%',
    viewBox = '0 0 22 22',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <circle cx="11" cy="11" r="10.5" fill={fill} stroke={fill} />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.01315 15.4285C8.83232 15.4291 8.65857 15.3583 8.52972 15.2314L5.19972 11.9374C5.07188 11.8114 4.99991 11.6394 4.99991 11.46C4.99991 11.2805 5.07188 11.1085 5.19972 10.9825C5.46765 10.7186 5.89779 10.7186 6.16572 10.9825L9.01315 13.7974L15.8334 7.05425C16.1014 6.79035 16.5315 6.79035 16.7994 7.05425C16.9275 7.18011 16.9996 7.35213 16.9996 7.53168C16.9996 7.71123 16.9275 7.88325 16.7994 8.00911L9.49658 15.2314C9.36787 15.3586 9.19411 15.4298 9.01315 15.4294" fill="#fff"/>
    </svg>;
}

export default IconCheckboxFillBold;
