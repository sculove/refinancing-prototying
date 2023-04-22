import type {SVGStyleProps} from '@financial/common-icons';

function IconBackHeader({
    fill = '#222',
    width = '100%',
    height = '100%',
    viewBox = '0 0 30 30',
    style = {},
}: SVGStyleProps) {
  return <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g stroke={fill} strokeWidth="1.5" fill="none" fillRule="evenodd">
            <path d="M6.98 15H25" />
            <path strokeLinejoin="round" d="M14.521 7 6.5 15.021 14.521 23" />
        </g>
    </svg>;
}

export default IconBackHeader;
