import type {SVGStyleProps} from '@financial/common-icons';

function IconArrowDown({
    fill = '#1e1e23',
    width = '100%',
    height = '100%',
    viewBox = '0 0 10 6',
    style = {},
}: SVGStyleProps) {
    return (
        <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
            <path d="m1 1 4 4 4-4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default IconArrowDown;
