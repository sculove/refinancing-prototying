import type {SVGStyleProps} from '@financial/common-icons';

function IconArrowRight({
    fill = '#09aa5c',
    width = '100%',
    height = '100%',
    viewBox = '0 0 6 10',
    style = {},
}: SVGStyleProps) {
    return (
        <svg width={width} height={height} viewBox={viewBox} style={style}>
            <path d="m1 1 4 4-4 4" stroke={fill} strokeWidth="1.2" fill="none" fillRule="evenodd" />
        </svg>
    );
}

export default IconArrowRight;
