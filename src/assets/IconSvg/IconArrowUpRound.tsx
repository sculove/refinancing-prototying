import type {SVGStyleProps} from '@financial/common-icons';

function IconArrowUpRound({
    fill = '#0067ac',
    width = '100%',
    height = '100%',
    viewBox = '0 0 12 7',
    style = {},
}: SVGStyleProps) {
    return (
        <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
            <path d="m1 6 5-5 5 5" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default IconArrowUpRound;
